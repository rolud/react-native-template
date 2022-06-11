module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  env: {
      test: {
          plugins: ['react-native-config-node/transform'],
      },
  },
  plugins: [
      'macros',
      'babel-plugin-styled-components',
      'react-native-reanimated/plugin',
      [
          'module-resolver',
          {
              root: ['./src'],
              extensions: [
                  '.ios.ts',
                  '.android.ts',
                  '.ts',
                  '.d.ts',
                  '.ios.tsx',
                  '.android.tsx',
                  '.tsx',
                  '.jsx',
                  '.js',
                  '.json',
              ],
              alias: {
                  assets: './src/assets',
                  components: './src/components',
                  configs: './src/configs',
                  hooks: './src/hooks',
                  layouts: './src/layouts',
                  navigation: './src/navigation',
                  screens: './src/screens',
                  store: './src/store',
                  types: './src/types',
                  utils: './src/utils',
              },
          },
      ],
  ],
}
