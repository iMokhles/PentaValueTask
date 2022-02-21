module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'import-glob',
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: ['.ios.js', '.android.js', '.js', '.jsx', '.ts', '.tsx', '.json'],
        alias: {
          // '@app': './src/App',
          // '@config': './src/Config',
          // '@contents': './src/Contents',
          // '@utils': './src/Utils',
          // '@redux': './src/Redux',
          // '@components': './src/Components',
          // '@screens': './src/Screens',
          // '@interfaces': './src/Interfaces',
          // '@navigators': './src/Navigators',
          // '@helpers': './src/Helpers',
        },
      }
    ],
    'jest-hoist',
  ]
};
