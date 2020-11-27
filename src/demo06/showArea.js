/**
 * Created by ever on 2020/1/13.
 */
import React, {Fragment, useContext} from 'react'
import {ColorContext} from './color'

function ShowArea() {
    const {color} = useContext(ColorContext)
    return (
        <Fragment>
            <div style={{color}}>颜色为{color}</div>
        </Fragment>
    )
}

export default ShowArea
