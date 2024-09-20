const { webpackConfig } = require("direflow-scripts");
const webpack = require("webpack");
const nodeExternals = require("webpack-node-externals");
const CopyPlugin = require("copy-webpack-plugin");

const path = require("path");

const pModules = path.resolve("./node_modules");
const pPublic = path.resolve("public");

module.exports = {
  // WEBPACK
  webpack: (config, env) => {
    let conf = webpackConfig(config, env, {
      filename: "ai-assistant-widget.js",
    });

    conf.plugins.push(
      new webpack.optimize.LimitChunkCountPlugin({ maxChunks: 1 })
    );

    // const copyWebpackPlugin = new CopyPlugin([
    //   { from: `${pModules}/@momentum-ui/core/fonts`, to: `${pPublic}/fonts` },
    //   { from: `${pModules}/@momentum-ui/core/images`, to: `${pPublic}/images` },
    //   {
    //     from: `${pModules}/@momentum-ui/core/css/momentum-ui.min.css`,
    //     to: `${pPublic}/css`,
    //   },
    //   {
    //     from: `${pModules}/@momentum-ui/core/css/momentum-ui.css`,
    //     to: `${pPublic}/css`,
    //   },
    //   {
    //     from: `${pModules}/@momentum-ui/core/css/momentum-ui.min.css.map`,
    //     to: `${pPublic}/css`,
    //   },
    //   { from: `${pModules}/@momentum-ui/icons/fonts`, to: `${pPublic}/fonts` },
    //   {
    //     from: `${pModules}/@momentum-ui/icons/fonts`,
    //     to: `${pPublic}/icons/fonts`,
    //   },
    //   {
    //     from: `${pModules}/@momentum-ui/icons/css/momentum-ui-icons.min.css`,
    //     to: `${pPublic}/css`,
    //   },
    //   {
    //     from: `${pModules}/@momentum-ui/icons/css/momentum-ui-icons.css`,
    //     to: `${pPublic}/css`,
    //   },
    // ]);

    // conf.plugins.push(copyWebpackPlugin);

    if (env === "production") {
      conf.externals = [
        nodeExternals({
          modulesFromFile: {
            include: ["peerDependencies"],
            exclude: ["dependencies", "devDependencies"],
          },
        }),
      ];
    } else {
      conf.entry.push(path.resolve("./src/[sandbox]/sandbox.ts"));
    }

    return conf;
  },

  // JEST

  jest: (c) => {
    c.moduleNameMapper["\\.(css)$"] = "<rootDir>/src/__mocks__/styleMock.js";
    c.setupFiles.push("<rootDir>/src/__mocks__/globalMock.js");
    c.setupFiles.push("jest-canvas-mock");

    c.transformIgnorePatterns = [
      // '[/\\\\]node_modules[/\\\\].+\\.(js|jsx|ts|tsx)$', // original pattern
      "[/\\\\]node_modules[/\\\\](?!lit-element|lit-html).+\\.(js|jsx|ts|tsx)$",
      "^.+\\.module\\.(css|sass|scss)$",
    ];

    c.collectCoverage = true;
    c.collectCoverageFrom = [
      "src/direflow-component/**/*",
      "src/Utils/**/*",
      "src/components/**/*",
      "src/hooks/**/*",
      "src/APIIntegrations/**/*",
      "src/services/**/*"
    ];
    c.coverageThreshold = {
      global: {
        branches: 0,
        functions: 0,
        lines: 0,
        statements: 0,
      },
    };

    c.reporters = [
      "default",
      [
        "jest-junit",
        {
          classNameTemplate: "{classname}.{title}",
          outputDirectory: ".",
          outputName: "unit-test-results.xml",
          suiteName: "AIAssistantUT",
          suiteNameTemplate: "AIAssistantUT.{title}",
        },
      ],
    ];

    return c;
  },
};

