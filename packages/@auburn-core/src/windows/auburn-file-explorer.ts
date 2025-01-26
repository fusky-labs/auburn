import { html } from "lit"
import { customElement } from "lit/decorators.js"
import { AuburnWindowBase } from "./window-base"

@customElement('auburn-file-explorer')
export class AuburnFileExplorerWindow extends AuburnWindowBase {
  render() {
    return html`
      <auburn-window>
        <slot></slot>
      </auburn-window>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'auburn-file-explorer': AuburnFileExplorerWindow
  }
}
