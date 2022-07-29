
前端项目配置

# 前端项目配置
## 初始化
npm init -y
创建src文件夹，写入index.ts
在package.json中设置
```
    "type":"module",//遵循ESM规范
    "publishConfig":{
        "access":"public"//访问级别,restricted 私有 public 开源
    }
```

## typescript
npm i -D typescript
npx tsc --init
在scripts中添加命令
```
+  "main": "dist/index.js",
+  "types": "dist/types/index.d.ts"
+   "scripts": {
+     "dev": "tsc --watch",
+     "build": "npm run clean && tsc",
+     "clean": "rm -rf dist"
+  },
```

types项指定编译生成的类型文件

## Eslint&Prettier
### Eslint
npm i eslint -D
npx eslint --init
三种主流社区规范：Airbnb、Google、Standard
```
    +   "lint": "eslint src --ext .js,.ts --cache --fix",
```
typescript项目
npm i eslint-config-standard-with-typescript -D
```
+     extends: ['standard', 'eslint-config-standard-with-typescript'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaVersion: 12,
        sourceType: 'module',
+       project: './tsconfig.json'
      },
```

### Prettier
```
npm i prettier -D
echo {}> .prettierrc.json
npm i eslint-config-prettier eslint-plugin-prettier -D
```

## husky
npm i husky -D
npx husky install
"prepare": "husky install"
npx husky add .husky/pre-commit "npm run lint"

## Commitlint
npm i @commitlint/config-conventional @commitlint/cli -D
npx husky add .husky/commit-msg 'npx --no-install commitlint --edit "$1"'
创建.commitlintrc
{
  "extends": [
    "@commitlint/config-conventional"
  ]
}
