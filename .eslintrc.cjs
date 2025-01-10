module.exports = {
    env: {
        browser: true,
        es2022: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'airbnb',
    ],
    overrides: [
        {
            env: {
                node: true,
            },
            files: [
                '.eslintrc.{js,cjs}',
            ],
            parserOptions: {
                sourceType: 'script',
            },
        },
    ],
    parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
    settings: {
        react: { version: '18.2' },
        'import/resolver': {
            alias: {
                extensions: ['.ts', '.js', '.jsx', '.json'],
                map: [['@', './src']],
            },
        },
    },
    plugins: ['react-refresh'],
    rules: {
        'linebreak-style': 'off',
        'no-console': 'error',
        'no-unused-vars': 'warn',
        'import/no-extraneous-dependencies': 'off',
        'react/react-in-jsx-scope': 'off',
        'max-len': ['error', 900],
        'react/jsx-props-no-spreading': 'off',
        'react/forbid-prop-types': 'off',
        'react/no-array-index-key': 'off',
        'import/no-cycle': 'off',
        'react-hooks/exhaustive-deps': 'off',
        'class-methods-use-this': 'off',
        'react/jsx-indent': 'off',
        'react/jsx-indent-props': 'off',
        'react/jsx-closing-tag-location': 'off',
        'jsx-a11y/control-has-associated-label': 'off',
        'jsx-a11y/label-has-associated-control': 'off',
        'no-tabs': ['error', { allowIndentationTabs: true }],
        'jsx-quotes': ['error', 'prefer-single'],
        'no-shadow': 'off',
        'no-mixed-spaces-and-tabs': 'off',
        'import/no-named-as-default': 'off',
        'no-restricted-exports': 'off',
        'react-refresh/only-export-components': 'off',
        'react/prop-types': 'off',
        'react/no-unstable-nested-components': [
            'error',
            {
                allowAsProps: true,
            },
        ],
        'no-use-before-define': ['error', {
            functions: false,
            classes: false,
            variables: false,
            allowNamedExports: true,
        }],
    },
};
