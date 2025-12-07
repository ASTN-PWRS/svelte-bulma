<svelte:options customElement="s-tassmessage" />
<!-- svelte-ignore css_unused_selector -->
<style global>
  @import "../../public/css/output-bulma.css";
</style>
<script>

  let { model } = $props();

  function handleChange() {
    $host().dispatchEvent(new CustomEvent("modelChange", {
      detail: { model }
    }));
  }

  $effect(() => {
    $host().dispatchEvent(new CustomEvent("modelChange", {
      detail: { model }
    }));
  });

  </script>

<div>
  <p>{model.title}</p>
  <input  class="input is-small"
          type="search"
          placeholder="Search..." bind:value={model.value} oninput={handleChange}/>
</div>
