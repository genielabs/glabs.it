import '{{ app.baseUrl }}js/zuix/zuix.module.js';
if (!zuix) {
//  import('https://cdn.jsdelivr.net/npm/zuix-dist/js/zuix.module.min.js');
}
customElements.define('time-clock', class extends HTMLElement {
  connectedCallback() {
    zuix.loadComponent(this, 'https://zuixjs.org/app/widgets/time-clock', '', {
      container: this.attachShadow({mode: 'closed'})
    });
  }
});
