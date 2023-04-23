import { PAGES } from './constants'

export function normalizePageHash() {
    let hash = window.location.hash.slice(1)
  
    if (Object.keys(PAGES).includes(hash)) {
      return hash
    }
  
    window.location.hash = PAGES.TIMELINE
  
    return PAGES.TIMELINE
}
