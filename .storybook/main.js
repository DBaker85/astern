module.exports = {
  stories: [
    "./*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)",
    "../docs/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-a11y",
    "@storybook/addon-viewport",
    "storybook-addon-performance/register",
  ],
};
