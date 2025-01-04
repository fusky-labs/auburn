import { html } from "lit"
import { customElement } from "lit/decorators.js"
import { AuburnBaseElement } from "./base-element"

// todo create custom eslint rule at match customElement decorator with the HTMLElementTagNameMap global interface
@customElement('auburn-window')
export class AuburnBaseWindow extends AuburnBaseElement {
  render() {
    return html`
      <div part="window-frame">
        <div part="window-title">
          lol
        </div>
        <div id="window-contents">
          <slot></slot>
        </div>
      </div>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'auburn-window': AuburnBaseWindow
  }
}
