/* eslint-disable @typescript-eslint/no-explicit-any */
import { StackNavigationProp, StackScreenProps } from '@react-navigation/stack'

interface ScreenProps<RouteType = any> extends StackScreenProps<any, any> {
    navigation: StackNavigationProp<any, any>
    theme: Theme
    isInternetReachable: boolean
    route: RouteType
}

interface GameData {
    _id: string
    questions: Question[]
    type: GameType
    simulationType?: SimulationType
    time: number
}

type GameType = 'QUIZ' | 'SIMULATION'
