import { LitElement, css } from "lit"

/**
 * A base class that extends `LitElement`, including style resets, and other goodies;
 * it doesn't return any HTML but serves as a shared component for other Auburn-related
 * components.
 */
export class AuburnBaseElement extends LitElement {
  static baseStyles = css`
    * {
      margin: 0;

      font-synthesis: none;
      text-rendering: optimizeLegibility;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
  `
}