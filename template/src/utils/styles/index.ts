type StyleObject = { [key: string]: string | number }

export const mergeStyles = (...props: StyleObject[]): StyleObject => {
    return props.reduce((acc, curr) => {
        if (Array.isArray(curr)) {
            return {
                ...acc,
                ...curr.reduce((innerAcc, innerCurr) => {
                    return { ...innerAcc, ...innerCurr }
                }, {}),
            }
        } else {
            return { ...acc, ...curr }
        }
    }, {})
}
