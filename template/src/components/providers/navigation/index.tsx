import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'

import MainNavigation from './flows/main'

const NavigationProvider = (): JSX.Element => {
    return (
        <NavigationContainer>
            <MainNavigation />
        </NavigationContainer>
    )
}

export default NavigationProvider
