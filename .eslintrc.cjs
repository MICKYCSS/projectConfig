module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        node: true
    },
    "extends": [
        "eslint:recommended",
        "eslint-config-standard-with-typescript"
    ],
    parser: '@typescript-eslint/parser',
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module",
        "project":"./tsconfig.json"
    },
    "plugins": [
        "@typescript-eslint",
    ],
    "rules": {
    }
}
