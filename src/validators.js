import { PAGES, HOURS_IN_DAY, MIDNIGHT_HOUR, ACTIVITIES } from "./constants";

export function isValidPage(page) {
    return Object.values(PAGES).includes(page)
}

export function isValidActivity(activity) {
    return ACTIVITIES.includes(activity)
}

export function validateTimelineItems(timelineItems) {
    return timelineItems.every(isValidTimilineItem)
}

export function isValidTimilineItem({ hour }) {
    return typeof hour === 'number' && hour >= MIDNIGHT_HOUR && hour <= HOURS_IN_DAY
}

export function validateSelectOptions(options) {
    return options.every(isValidSelectOption)
  }

function isValidSelectOption({ value, label }) {
    return typeof value === 'string' && typeof label === 'string'
}
