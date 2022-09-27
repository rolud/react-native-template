import 'react-native-gesture-handler'
import React from 'react'
import { SafeAreaView, StatusBar, useColorScheme } from 'react-native'

import { Colors } from 'react-native/Libraries/NewAppScreen'
import NavigationProvider from 'components/providers/navigation'

const App = (): JSX.Element => {
    const isDarkMode = useColorScheme() === 'dark'

    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
        flex: 1,
    }

    return (
        <SafeAreaView style={backgroundStyle}>
            <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
            <NavigationProvider />
        </SafeAreaView>
    )
}

export default App
