import {
    addDays as fnsAddDays,
    addHours as fnsAddHours,
    addMinutes as fnsAddMinutes,
    addMonths as fnsAddMonths,
    addWeeks as fnsAddWeeks,
    differenceInDays as fnsDifferenceInDays,
    differenceInHours as fnsDifferenceInHours,
    differenceInMilliseconds as fnsDifferenceInMilliseconds,
    differenceInWeeks as fnsDifferenceInWeeks,
    endOfDay as fnsEndOfDay,
    endOfMonth as fnsEndOfMonth,
    endOfWeek as fnsEndOfWeek,
    formatDistanceToNow as fnsFormatDistanceToNow,
    getDay as fnsGetDay,
    getDaysInMonth as fnsGetDaysInMonth,
    getHours as fnsGetHours,
    getMinutes as fnsGetMinutes,
    getMonth as fnsGetMonth,
    getTime as fnsGetTime,
    isAfter as fnsIsAfter,
    isBefore as fnsIsBefore,
    isEqual as fnsIsEqual,
    isSameDay as fnsIsSameDay,
    isSameHour as fnsIsSameHour,
    isSameMinute as fnsIsSameMinute,
    isSameMonth as fnsIsSameMonth,
    isValid as fnsIsValid,
    max as fnsMax,
    min as fnsMin,
    parse,
    set as fnsSet,
    setDate as fnsSetDate,
    setDay as fnsSetDay,
    setHours as fnsSetHours,
    setMilliseconds as fnsSetMilliseconds,
    setMinutes as fnsSetMinutes,
    setMonth as fnsSetMonth,
    setSeconds as fnsSetSeconds,
    setYear as fnsSetYear,
    startOfDay as fnsStartOfDay,
    startOfMonth as fnsStartOfMonth,
    startOfWeek as fnsStartOfWeek,
    subDays as fnsSubDays,
    subMonths as fnsSubMonths,
    subYears as fnsSubYears,
} from 'date-fns/esm'
import { format, parseISO } from 'date-fns'

import { it } from 'date-fns/locale'

const DEFAULT_FORMAT = "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'"

export const parseDate = (date: string | Date, formatString?: string, isISO = true, referenceDate?: Date): Date => {
    if (typeof date === 'string') {
        return isISO
            ? parseISO(date)
            : parse(date, formatString || DEFAULT_FORMAT, referenceDate || new Date(), {
                  locale: it,
              })
    } else return date
}

export const parseTime = (dateString: string, formatString?: string, referenceDate?: Date): number => {
    return parse(dateString, formatString || DEFAULT_FORMAT, referenceDate || new Date(), {
        locale: it,
    }).getTime()
}

export const formatDate = (date: Date, formatString?: string): string => {
    return formatString === undefined ? date.toISOString() : format(date, formatString, { locale: it })
}

export const addHours = (date: Date, hours: number): Date => {
    return fnsAddHours(date, hours)
}

export const addWeeks = (date: Date, weeks: number): Date => {
    return fnsAddWeeks(date, weeks)
}

export const addDays = (date: Date, days: number): Date => {
    return fnsAddDays(date, days)
}

export const getHours = (date: Date): number => {
    return fnsGetHours(date)
}

export const getDay = (date: Date): number => {
    return fnsGetDay(date)
}

export const addMinutes = (date: Date, minutes: number): Date => {
    return fnsAddMinutes(date, minutes)
}

export const getMinutes = (date: Date): number => {
    return fnsGetMinutes(date)
}

export const addMonths = (date: Date, months: number): Date => {
    return fnsAddMonths(date, months)
}

export const subMonths = (date: Date, months: number): Date => {
    return fnsSubMonths(date, months)
}

export const getMonth = (date: Date): number => {
    return fnsGetMonth(date)
}

export const subYears = (date: Date, years: number): Date => {
    return fnsSubYears(date, years)
}

export const subDays = (date: Date, days: number): Date => {
    return fnsSubDays(date, days)
}

export const getTime = (date?: Date): number => {
    if (date !== undefined) {
        return fnsGetTime(date)
    }

    return fnsGetTime(new Date())
}

export const differenceInMilliseconds = (dateLeft: Date | number, deteRight: Date | number): number => {
    return fnsDifferenceInMilliseconds(dateLeft, deteRight)
}

export const differenceInDays = (dateLeft: Date | number, dateRight: Date | number): number => {
    return fnsDifferenceInDays(dateLeft, dateRight)
}

export const differenceInWeeks = (dateLeft: Date | number, dateRight: Date | number): number => {
    return fnsDifferenceInWeeks(dateLeft, dateRight)
}

export const differenceInHours = (dateLeft: Date | number, dateRight: Date | number): number => {
    return fnsDifferenceInHours(dateLeft, dateRight)
}

export const getDaysInMonth = (date: Date): number => {
    return fnsGetDaysInMonth(date)
}

export const isEqual = (d1: Date, d2: Date): boolean => {
    return fnsIsEqual(d1, d2)
}

export const isSameHour = (d1: Date, d2: Date): boolean => {
    return fnsIsSameHour(d1, d2)
}

export const isSameMinute = (d1: Date, d2: Date): boolean => {
    return fnsIsSameMinute(d1, d2)
}

