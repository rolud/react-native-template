/* eslint-disable @typescript-eslint/no-explicit-any */
import PubSub from 'pubsub-js'
import * as React from 'react'

const useStoreListener = (props: { [key: string]: (payload: any) => void }): void => {
    React.useEffect(() => {
        const subscribers = Object.entries(props).map(([key, action]) => {
            return PubSub.subscribe(key, (messageKey: string, payload: any) => {
                action(payload)
            })
        })

        return (): void => {
            if (subscribers) {
                subscribers.forEach((subscriber) => {
                    PubSub.unsubscribe(subscriber)
                })
            }
        }
    }, [props])
}

export default useStoreListener
