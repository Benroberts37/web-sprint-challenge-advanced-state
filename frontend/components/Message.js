import React from 'react'
import { connect } from 'react-redux'
import * as actionCreators from '../state/action-creators'

export function Message(props) {
  const {infoMessage} = props
  return <div id="message">{infoMessage}</div>
}

export default connect(state => state, actionCreators)(Message)