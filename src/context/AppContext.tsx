import React from 'react'

type ContextProps = {
    authenticated: boolean,
    lang: string,
    theme: string
};

// we initialise them without default values, to make that happen, we
// apply the Partial helper type.
export default React.createContext<Partial<ContextProps>>({});
