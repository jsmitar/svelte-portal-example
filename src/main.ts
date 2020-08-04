import App from "./App.svelte";

const app = new App({
  target: window.document.getElementById("root"),
  props: {
    name: "world",
  },
});

export default app;
