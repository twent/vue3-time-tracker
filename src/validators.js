import { PAGES, HOURS_IN_DAY, MIDNIGHT_HOUR, BUTTON_TYPES } from "./constants";

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

export function isNotEmptyString(value) {
    return isString(value) && value.length > 0
}

function isNumberBetween(value, start, end) {
    return value >= start && value <= end
}

export function isValidButtonType(type) {
    return BUTTON_TYPES.includes(type)
}

export function isValidHour(hour) {
    return isNumber(hour) && isNumberBetween(hour, MIDNIGHT_HOUR, HOURS_IN_DAY)
}

export function isValidPage(page) {
    return Object.values(PAGES).includes(page)
}

export function isValidActivity(activity) {
    return isNotEmptyString(activity)
}

export function isValidActivityOrNull(activity) {
    return isValidActivity(activity) || isNull(activity)
}

export function validateActivities(activities) {
    return activities.every(isValidActivity)
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
    return isNumber(value) && isNotEmptyString(label)
}
