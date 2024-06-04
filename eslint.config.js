// eslint.config.js

import { FlatCompat } from "@eslint/eslintrc";
import vue from "eslint-plugin-vue";
import vueParser from "vue-eslint-parser";
import typescript from "@typescript-eslint/parser";
import typescriptPlugin from "@typescript-eslint/eslint-plugin";

const compat = new FlatCompat();

const jsRules = {
  "@typescript-eslint/no-unused-vars": "warn",
  "@typescript-eslint/explicit-function-return-type": "off",
  "@typescript-eslint/no-explicit-any": "off",
  'no-multi-spaces': 'error', // 연속된 빈칸 제거
  'semi': ['error', 'always'],
  'comma-dangle': ['error', 'always-multiline'],
  'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 1, maxBOF: 0 }],
  'space-before-function-paren': ['error', {
    'anonymous': 'always',
    'named': 'never',
    'asyncArrow': 'always',
  }],
  'keyword-spacing': ['error', {
    'before': true,
    'after': true,
    'overrides': {
      'if': { 'after': true },
      'for': { 'after': true },
      'while': { 'after': true },
    },
  }],
  'arrow-parens': ['error', 'always'], // 화살표 함수의 파라미터에 괄호 강제
  'no-trailing-spaces': 'error',
};

export default [
  // JS 및 TS 기본 규칙
  {
    ignores: ["node_modules/**", "dist/**", ".nuxt/**", "coverage/**"],
  },
  ...compat.extends(
    "plugin:vue/vue3-recommended",
    "plugin:@typescript-eslint/recommended",
  ),

  {
    files: ["**/*.js", "**/*.ts"],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "module",
    },
    plugins: {
      "@typescript-eslint": typescriptPlugin,
    },
    rules: {
        ...jsRules,
    },
  },
  {
    files: ["**/*.vue"],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: typescript,
        ecmaVersion: 2021,
        sourceType: "module",
      },
    },
    plugins: {
      vue,
      "@typescript-eslint": typescriptPlugin,
    },
    rules: {
      ...jsRules,
      "vue/multi-word-component-names": "off",
      "vue/no-multiple-template-root": "off",
      "vue/no-v-model-argument": "off",
      "vue/no-unused-vars": "warn",
      "vue/max-attributes-per-line": [
        "error",
        {
          singleline: {
            max: 1,
          },
          multiline: {
            max: 1,
          },
        },
      ],
      "vue/html-self-closing": [
        "error",
        {
          html: {
            void: "always",
            normal: "never",
            component: "always",
          },
          svg: "always",
          math: "always",
        },
      ],
      'vue/no-spaces-around-equal-signs-in-attribute': ['error'],
      'vue/html-closing-bracket-newline': ['error', {
        'singleline': 'never',
        'multiline': 'always',
      }],
      'vue/no-multi-spaces': ['error', {
        "ignoreProperties": false,
      }],
    },
  },
];
