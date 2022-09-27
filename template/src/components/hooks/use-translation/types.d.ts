interface Translation {
    t: (key: string, parameters?: object) => string
    i18n: {
        language: string
    }
}
