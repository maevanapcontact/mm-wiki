const { withFederatedSidecar } = require("@module-federation/nextjs-mf");
const deps = require("./package.json").dependencies;

module.exports = withFederatedSidecar({
  name: "header",
  filename: "static/chunks/remoteEntry.js",
  exposes: {
    "./header": "./components/Header.tsx",
  },
  shared: {
    react: {
      eager: true,
      requiredVersion: deps.react,
      singleton: true,
    },
    "react-dom": {
      eager: true,
      requiredVersion: deps["react-dom"],
      singleton: true,
    },
  },
})({
  webpack5: true,
  webpack(config, options) {
    const { webpack } = options;

    config.experiments = { topLevelAwait: true };
    config.output.publicPath = "auto";

    config.module.rules.push({
      test: /_app.js/,
      loader: "@module-federation/nextjs-mf/lib/federation-loader.js",
    });
    if (options.isServer) {
      Object.assign(config.resolve.alias, {
        header: false,
      });
    } else {
      config.plugins.push(
        new webpack.container.ModuleFederationPlugin({
          remoteType: "var",
          remotes: {
            header: "header",
          },
          shared: {
            "@module-federation/nextjs-mf/lib/noop": {
              eager: false,
            },
            react: {
              eager: true,
              requiredVersion: deps.react,
              singleton: true,
            },
            "react-dom": {
              eager: true,
              requiredVersion: deps["react-dom"],
              singleton: true,
            },
          },
        })
      );
    }
    return config;
  },
});
