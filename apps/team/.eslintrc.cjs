// eslint-disable-next-line @typescript-eslint/no-var-requires, import/extensions, import/no-extraneous-dependencies
const base = require("@wavesrcool/dev/lib/eslint");

module.exports = {
  ...base.default,
  extends: [...base.default.extends, "next/core-web-vitals", "airbnb/hooks"],
  rules: {
    ...base.default.rules,
    "react/jsx-filename-extension": [1, { extensions: [".tsx"] }],
    "react/function-component-definition": [
      2,
      { namedComponents: "arrow-function" },
    ],
    "import/no-cycle": [0, { maxDepth: 1 }],
    "react/jsx-props-no-spreading": [
      1,
      {
        custom: "ignore",
      },
    ],
    "jsx-a11y/label-has-associated-control": [
      0,
      {
        labelComponents: ["label"],
        assert: "both",
      },
    ],
    "jsx-a11y/no-noninteractive-tabindex": [
      0,
      {
        tags: [],
        roles: ["label"],
        allowExpressionValues: true,
      },
    ],
    "jsx-a11y/anchor-is-valid": [0],
    "jsx-a11y/click-events-have-key-events": [0],
    "jsx-a11y/no-static-element-interactions": [
      "error",
      {
        handlers: [
          "onMouseDown",
          "onMouseUp",
          "onKeyPress",
          "onKeyDown",
          "onKeyUp",
        ],
        allowExpressionValues: true,
      },
    ],
    "react/button-has-type": [0],
    "react/jsx-no-useless-fragment": [0, "allowExpressions"],
    "import/no-anonymous-default-export": [
      "error",
      {
        allowArrowFunction: true,
      },
    ],
    "react/jsx-curly-brace-presence": [
      1,
      { props: "always", children: "always", propElementValues: "always" },
    ],
  },
};
