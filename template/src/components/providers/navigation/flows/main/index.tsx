import * as React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { HomeScreen } from 'screens'

const MainStackNavigator = createStackNavigator()

const MainNavigation = (): JSX.Element => {
    return (
        <MainStackNavigator.Navigator>
            <MainStackNavigator.Screen name="Home" component={HomeScreen} />
        </MainStackNavigator.Navigator>
    )
}

export default MainNavigation
