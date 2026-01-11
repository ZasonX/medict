import js from '@eslint/js'
import globals from 'globals'
import tsPlugin from 'typescript-eslint'
import vuePlugin from 'eslint-plugin-vue'
import vueParser from 'vue-eslint-parser'
import prettier from 'eslint-plugin-prettier'
import prettierConfig from 'eslint-config-prettier'

export default [
  { ignores: ['dist', 'node_modules', 'wailsjs'] },
  
  js.configs.recommended,
  ...tsPlugin.configs.recommended,
  ...vuePlugin.configs['flat/recommended'],
  prettierConfig,
  
  {
    files: ['**/*.{js,ts,vue}'],
    languageOptions: {
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 2022,
        sourceType: 'module'
      }
    }
  },
  
  {
    files: ['**/*.vue'],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: tsPlugin.parser,
        ecmaVersion: 2022,
        sourceType: 'module'
      }
    },
    plugins: {
      prettier
    },
    rules: {
      'prettier/prettier': 'warn'
    }
  },
  
  {
    files: ['**/*.d.ts'],
    rules: {
      '@typescript-eslint/no-explicit-any': 'off'
    }
  }
]
