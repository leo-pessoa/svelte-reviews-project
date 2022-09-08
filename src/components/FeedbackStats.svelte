<script>
  export let count;
  export let average;

  $: review = count != 1 ? "Reviews" : "Review";
</script>

<div class="feedback-stats">
  <h4>
    {count}
    {review}
  </h4>
  <h4>Avaliação média: {average}</h4>
</div>

<style>
  .feedback-stats {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>
