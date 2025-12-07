<svelte:options customElement="s-tassmessage" />
<!-- svelte-ignore css_unused_selector -->
<style global>
  @import "../../public/css/output-bulma.css";
</style>
<script>

  let { model,class: klass, type, placeholder } = $props();

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
  <input bind:value={model.value} oninput={handleChange} 
    class={klass}
    type={type}
    placeholder={placeholder}/>
</div>
