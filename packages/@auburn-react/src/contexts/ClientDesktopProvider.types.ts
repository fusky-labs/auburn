interface ClientOptions {
  /**
   * Whether if certain elements come with pre-styled components. If you use an external
   * CSS library such as Tailwind or Bootstrap, set this property to `true`
   * @default false
   */
  styleless: boolean
}

export type ClientDesktopProviderType = Partial<ClientOptions>