import { PAGES, HOURS_IN_DAY } from "./constants";

export function isValidPage(page) {
    return Object.values(PAGES).includes(page)
}

export function isValidTimilineItem({ hour }) {
    return typeof hour === 'number' && hour >= 0 && hour <= HOURS_IN_DAY
}

export function isValidSelectOption({ value, label }) {
    return typeof value === 'string' && typeof label === 'string'
}