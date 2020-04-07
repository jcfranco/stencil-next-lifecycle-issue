import { Component, h, Element } from '@stencil/core';

@Component({
  tag: 'my-component',
  shadow: true
})
export class MyComponent {
  @Element()
  el: HTMLElement;

  connectedCallback(): void {
    const { length } = this.el.querySelectorAll("div");

    // NEXT: will be 0
    // LEGACY: will be 5

    console.log(length);
  }

  render() {
    return <div/>;
  }
}
