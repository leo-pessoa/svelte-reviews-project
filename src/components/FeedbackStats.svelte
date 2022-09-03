<script>
  export let count;
  export let average;

  $: review = count != 1 ? "Reviews" : "Review";
  $: avg = average ? average : 0;
</script>

<div class="feedback-stats">
  <h4>
    {count}
    {review}
  </h4>
  <h4>Ratings Average: {avg}</h4>
</div>

<style>
  .feedback-stats {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>
