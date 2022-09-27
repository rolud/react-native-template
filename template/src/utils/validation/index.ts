/* eslint-disable @typescript-eslint/no-explicit-any */
import i18next from 'i18next'
import { formatDate, isBefore, parseDate } from 'utils/date'
import * as Yup from 'yup'

const getFieldInit = (type: FieldType): AnySchema => {
    if (type === 'date') {
        return Yup.date().transform(function (value: string, originalValue: string) {
            if (this.isType(value)) {
                return value
            }

            return parseDate(originalValue, 'dd/MM/yyyy')
        })
    }
    return Yup[type]()
}

const getYupType = (yupChain: AnySchema, type: RuleType, error: string, value: string, key: string): AnySchema => {
    if (type === 'phone') {
        return (yupChain as Yup.StringSchema).matches(/(\+\d{1,2}\s)?\(?\d{9,12}/, {
            excludeEmptyString: true,
            message: error,
        })
    }

    if (type === 'equals') {
        return (yupChain as Yup.StringSchema).oneOf([value], error)
    }

    if (type === 'same') {
        const findValue = Yup.ref(value) ? [Yup.ref(value)] : [value]
        return (yupChain as Yup.StringSchema).oneOf(findValue, error)
    }

    if (type === 'match') {
        const [regex, flags] = value.split('/').slice(1)
        return (yupChain as Yup.StringSchema).matches(new RegExp(regex, flags), {
            excludeEmptyString: true,
            message: error,
        })
    }

    if (type === 'minDate') {
        return (yupChain as Yup.StringSchema).when(key, (date: Date, schema: any) => {
            return (
                date &&
                schema.min(date, ({ min }: { min: Date }) => {
                    const d = formatDate(parseDate(min.toISOString()), 'dd/MM/yyyy HH:mm')
                    return i18next.t('errors.minDate', { date: d })
                })
            )
        })
    }

    if (type === 'maxDate') {
        return (yupChain as Yup.StringSchema).when(key, (date: Date, schema: any) => {
            return (
                date &&
                schema.max(date, ({ min }: { min: Date }) => {
                    const d = formatDate(parseDate(min.toISOString()), 'dd/MM/yyyy HH:mm')
                    return i18next.t('errors.maxDate', { date: d })
                })
            )
        })
    }

    if (type === 'minTime') {
        return (yupChain as Yup.StringSchema).test('is-greater', '', function (v) {
            const { path, createError } = this

            const refDate = this.parent[key]
            const currDate = v as unknown as Date

            refDate.setFullYear(1970, 0, 1)
            currDate.setFullYear(1970, 0, 1)

            if (isBefore(currDate, refDate)) {
                return createError({
                    path,
                    message: i18next.t('errors.minTime', {
                        date: formatDate(parseDate(refDate.toISOString()), 'HH:mm'),
                    }),
                })
            }

            return true
        })
    }

    if (value !== undefined) {
        return yupChain[type](value, error)
    }

    return yupChain[type](error)
}

const createValidationSchema = (config: ValidationSchemaProps): Yup.ObjectSchema<any, any> => {
    const configMap = Object.entries(config).reduce((acc, [key, props]) => {
        const innerSchema = Object.entries(props.rules as { error: string; value: string; key: string }[]).reduce(
            (innerAcc, [innerKey, innerProps]) => {
                if (innerKey !== 'type') {
                    return getYupType(
                        innerAcc,
                        innerKey as RuleType,
                        innerProps.error,
                        innerProps.value,
                        innerProps.key,
                    )
                }

                return innerAcc
            },
            getFieldInit(props.type),
        )

        return { ...acc, [key]: innerSchema }
    }, {})

    return Yup.object().shape(configMap)
}

export default createValidationSchema
