import { StyleDictionary } from "style-dictionary-utils";
import Color from "tinycolor2";

// HAVE THE STYLE DICTIONARY CONFIG DYNAMICALLY GENERATED

function getStyleDictionaryConfig(theme) {
  const themeName = theme === "light-theme" ? "light" : "dark";
  return {
    source: [
      `./design-tokens/color/${theme}.json`,
      `./design-tokens/color/core.json`,
    ],
    hooks: {
      transforms: {
        "color-transform": {
          type: "value",
          filter: (token) => token.type === "color",
          transform: (token) => {
            const { r, g, b, a } = Color(token.value).toRgb();
            return `${r} ${g} ${b}`;
          },
        },
      },
    },
    platforms: {
      tailwind: {
        transforms: ["attribute/cti", "name/kebab", "color-transform"],
        buildPath: `style-dictionary/build/tailwind/${theme}/`,
        files: [
          {
            destination: "colors.css",
            format: "css/advanced",
            filter: {
              category: "output",
            },
            options: {
              selector: `.${theme}`,
            },
          },
        ],
      },
      web: {
        transformGroup: "web",
        buildPath: `style-dictionary/build/web/${theme}/`,
        files: [
          {
            destination: "colors.css",
            format: "css/variables",
            filter: {
              category: "output",
            },
          },
        ],
      },
      android: {
        transformGroup: "android",
        buildPath: `style-dictionary/build/android/${theme}/`,
        files: [
          {
            destination: "tokens.colors.xml",
            format: "android/colors",
            filter: {
              category: "output",
            },
          },
        ],
      },
      ios: {
        transformGroup: "ios-swift",
        buildPath: `style-dictionary/build/ios/${theme}/`,
        files: [
          {
            destination: "StyleDictionary+Class.swift",
            format: "ios-swift/class.swift",
            options: {
              className: "StyleDictionaryClass",
            },
            filter: {
              category: "output",
            },
          },
          {
            destination: "StyleDictionary+Enum.swift",
            format: "ios-swift/enum.swift",
            options: {
              className: "StyleDictionaryEnum",
            },
            filter: {
              category: "output",
            },
          },
          {
            destination: "StyleDictionary+Struct.swift",
            format: "ios-swift/any.swift",
            options: {
              className: "StyleDictionaryStruct",
              imports: "SwiftUI",
              objectType: "struct",
              accessControl: "internal",
            },
            filter: {
              category: "output",
            },
          },
        ],
      },
    },
  };
}

console.log("Build started...");

// PROCESS THE DESIGN TOKENS FOR THE DIFFEREN THEMES AND PLATFORMS

["dark-theme", "light-theme"].map(function (theme) {
  ["web", "android", "ios", "tailwind"].map(function (platform) {
    console.log("\n==============================================");
    console.log(`\nProcessing: [${platform}] [${theme}]`);

    const sd = new StyleDictionary(getStyleDictionaryConfig(theme, platform));
    sd.buildPlatform(platform);
  });
});

console.log("\n==============================================");
console.log("\nBuild completed!");
