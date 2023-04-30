import { PAGES, HOURS_IN_DAY, MIDNIGHT_HOUR } from "./constants";

export function isValidPage(page) {
    return Object.values(PAGES).includes(page)
}

export function isValidTimilineItem({ hour }) {
    return typeof hour === 'number' && hour >= MIDNIGHT_HOUR && hour <= HOURS_IN_DAY
}

export function isValidSelectOption({ value, label }) {
    return typeof value === 'string' && typeof label === 'string'
}