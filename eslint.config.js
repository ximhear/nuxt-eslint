import withNuxt from './.nuxt/eslint.config.mjs';

// eslint.config.js

import vue from "eslint-plugin-vue";
import vueParser from "vue-eslint-parser";
import typescript from "@typescript-eslint/parser";
import typescriptPlugin from "@typescript-eslint/eslint-plugin";
import stylisticJs from '@stylistic/eslint-plugin-js';

const jsRules = {
  "@typescript-eslint/no-unused-vars": "warn",
  "@typescript-eslint/explicit-function-return-type": "off",
  "@typescript-eslint/no-explicit-any": "off",
  '@stylistic/js/no-multi-spaces': 'error', // 연속된 빈칸 제거
  '@stylistic/js/semi': ['error', 'always'],
  '@stylistic/js/indent': ['error', 2],
  '@stylistic/js/comma-dangle': ['error', 'always-multiline'],
  '@stylistic/js/no-multiple-empty-lines': ['error', { max: 1, maxEOF: 1, maxBOF: 0 }],
  '@stylistic/js/space-before-function-paren': ['error', {
    'anonymous': 'always',
    'named': 'never',
    'asyncArrow': 'always',
  }],
  '@stylistic/js/keyword-spacing': ['error', {
    'before': true,
    'after': true,
    'overrides': {
      'if': { 'after': true },
      'for': { 'after': true },
      'while': { 'after': true },
    },
  }],
  '@stylistic/js/arrow-parens': ['error', 'always'], // 화살표 함수의 파라미터에 괄호 강제
  '@stylistic/js/no-trailing-spaces': 'error',
  '@stylistic/js/brace-style': ['error', '1tbs', { 'allowSingleLine': true }], // 함수 이름 뒤에 {를 오도록 설정
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
      '@stylistic/js': stylisticJs,
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
      '@stylistic/js': stylisticJs,
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

// console.log(configs);

export default withNuxt(configs);