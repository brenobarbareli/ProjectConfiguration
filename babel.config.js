module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'entry',
      },
    ],
    [
      '@babel/preset-react',
      {
        useBuiltIns: 'entry',
        runtime: 'automatic',
      },
    ],
  ],
};
