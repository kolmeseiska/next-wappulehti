import { useCallback, useMemo, useState } from 'react'

type ToggleApi = {
  toggle: () => void
  disable: () => void
  enable: () => void
}

const useToggle = (initialState = false): [boolean, ToggleApi] => {
  const [isEnabled, setIsEnabled] = useState(initialState)
  const toggle = useCallback(() => setIsEnabled(isEnabled => !isEnabled), [])
  const disable = useCallback(() => setIsEnabled(false), [])
  const enable = useCallback(() => setIsEnabled(true), [])

  const api = useMemo(() => ({
    toggle,
    disable,
    enable
  }), [toggle, disable, enable])

  return [isEnabled, api]
}

export default useToggle
