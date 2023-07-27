import { HOURS_IN_DAY, MIDNIGHT_HOUR, PAGES } from './constants'
import { isValidPage } from './validators'

export function normalizePageHash() {
    let page = window.location.hash.slice(1)
  
    if (isValidPage(page)) {
      return page
    }
  
    window.location.hash = PAGES.TIMELINE
  
    return PAGES.TIMELINE
}

export function generateTimelineItems() {
  const timelineItems = []

  for (let hour = MIDNIGHT_HOUR; hour < HOURS_IN_DAY; hour++) {
    timelineItems.push({ hour })
  }

  return timelineItems
}

export function generateActivityOptions(activities) {
  return activities.map((label, value) => ({ value, label }))
}
