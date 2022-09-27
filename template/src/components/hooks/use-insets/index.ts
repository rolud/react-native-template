import React from 'react'
import { StatusBar } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

interface Insets {
    top: number
    bottom: number
    left: number
    right: number
}

const useInsets = (): Insets => {
    const safeAreaInsets = useSafeAreaInsets()

    const [insets, setInsets] = React.useState<Insets>({
        ...safeAreaInsets,
        ...(StatusBar.currentHeight !== undefined && safeAreaInsets.top === 0 ? { top: StatusBar.currentHeight } : {}),
    })

    React.useEffect(() => {
        setInsets({
            ...safeAreaInsets,
            ...(StatusBar.currentHeight !== undefined && safeAreaInsets.top === 0
                ? { top: StatusBar.currentHeight }
                : {}),
        })
    }, [safeAreaInsets])

    return insets
}

export default useInsets
