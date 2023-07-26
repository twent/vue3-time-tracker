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

export const ACTIVITIES_OPTIONS = [
    { value: 'coding', label: 'Coding' },
    { value: 'cooking', label: 'Cooking' },
    { value: 'working', label: 'Working' },
    { value: 'hiking', label: 'Hiking' },
    { value: 'cycling', label: 'Cycling' },
    { value: 'reading', label: 'Reading' }
]

export const PERIOD_SELECTED_OPTIONS = [
    {
      value: 10,
      label: '00:10'
    },
    {
      value: 15,
      label: '00:15'
    },
    {
      value: 20,
      label: '00:20'
    },
    {
      value: 30,
      label: '00:30'
    },
    {
      value: 45,
      label: '00:45'
    },
    {
      value: 60,
      label: '01:00'
    }
]

export const MIDNIGHT_HOUR = 0
export const HOURS_IN_DAY = 24
