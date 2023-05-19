// pseudo-code
class StdPlayground extends HTMLElement {
  constructor() {
    super();
    // ...
    console.log('super!');
    //Object.defineProperty(this, 'testMethod', {value: () => console.log('it works!')});
  }
  // ...
  testMethod() {
    console.log('it works!!');
  }
}

function loadCoreResources() {
  // dynamic imports
  return new Promise((resolve) => setTimeout(resolve, 5000));
}

loadCoreResources().then(() => {
  console.log('ok');
  customElements.define('std-playground', StdPlayground);
});
