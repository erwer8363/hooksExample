/**
 * Created by ever on 2020/1/13.
 */
import React, {createContext, Fragment, useReducer} from 'react'

export const ColorContext = createContext({})

export const UPDATE_COLOR = 'update_color'

const reducer = (state, action) => {
    switch (action.type) {
        case UPDATE_COLOR:
            return action.color
        default:
            return state
    }
}

export const Color = (props) => {
    const [color, dispatch] = useReducer(reducer, 'blue')
    return (
        <Fragment>
            <ColorContext.Provider value={{color, dispatch}}>
                {props.children}
            </ColorContext.Provider>
        </Fragment>
    )
}

export default Color
