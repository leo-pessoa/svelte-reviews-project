<script>
  import { fly } from "svelte/transition";

  export let show = false;
</script>

{#if show}
  <nav transition:fly={{ x: 1200, opacity: 1 }}>
    <div class="sidebar-header">
      <button
        class="close-button"
        on:click={() => {
          show = false;
        }}>X</button
      >
      <slot name="title" />
    </div>
    <slot />
  </nav>
{/if}

<style lang="scss">
  nav {
    position: fixed;
    top: 0;
    right: 0;
    z-index: 1000;
    height: 100%;
    padding: 2rem 1rem 0.6rem;
    border-left: 1px solid #aaa;
    background: #f9f9f9;
    overflow-y: auto;

    & > .sidebar-header {
      display: flex;
      flex-flow: row;
      justify-content: space-between;

      & > .close-button {
        all: unset;
        cursor: pointer;
      }
    }
  }
</style>
