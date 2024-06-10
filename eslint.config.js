import withNuxt from './.nuxt/eslint.config.mjs';

// eslint.config.js

import vue from "eslint-plugin-vue";
import vueParser from "vue-eslint-parser";
import typescript from "@typescript-eslint/parser";
import typescriptPlugin from "@typescript-eslint/eslint-plugin";
import stylistic from '@stylistic/eslint-plugin';

const jsRules = {
  "@typescript-eslint/no-unused-vars": "warn",
  "@typescript-eslint/explicit-function-return-type": "off",
  "@typescript-eslint/no-explicit-any": "off",
  '@stylistic/no-multi-spaces': 'error', // 연속된 빈칸 제거
  '@stylistic/semi': ['error', 'always'],
  '@stylistic/indent': ['error', 2],
  '@stylistic/comma-dangle': ['error', 'always-multiline'],
  '@stylistic/no-multiple-empty-lines': ['error', { max: 1, maxEOF: 1, maxBOF: 0 }],
  '@stylistic/space-before-function-paren': ['error', {
    'anonymous': 'always',
    'named': 'never',
    'asyncArrow': 'always',
  }],
  '@stylistic/keyword-spacing': ['error', {
    'before': true,
    'after': true,
    'overrides': {
      'if': { 'after': true },
      'for': { 'after': true },
      'while': { 'after': true },
    },
  }],
  '@stylistic/arrow-parens': ['error', 'always'], // 화살표 함수의 파라미터에 괄호 강제
  '@stylistic/no-trailing-spaces': 'error',
  '@stylistic/brace-style': ['error', '1tbs', { 'allowSingleLine': true }], // 함수 이름 뒤에 {를 오도록 설정
  '@stylistic/space-before-blocks': ['error', 'always'], // 블록 앞에 공백 강제
  'space-in-parens': ['error', 'never'], // 괄호 내부 공백 제거
  'object-curly-spacing': ['error', 'always'],
};

// console.log(compat.extends("plugin:vue/vue3-stongly-recommended"));
// console.log(typescriptPlugin.configs['eslint-recommended']);

const configs = [
  // JS 및 TS 기본 규칙
  {
    ignores: ["node_modules/**", "dist/**", ".nuxt/**", "coverage/**"],
  },
  ...vue.configs['flat/recommended'],
  ...typescriptPlugin.configs['eslint-recommended']['overrides'],
  {
    name: "js/ts",
    files: ["**/*.js", "**/*.ts"],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "module",
    },
    plugins: {
      "@typescript-eslint": typescriptPlugin,
      '@stylistic': stylistic,
    },
    rules: {
      ...jsRules,
    },
  },
  {
    name: "vue",
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
      '@stylistic': stylistic,
    },
    rules: {
      ...jsRules,
      "vue/multi-word-component-names": "off",
      "vue/no-multiple-template-root": "off",
      "vue/no-v-model-argument": "off",
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
      'vue/html-closing-bracket-spacing': ['error', {
        'startTag': 'never',
        'endTag': 'never',
        'selfClosingTag': 'always',
      }],
    },
  },
];

// console.log(configs);

export default withNuxt(configs);