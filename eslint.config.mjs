import pathCheker from 'eslint-plugin-fsd-pathcheker'
import pluginImport from 'eslint-plugin-import'
import pluginReact from 'eslint-plugin-react'
import pluginReactHooks from 'eslint-plugin-react-hooks'
import pluginUnusedImports from 'eslint-plugin-unused-imports'
import globals from 'globals'
import tseslint from 'typescript-eslint'

/** @type {import('eslint').Linter.Config[]} */
export default [
    {
        files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
        settings: {
            react: {
                version: '19.0.0',
            },
        },
    },
    { languageOptions: { globals: globals.browser } },
    ...tseslint.configs.recommended,
    pluginReact.configs.flat.recommended,
    { ignores: ['**/.*'] },
    {
        plugins: {
            'react-hooks': pluginReactHooks,
            'unused-imports': pluginUnusedImports,
            import: pluginImport,
            'fsd-pathcheker': pathCheker,
        },

        rules: {
            'fsd-pathcheker/path-checker': ['error', { alias: '@' }],
            'fsd-pathcheker/public-api-imports': ['error', { alias: '@' }],
            'fsd-pathcheker/layer-imports': [
                'error',
                {
                    alias: '@',
                    ignoreImportPatterns: ['**/StoreProvider'],
                },
            ],
            'react/require-default-props': 'off',
            'react/react-in-jsx-scope': 'off',
            'import/no-cycle': [2, { maxDepth: 1 }],
            'react/jsx-max-props-per-line': ['error', { maximum: 4 }],
            'react/jsx-filename-extension': [
                2,
                {
                    extensions: ['.js', '.jsx', '.tsx'],
                },
            ],
            'no-unused-vars': 'off',
            '@typescript-eslint/no-unused-vars': 'off',
            '@typescript-eslint/no-empty-object-type': 'warn',
            'unused-imports/no-unused-imports': 'error',
            'unused-imports/no-unused-vars': [
                'warn',
                {
                    vars: 'all',
                    varsIgnorePattern: '^_',
                    args: 'after-used',
                    argsIgnorePattern: '^_',
                },
            ],

            semi: ['error', 'never'],

            'react-hooks/rules-of-hooks': 'error',
            'react-hooks/exhaustive-deps': 'error',
            'import/order': [
                'error',
                {
                    groups: ['builtin', 'external', 'internal'],
                    pathGroups: [
                        {
                            pattern: 'react',
                            group: 'external',
                            position: 'before',
                        },
                        {
                            pattern: '@/**',
                            group: 'external',
                            position: 'after',
                        },
                    ],
                    pathGroupsExcludedImportTypes: ['react'],
                    'newlines-between': 'always',
                    alphabetize: {
                        order: 'asc',
                        caseInsensitive: true,
                    },
                },
            ],
        },
    },
]
