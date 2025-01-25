"use client"

import { createContext, useContext } from "react"
import type { ClientDesktopProviderType } from "./ClientDesktopProvider.types"

const ClientDesktopContext = createContext<ClientDesktopProviderType>({
  styleless: false,
})

export function ClientDesktopProvider({
  children,
  options,
}: Readonly<{
  children: React.ReactNode
  options: ClientDesktopProviderType
}>) {
  return (
    <ClientDesktopContext.Provider value={{ ...options }}>
      <div id="__auburn-root">{children}</div>
    </ClientDesktopContext.Provider>
  )
}

export const useDesktopProvider = () => useContext(ClientDesktopContext)
