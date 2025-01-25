/**
 * This function gets the relative position via `getBoundingClientRect()` along with its
 * current cursor dimensions and "locks" it when dragging
 */
export const handleWindowDragRelative = (
  windowElement: Element | Node | null,
  abortController: AbortController
) => {
  const { signal: ev_sig, abort } = abortController

  // Pressd dowm
  windowElement!.addEventListener("mousedown", (e) => { }, { signal: ev_sig })

  // Draggy drag
  windowElement!.addEventListener("mousedrag", (e) => { }, { signal: ev_sig })

  // Pressed out or out of focus
  const handleMouseRelease = (e: Event) => { }

  windowElement!.addEventListener("mouseup", handleMouseRelease, { signal: ev_sig })
  windowElement!.addEventListener("blur", handleMouseRelease, { signal: ev_sig })

  return { abort }
}