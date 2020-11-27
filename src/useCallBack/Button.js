/**
 * Created by ever on 2020/8/29.
 */
import React, {Fragment} from 'react'

const Button = ({onClickButton, children}) => {
  return (
    <Fragment>
      <button onClick={onClickButton}>{children}</button>
      <span>{Math.random()}</span>
    </Fragment>
  )
}
export default React.memo(Button)
