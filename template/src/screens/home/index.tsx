import * as React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen'

const HomeScreen = (): JSX.Element => {
    return (
        <View style={styles.backgroundStyle}>
            <View style={styles.back}>
                <Text style={styles.headerText}>{'Welcome to\nReact Native'}</Text>
            </View>
            <View style={styles.wrapper}>
                <Text>by rolud</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    backgroundStyle: {
        backgroundColor: Colors.lighter,
        flex: 1,
    },
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

export default HomeScreen
