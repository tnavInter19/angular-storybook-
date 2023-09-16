import type { StorybookConfig } from "@storybook/angular";
import path from "path"; // Import the 'path' module

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/angular",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
};

// Check if the 'config' object has a 'webpackFinal' property
if (config.webpackFinal) {
  // Modify the Webpack configuration inside 'webpackFinal' function
  config.webpackFinal = (webpackConfig) => {
    // Ensure that 'module' exists in the Webpack configuration
    webpackConfig.module = webpackConfig.module || { rules: [] };

    // Ensure that 'module.rules' exists in the Webpack configuration
    webpackConfig.module.rules = webpackConfig.module.rules || [];

    // Add the path to your styles.scss file using style-loader and css-loader
    webpackConfig.module.rules.push({
      test: /\.scss$/,
      use: ["style-loader", "css-loader", "sass-loader"],
      include: path.resolve(__dirname, "../src/styles.scss"),
    });

    return webpackConfig;
  };
}

export default config;
