import { SplitFactory } from "@splitsoftware/splitio";

enum FeatureFlag {
  AI_ASSISTANT = "ai-assistant",
  CALL_DROP_SUMMARY = "call_drop_summary_org",
  VAH_SUMMARY = "wxcc_virtual_agent_transfer_summary",
  AGENT_WELLNESS_BREAK = "cxai_wellnessbreak_org"
}

const SECONDS_30 = 30;
const FEATURE_ON = "on";

export class FeatureFlagService {
  private splitio!: SplitIO.ISDK;
  private splitClient!: SplitIO.IClient;
  readonly orgId!: string;

  public async initSplitioSdk(orgId: string, authorizationKey = ""): Promise<SplitIO.IClient> {
    if (authorizationKey) {
      console.log("Fetched SplitIO Key Successfully", orgId);
    } else {
      console.error("SplitIO Key Fetch failed");
    }
    (this as any).orgId = orgId;
    this.splitio = SplitFactory({
      core: {
        authorizationKey,
        key: orgId
      },
      scheduler: {
        metricsRefreshRate: SECONDS_30,
        impressionsRefreshRate: SECONDS_30,
        eventsPushRate: SECONDS_30
      },
      sync: {
        splitFilters: [
          {
            type: "byName",
            values: Object.values(FeatureFlag)
          }
        ]
      }
    });

    this.splitClient = this.splitio.client();

    return new Promise<SplitIO.IClient>((resolve, reject) => {
      this.splitClient?.on(this.splitClient.Event.SDK_READY, () => {
        console.log("[FeatureFlagService] Split IO SDK is ready");
        resolve(this.splitClient);
      });

      this.splitClient?.on(this.splitClient.Event.SDK_READY_TIMED_OUT, () => {
        console.error("[FeatureFlagService] Split IO Failed");
        reject(new Error("[FeatureFlagService] Split IO Failed"));
      });
    });
  }

  private isFeatureEnabled(flag: FeatureFlag): boolean {
    const treatment = this.splitClient.getTreatment(flag);
    console.log(`${flag} feature flag is : ${treatment}`);
    return treatment === FEATURE_ON;
  }

  public isAiAssistantEnabled(): boolean {
    return this.isFeatureEnabled(FeatureFlag.AI_ASSISTANT);
  }

  public isCDSEnabled(): boolean {
    return this.isFeatureEnabled(FeatureFlag.CALL_DROP_SUMMARY);
  }

  public isVAHEnabled(): boolean {
    return this.isFeatureEnabled(FeatureFlag.VAH_SUMMARY);
  }

  public isWellnessBreakEnabled(): boolean {
    return this.isFeatureEnabled(FeatureFlag.AGENT_WELLNESS_BREAK);
  }
}
