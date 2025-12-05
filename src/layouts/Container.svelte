<svelte:options customElement="s-container" />
<!-- svelte-ignore css_unused_selector -->
<style global>
  @import "../../public/css/output-bulma.css";
</style>
<section class="hero is-link is-fullheight-with-navbar">
  <div class="hero-body">
    <slot>
    <p class="title">Fullheight hero with navbar</p>
    </slot>
  </div>
</section>
