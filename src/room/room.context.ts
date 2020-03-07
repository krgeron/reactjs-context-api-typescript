import React from 'react'

type ContextProps = {
    name: string,
    floor: string
    hasExecuted: boolean
};

// we initialise them without default values, to make that happen, we
// apply the Partial helper type.
export default React.createContext<Partial<ContextProps>>({});