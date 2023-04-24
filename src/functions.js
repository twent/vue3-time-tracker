import { HOURS_IN_DAY, PAGES } from './constants'

export function normalizePageHash() {
    let hash = window.location.hash.slice(1)
  
    if (Object.keys(PAGES).includes(hash)) {
      return hash
    }
  
    window.location.hash = PAGES.TIMELINE
  
    return PAGES.TIMELINE
}

export function generateTimelineItems() {
  const timelineItems = []

  for (let hour = 0; hour < HOURS_IN_DAY; hour++) {
    timelineItems.push({ hour })
  }

  return timelineItems
}
