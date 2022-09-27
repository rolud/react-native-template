import { FlavorContext } from 'components/providers/flavor'
import * as React from 'react'

const useFlavors = (): { name: string; featureSet: { [key: string]: boolean } } => {
    const flavors = React.useContext(FlavorContext)
    return { ...flavors }
}

export default useFlavors
