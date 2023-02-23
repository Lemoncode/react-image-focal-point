/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docs: [
    'getting-started',
    {
      API: [
        'api/reference',
        'api/image-focal-point',
        { TypeScript: ['api/image-focal-point-props', 'api/focal-point'] },
      ],
    },
  ],
  examples: [
    'examples/basic',
    'examples/basic-with-apply',
    'examples/controlled',
    'examples/styled',
    'examples/webpack-entry-point',
  ],
};

module.exports = sidebars;
