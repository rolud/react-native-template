/* eslint-disable @typescript-eslint/no-explicit-any */
import useTheme from 'components/hooks/use-theme'
import * as React from 'react'
import { FlatList, StatusBar, StyleSheet, View, ViewStyle } from 'react-native'
import Animated, {
    Extrapolate,
    interpolate,
    useAnimatedScrollHandler,
    useAnimatedStyle,
    useSharedValue,
} from 'react-native-reanimated'

import LinearGradient from 'react-native-linear-gradient'

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList)

export interface LayoutConfigs {
    style?: ViewStyle
    scrollShadow?: boolean
    isScrollable?: boolean
    scrollEnabled?: boolean
    scrollOffset?: Animated.SharedValue<number>
    FooterComponet?: JSX.Element | null
    hideNoInternetAlert?: boolean
    bottomSafeAreaHeight?: number
}

interface LayoutProviderProps extends LayoutConfigs {
    children: React.ReactElement<any, string | React.JSXElementConstructor<any>>
    screenName: string
}

const LayoutProvider = React.forwardRef(
    (
        {
            children,
            scrollShadow = true,
            style,
            scrollOffset,
            scrollEnabled = true,
            isScrollable = true,
            FooterComponet,
            bottomSafeAreaHeight,
        }: LayoutProviderProps,
        ref,
    ): JSX.Element => {
        const localScrollOffset = useSharedValue(0)
        const currentScrollOffset = scrollOffset || localScrollOffset
        const theme = useTheme()
        const isInternetReachable = true // todo: add check

        const styles = React.useMemo(
            () =>
                StyleSheet.create({
                    container: {
                        flex: 1,
                    },
                    containerContent: {
                        flexGrow: 1,
                    },
                    animatedViewWrapper: {
                        zIndex: 999,
                    },
                    animatedView: {
                        position: 'absolute',
                        height: 25,
                        left: 0,
                        right: 0,
                        bottom: -25,
                        overflow: 'visible',
                    },
                    animatedViewContent: {
                        height: 10,
                        borderTopWidth: 0,
                    },
                    contentStyle: {
                        paddingHorizontal: theme.sizes.spacings.l,
                        paddingTop: theme.sizes.spacings.m,
                        flexGrow: 1,
                        backgroundColor: theme.colors.background[200],
                    },
                    scrollViewWrapper: {
                        flex: 1,
                        backgroundColor: theme.colors.background[200],
                    },
                }),
            [theme],
        )

        const opacityStyle = useAnimatedStyle(() => {
            const opacity = interpolate(currentScrollOffset.value, [0, 40], [0, 0.5], Extrapolate.CLAMP)
            return { opacity }
        }, [currentScrollOffset.value])

        const scrollHandler = useAnimatedScrollHandler({
            onScroll: (event) => {
                currentScrollOffset.value = event.contentOffset.y
            },
        })

        return (
            <>
                <StatusBar
                    backgroundColor={theme.colors.base.white}
                    barStyle="dark-content"
                    translucent={true}
                    animated={true}
                />

                {scrollShadow ? (
                    <View pointerEvents="none" style={styles.animatedViewWrapper}>
                        <Animated.View style={[styles.animatedView, opacityStyle]}>
                            <LinearGradient colors={['rgba(0, 0, 0, 0.2)', 'rgba(0, 0, 0, 0)']}>
                                <View style={styles.animatedViewContent} />
                            </LinearGradient>
                        </Animated.View>
                    </View>
                ) : null}

                {isScrollable ? (
                    <View style={styles.scrollViewWrapper}>
                        <AnimatedFlatList
                            ref={ref as React.RefObject<FlatList>}
                            style={[styles.container]}
                            contentContainerStyle={styles.containerContent}
                            scrollEventThrottle={16}
                            showsVerticalScrollIndicator={false}
                            onScroll={scrollHandler}
                            keyboardShouldPersistTaps="handled"
                            scrollEnabled={scrollEnabled}
                            nestedScrollEnabled
                            data={undefined}
                            renderItem={(): null => null}
                            ListHeaderComponentStyle={{ ...styles.contentStyle, ...style }}
                            ListHeaderComponent={React.cloneElement(children, { theme })}
                            ListFooterComponent={
                                <View
                                    style={{
                                        height:
                                            bottomSafeAreaHeight !== undefined
                                                ? bottomSafeAreaHeight
                                                : theme.sizes.navBarSpaceHeight,
                                    }}
                                />
                            }
                        />
                        {FooterComponet}
                    </View>
                ) : (
                    <Animated.View style={[styles.container, styles.contentStyle, style]}>
                        {React.cloneElement(children, {
                            theme,
                            isInternetReachable,
                        })}
                    </Animated.View>
                )}
            </>
        )
    },
)

export default LayoutProvider
