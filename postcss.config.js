module.exports = {
  plugins: [
    require("autoprefixer"),
    require("postcss-preset-env")({ stage: 1, browsers: "last 2 versions" }),
  ],
};
