import appFlavors from './app-flavors.json'
import { getBundleId } from 'react-native-device-info'
import * as React from 'react'

const DEFAULT_APP = 'flavor1'
const bundleId = getBundleId()

const [name, config] = Object.entries(appFlavors.apps).find(([_name, app]) => app.bundleIds.includes(bundleId)) || [
    DEFAULT_APP,
    appFlavors.apps[DEFAULT_APP],
]

export const FlavorContext = React.createContext<{
    name: string
    featureSet: { [key: string]: boolean }
}>({ featureSet: {}, name: DEFAULT_APP })

const FlavorProvider = ({ children }: { children: JSX.Element }): JSX.Element => {
    return (
        <FlavorContext.Provider
            value={{
                name,
                featureSet: config.featureSet,
            }}>
            {children}
        </FlavorContext.Provider>
    )
}

export default FlavorProvider
