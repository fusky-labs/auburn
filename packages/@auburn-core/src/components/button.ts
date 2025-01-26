import { html } from "lit";
import { customElement } from "lit/decorators.js";
import { AuburnBaseElement } from "../base-element";

@customElement("auburn-button")
export class AuburnButton extends AuburnBaseElement {
  static css = [
    AuburnBaseElement.baseStyles
  ]

  render() {
    return html`<button>
      <slot></slot>
      </button>
      `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "auburn-button": AuburnButton
  }
}