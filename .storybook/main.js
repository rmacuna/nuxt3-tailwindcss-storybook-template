import path from "path";
import postcss from 'postcss';
import { loadConfigFromFile, mergeConfig } from "vite";

/** @type { import('@storybook/vue3-vite').StorybookConfig } */
const config = {
  stories: [
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)",
    "../components/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/vue3-vite",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  async viteFinal(baseConfig, { configType }) {
    const { config: userConfig } = await loadConfigFromFile(
      path.resolve(__dirname, "../vite.config.ts")
    );

    if (configType === "DEVELOPMENT") {
      baseConfig.plugins.push(
        postcss({
          plugins: [require('tailwindcss'), require('autoprefixer')],
        })
      );
    }

    return mergeConfig(baseConfig, userConfig);
  },
};
export default config;
