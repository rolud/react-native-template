import * as React from 'react'
import { Appearance, useColorScheme } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components/native'

import flavor1Theme from './flavor1Theme'
import flavoe2Theme from './flavor2Theme'
import { merge } from 'lodash'
import { useFlavors } from 'components/hooks'

const themeMapping: { [name: string]: Theme } = {
    flavor1: flavor1Theme,
    flavoe2: flavoe2Theme,
}

const ThemeProvider = ({
    children,
    theme,
}: {
    children: string | JSX.Element | JSX.Element[]
    theme?: Theme
}): JSX.Element => {
    const scheme = useColorScheme()
    const [appTheme, setAppTheme] = React.useState<'light' | 'dark'>('light')
    const { name } = useFlavors()

    React.useEffect(() => {
        const listener = async (): Promise<void> => {
            const storedTheme = (await AsyncStorage.getItem('themeSettings')) as AppTheme
            if (storedTheme === 'default') setAppTheme(Appearance.getColorScheme() as 'light' | 'dark')
        }
        Appearance.addChangeListener(listener)

        return (): void => {
            Appearance.removeChangeListener(listener)
        }
    }, [])

    const mergedTheme = merge(theme, themeMapping[name])
    return <StyledComponentsThemeProvider theme={mergedTheme}>{children}</StyledComponentsThemeProvider>
}

export default ThemeProvider
