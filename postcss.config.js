const join = require("path").join;
const tailwindConfig = join(__dirname, "tailwind.js");

class TailwindExtractor {
  static extract(content) {
    return content.match(/[A-Za-z0-9-_:\/]+/g) || []; // eslint-disable-line no-useless-escape
  }
}

module.exports = {
  plugins: [
    require("tailwindcss")(tailwindConfig),
    require("autoprefixer"),
    require("@fullhuman/postcss-purgecss")({
      content: ["**/*.vue"],
      extractors: [
        {
          extractor: TailwindExtractor,
          extensions: ["vue"]
        }
      ],
      whitelist: ["html", "body"],
      whitelistPatterns: [/nuxt-/]
    })
  ]
};
