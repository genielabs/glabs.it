// Component's controller implementation
// >> see docs https://zuixjs.org/pages/documentation/controller/
class CardExample extends ControllerInstance {
  onInit() {
    zuix.using('style', 'https://cdnjs.cloudflare.com/ajax/libs/flex-layout-attribute/1.0.3/css/flex-layout-attribute.min.css');
  }

  onCreate() {
    // UI event handlers
    this.field('cover-wrapper')
        .on({click: () => this.#triggerOpen()});
    this.view('div.summary')
        .on({click: () => this.#triggerOpen()});
    this.view('button.more')
        .on({click: () => this.#triggerMenu()});
    // maps image src to CSS background
    this.onUpdate();
  }

  // `onUpdate` is also called automatically when the data model is updated
  onUpdate() {
    const m = this.model();
    if (m.cover) {
      if (m.cover instanceof Element) {
        m.cover = m.cover.src;
      }
      this.field('cover-wrapper')
          .css({backgroundImage: 'url(' + m.cover + ')'});
    }
  }

  #triggerOpen() {
    // fire 'item:open' event
    this.trigger('item:open', this.model());
  }
  #triggerMenu() {
    // fire 'item:menu' event
    this.trigger('item:menu', this.model());
  }
}
