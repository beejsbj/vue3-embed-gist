# Github Gist embed component for Vue 3
This is a package that allows you to embed a a github gist link into your Vue3 project.
forked from https://www.npmjs.com/package/vue-embed-gist which works for Vue2.


## Install

```
yarn add vue3-embed-gist
```
```
npm install vue3-embed-gist
```

## Setup

in your `main.js` (where the app is mounted)

```javascript
import { createApp } from "vue";
import App from "./App.vue";

import GithubGist from "vue3-embed-gist";
import "vue3-embed-gist/dist/style.css"; //import styles

const app = createApp(App);
app.use(GithubGist);
app.mount("#app");
```

## Usage 
```vue
<script setup>

</script>

<template>
<!-- file name is optional -->
<!-- you need to either pass an id or a url -->
  <!-- <GithubGist gistUrl="your gist url" file="your file name" /> -->
  <GithubGist gistId="your gist id" file="your file name" theme="dark" />
</template>

```



### Props
##### `gistUrl`
Type: `String`
Required: `true`

#####  `gistID`
Type: `String`
Required: `true` 

#####  `file`
Type: `String`
Required: `false`

#####  `theme`
Type: `String`
Required: `false`
Default: `light`