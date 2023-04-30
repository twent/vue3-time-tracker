import { ClockIcon, ListBulletIcon, ChartBarIcon } from '@heroicons/vue/24/outline'

export const PAGES = {
    TIMELINE: 'timeline',
    ACTIVITIES: 'activities',
    PROGRESS: 'progress'
}

export const NAV_ITEMS = {
    [PAGES.TIMELINE]: ClockIcon,
    [PAGES.ACTIVITIES]: ListBulletIcon,
    [PAGES.PROGRESS]: ChartBarIcon
}

export const MIDNIGHT_HOUR = 0
export const HOURS_IN_DAY = 24
