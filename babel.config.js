module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    ["babel-plugin-root-import", {
        paths: [
            {
                "root": __dirname,
                "rootPathSuffix": "./src/components",
                "rootPathPrefix": "components/"
            },
            {
                "root": __dirname,
                "rootPathSuffix": "./src",
                "rootPathPrefix": "@/"
            }
        ]
    }]
  ]
};
