/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import 'react-native-gesture-handler'
import React from 'react'
import { SafeAreaView, StatusBar, StyleSheet, Text, useColorScheme, View } from 'react-native'

import { Colors } from 'react-native/Libraries/NewAppScreen'

const App = (): JSX.Element => {
    const isDarkMode = useColorScheme() === 'dark'

    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
        flex: 1,
    }

    return (
        <SafeAreaView style={backgroundStyle}>
            <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
            <View style={backgroundStyle}>
                <View style={styles.back}>
                    <Text style={styles.headerText}>{'Welcome to\nReact Native'}</Text>
                </View>
                <View style={styles.wrapper}>
                    <Text>by rolud</Text>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    back: {
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerText: {
        fontSize: 42,
        fontWeight: '700',
        textAlign: 'center',
    },
    wrapper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
})

export default App
