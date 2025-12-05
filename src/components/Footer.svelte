<svelte:options customElement="s-footer" />
<!-- svelte-ignore css_unused_selector -->
<style global>
  @import "../../public/css/output-bulma.css";
</style>
<footer class="footer has-background-primary">
  <div class="content has-text-centered">
    <slot><p class="has-text-white">Primary</p></slot>
  </div>
</footer>