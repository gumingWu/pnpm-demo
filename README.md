# pnpm-demo

这工程是全程手动搭建的，在这记录下过程

因为我没有全局安装 pnpm，所以首先用 npm 初始化工程

```
mkdir pnpm-demo
cd pnpm-demo
npm init -y
```

然后安装 pnpm，这样就能使用 pnpm 了

```
npm install pnpm
```

然后我可能怕出什么意外，就把 package-lock.json 删了，然后执行一遍`pnpm init -y`，以防万一，这时候就会多出`pnpm-lock.yaml`

这时候就能安装 vue 和 vite 了，我忘了怎么放一起安装，所以就分开写了

```
pnpm install vue
pnpm install vite
```

创建`src`文件夹，文件夹下创建`App.vue和main.ts`

App.vue

```vue
<template>im App</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
});
</script>
```

main.ts

```ts
import App from "./App.vue";
import { createApp } from "vue";

createApp(App).mount("#app");
```

创建`vite.config.ts`

```ts
import { defineConfig } from "vite";
import vuePlugin from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [vuePlugin()],
});
```

`重点！！！`，一定要在根目录下有一个 index.html，跟以往的工程不同，以前的工程的 html 是放在 public 目录下的，而且不一定要有，但用 vite 貌似是必须有一个 index.html 的，我是从别的项目复制过来的，应该只是为了 id="app"和引用 main.ts 而已

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" href="/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>pnpm demo</title>
  </head>
  <body>
    <div id="app"></div>
    <script type="module" src="/src/main.ts"></script>
  </body>
</html>
```

在`package.json`下编写启动脚本

```json
"scripts": {
  "serve": "vite"
},
```

然后执行`pnpm serve`就能启动了！