export const isSameDay = (d1: Date, d2: Date): boolean => {
    return fnsIsSameDay(d1, d2)
}

export const isSameMonth = (d1: Date, d2: Date): boolean => {
    return fnsIsSameMonth(d1, d2)
}

export const isToday = (d1: Date): boolean => {
    const tomorrow = new Date()
    return isSameDay(tomorrow, d1)
}

export const isTomorrow = (d1: Date): boolean => {
    const tomorrow = addHours(new Date(), 24)
    return isSameDay(tomorrow, d1)
}

export const setHours = (date: Date, hour: number): Date => {
    return fnsSetHours(date, hour)
}

export const setMinutes = (date: Date, minutes: number): Date => {
    return fnsSetMinutes(date, minutes)
}

export const setHoursMinutes = (date: Date, hour: number, minute: number): Date => {
    let ret = fnsSetHours(date, hour)
    ret = fnsSetMinutes(ret, minute)
    return ret
}

export const setDay = (date: Date, day: number): Date => {
    return fnsSetDay(date, day)
}

export const setDate = (date: Date, day: number): Date => {
    return fnsSetDate(date, day)
}

export const setMonth = (date: Date, month: number): Date => {
    return fnsSetMonth(date, month)
}

export const setYear = (date: Date, year: number): Date => {
    return fnsSetYear(date, year)
}

export const isBefore = (d1: Date, d2: Date): boolean => {
    return fnsIsBefore(d1, d2)
}

export const isAfter = (d1: Date, d2: Date): boolean => {
    return fnsIsAfter(d1, d2)
}

export const dateIsValid = (d: Date): boolean => {
    return fnsIsValid(d)
}

export const startOfWeek = (d: Date): Date => {
    return fnsStartOfWeek(d, { weekStartsOn: 1 })
}

export const set = (
    d: Date,
    values: {
        year?: number
        month?: number
        date?: number
        hours?: number
        minutes?: number
        seconds?: number
        milliseconds?: number
    },
): Date => {
    return fnsSet(d, values)
}

export const endOfWeek = (d: Date): Date => {
    return fnsEndOfWeek(d, { weekStartsOn: 1 })
}

export const startOfDay = (d: Date): Date => {
    return fnsStartOfDay(d)
}

export const endOfDay = (d: Date): Date => {
    return fnsEndOfDay(d)
}

export const getMonthLimits = (d: Date): { dateStart: Date; dateEnd: Date } => {
    const monthStart = fnsStartOfMonth(d)
    const monthEnd = fnsEndOfMonth(d)

    return { dateStart: startOfWeek(monthStart), dateEnd: endOfWeek(monthEnd) }
}

export const formatDistanceToNow = (d: Date, options?: { includeSeconds?: boolean; addSuffix?: boolean }): string => {
    return fnsFormatDistanceToNow(d, { ...options, locale: it })
}

export const maxDate = (...dates: Date[]): Date => {
    return fnsMax(dates)
}

export const minDate = (...dates: Date[]): Date => {
    return fnsMin(dates)
}

export const getNextUTCDay = (toDayOfWeek: number, fromDate: Date = new Date()): Date => {
    const fromDayOfWeek = fromDate.getUTCDay()
    const offsetDays = toDayOfWeek > fromDayOfWeek ? toDayOfWeek - fromDayOfWeek : 7 - (fromDayOfWeek - toDayOfWeek)
    return addDays(fromDate, offsetDays)
}

export const setMinimumTime = (date: Date): Date => {
    return fnsSetMilliseconds(fnsSetSeconds(setMinutes(setHours(date, 0), 0), 0), 0)
}

export const setDateToToday = (date: Date): Date => {
    const d = new Date(date.getTime())
    const nowDate = new Date()
    d.setFullYear(nowDate.getFullYear(), nowDate.getMonth(), nowDate.getDate())

    return d
}

export const isDatesIntersected = ({
    startDateOne,
    startDateTwo,
    endDateOne,
    endDateTwo,
}: {
    startDateOne: Date
    startDateTwo: Date
    endDateOne: Date
    endDateTwo: Date
}): boolean => {
    const startDate = maxDate(startDateOne, startDateTwo)
    const endDate = minDate(endDateOne, endDateTwo)
    return isAfter(endDate, startDate) || isEqual(startDate, endDate)
}

export const isBetween = (date: Date, from: Date, to: Date, inclusivity = '()'): boolean => {
    if (!['()', '[]', '(]', '[)'].includes(inclusivity)) {
        throw new Error('Inclusivity parameter must be one of (), [], (], [)')
    }

    const isBeforeEqual = inclusivity[0] === '[',
        isAfterEqual = inclusivity[1] === ']'

    return (
        (isBeforeEqual ? isEqual(from, date) || isBefore(from, date) : isBefore(from, date)) &&
        (isAfterEqual ? isEqual(to, date) || isAfter(to, date) : isAfter(to, date))
    )
}

export const parseAndSort =
    (field: string, sorting: 'asc' | 'desc') =>
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (a: any, b: any): number => {
        const d1 = parseDate(a[field] as string)
        const d2 = parseDate(b[field] as string)
        return sorting === 'asc' ? d1.getTime() - d2.getTime() : d2.getTime() - d1.getTime()
    }
