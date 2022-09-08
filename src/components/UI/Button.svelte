<script>
  export let width = "auto";
  export let height = "2.1875rem";
  export let color = "#FFF";
  export let bgColor = "red";
</script>

<button
  style="width: {width}; height: {height}; color: {color}; background-color: {bgColor};"
>
  <slot />
</button>

<style>
  button {
    position: relative;
    border-radius: 8px;
    overflow: hidden;
    border: none;
    text-align: center;
    cursor: pointer;
    font-size: 14px;
    font-weight: 400;
    text-transform: uppercase;
    padding: 10px;
  }

  button:hover {
    filter: brightness(0.5);
  }
</style>
