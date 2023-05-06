import { PAGES, HOURS_IN_DAY, MIDNIGHT_HOUR, ACTIVITIES } from "./constants";

export function isNull(value) {
    return value === null
}

export function isUndefined(value) {
    return value === undefined
}

export function isUndefinedOrNull(value) {
    return isUndefined(value) || isNull(value)
}

export function isNumber(value) {
    return typeof value === 'number'
}

export function isString(value) {
    return typeof value === 'string'
}

function isNumberBetween(value, start, end) {
    return value >= start && value <= end
}

export function isValidHour(hour) {
    return isNumber(hour) && isNumberBetween(hour, MIDNIGHT_HOUR, HOURS_IN_DAY)
}

export function isValidPage(page) {
    return Object.values(PAGES).includes(page)
}

export function isValidActivity(activity) {
    return ACTIVITIES.includes(activity)
}

export function isValidActivityOrNull(activity) {
    return isValidActivity(activity) || isNull(activity)
}

export function validateTimelineItems(timelineItems) {
    return timelineItems.every(isValidTimilineItem)
}

export function isValidTimilineItem({ hour }) {
    return isValidHour(hour)
}

export function validateSelectOptions(options) {
    return options.every(isValidSelectOption)
  }

function isValidSelectOption({ value, label }) {
    return isString(value) && isString(label)
}
