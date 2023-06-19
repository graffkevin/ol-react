# @eslint-config

## Configure ESLint

Add `"extends": ["@appenin/eslint-config-falco"]` to your ESLint config file for basic configuration.

If you need an API/Backend rules, add `"extends": ["@appenin/eslint-config-falco/api"]` instead.

If you need React/NextJS rules, add `"extends": ["@appenin/eslint-config-falco/next"]` instead.

This config requires knowledge of your TypeScript config.
In your ESLint config, set [parserOptions.project](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/parser#parseroptionsproject) to the path of your `tsconfig.json`.

An example `.eslintrc`:

```json
{
  "extends": ["@appenin/eslint-config-falco/next"]
}
```

## Run ESLint

Open a terminal to the root of your project, and run the following command:

```
npx eslint . --ext .js,.jsx,.ts,.tsx
```

ESLint will lint all .js, .jsx, .ts, and .tsx files within the current folder, and output results to your terminal.

You can also get results in realtime inside most IDEs via a plugin.

## Fix on save Eslint errors

### JetBrains IDE (WebStorm, Intellij)

1. JetBrains IDE already provide Eslint plugins.
2. You just need to do to `Preferences > Languages & Framework > Eslint`
   and check `run eslint --fix on save`

### VSCode

1. Install [EsLint plugins for VS Code](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) & [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
2. Go to `Preferences > edit settings.json`
3. Paste the following code:

```json
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "editor.defaultFormatter": "esbenp.prettier-vscode"
}
```

** For a monorepo ** (like this) you need to add extras props in your workspace settings:

```json
{
  "eslint.workingDirectories": [{ "pattern": "./libs/*" }, { "pattern": "./packages/*" }]
}
```
