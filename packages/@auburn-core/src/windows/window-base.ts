import { html, css, LitElement } from "lit"
import { customElement, property } from "lit/decorators.js"
import { AuburnBaseElement } from "../base-element"

@customElement("auburn-window")
export class AuburnWindowBase extends LitElement {
  static css = [
    AuburnBaseElement.resetStyles,
    css`
      :host {
        display: block;
      }

      #window-contents {
        display: contents;
      }

      .window.root {
        border-radius: 6px;
        border: 1px solid black;
      }
    `
  ]

  @property({ attribute: "topmost", type: Boolean })
  isTopmost = false

  @property({ attribute: "debug-instance", type: Boolean })
  hasDebugInstance = false

  @property({ attribute: "detached", type: Boolean })
  /**
   * Unlike showing the window icon from the taskbar, this makes it independent and
   * can make the window operate on its own.
   */
  isInstanceAttached = false

  render() {
    return html`
      <div class="window root" style="border-radius: 6px; border: 1px solid black">
        <div part="window-title">
          <slot name="window-title"></slot>
        </div>
        <div id="window-contents">
          <slot></slot>
        </div>
        <slot name="window-lower-gutter"></slot>
      </div>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "auburn-window": AuburnWindowBase
  }
}
