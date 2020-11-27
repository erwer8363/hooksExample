/**
 * Created by ever on 2020/10/15.
 */
import React, {Fragment} from 'react'
import TextInput from './textInput'
import CharacterCount from './characterCount'

export default function CharacterCounter() {
  return (
    <Fragment>
      <TextInput/>
      <CharacterCount/>
    </Fragment>
  )
}
