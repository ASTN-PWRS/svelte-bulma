<svelte:options customElement="s-nav" />
<!-- svelte-ignore css_unused_selector -->
<style global>
  @import "../../public/css/output-bulma.css";
</style>
<nav class="navbar">
  <div class="container primary">
    <div id="navMenu" class="navbar-menu">
      <div class="navbar-start">
        <a href="/" class="navbar-item">Home</a>
        <a href="/" class="navbar-item">Link</a>
        <a href="/" class="navbar-item">Link</a>
      </div>
      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <a href='/' class="button is-dark">Documentation</a>
            <a href='/' class="button is-link">Download</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</nav>

