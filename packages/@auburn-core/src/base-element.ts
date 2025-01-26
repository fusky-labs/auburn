import { LitElement, css } from "lit"
import { property } from "lit/decorators.js"

/**
 * A base class that extends `LitElement`, including style resets, and other goodies;
 * it doesn't return any HTML but serves as a shared component for other Auburn-related
 * components.
 */
export class AuburnBaseElement extends LitElement {
  static resetStyles = css`
    * {
      margin: 0;

      font-synthesis: none;
      text-rendering: optimizeLegibility;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    :host, * {
      font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
        Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    }

    button {
      background: none;
      border: none;
      padding: none;
    }
  `

  @property({ type: Boolean })
  isStyleless = false
}