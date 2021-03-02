module.exports = {
  root: true,
  parser: "babel-eslint",
  parserOptions: {
    sourceType: "script",
  },
  extends: ["fbjs", "prettier"],
  plugins: [
    "react"
  ],
  overrides: [
    {
      files: [
        "packages/*/*.js",
        "packages/*/src/**/*.js",
      ],
      parser: "babel-eslint",
      parserOptions: {
        ecmaVersion: 8,
        sourceType: "module",
      }
    }
  ]
}