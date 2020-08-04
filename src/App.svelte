<script lang="ts">
  import { fade } from "svelte/transition";
  import portal from "./portal";

  let title = "Svelte Portal!";
  let open = true;
  let position = "top";

  $: {
    console.log(position);
  }
</script>

<style>
  main {
    text-align: center;
    padding: 1em;
    margin: 0 auto;
    display: flex;
  }
  .dialog {
    position: absolute;
    background-color: white;
    color: #ff3e00;
    bottom: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 20px 40px;
    box-shadow: 0px 0px 5px #ff3e00;
    border-radius: 10px;
    z-index: 999;
  }
  #top {
    position: fixed;
    top: 200px;
    width: 100%;
  }
  #bottom {
    position: fixed;
    bottom: 0;
    width: 100%;
  }
  #center {
    position: fixed;
    bottom: 50%;
    width: 100%;
  }
</style>

<div id="top" />
<div id="bottom" />
<div id="center" />

<main>
  <label class="inline">Position:</label>
  <select class="inline" bind:value={position}>
    <option value="top">Top</option>
    <option value="center">Center</option>
    <option value="bottom">Bottom</option>
    <option value={document.body}>Body</option>
  </select>
  <button class="inline" on:click={() => (open = !open)}>
    {!open ? 'Open Dialog' : 'Close Dialog'}
  </button>

  {#if open}
    <div use:portal={position} transition:fade class="dialog">
      <b>{title.toUpperCase()}</b>
      <slot />
    </div>
  {/if}
</main>
