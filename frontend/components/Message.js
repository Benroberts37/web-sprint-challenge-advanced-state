import React from 'react'
import { connect } from 'react-redux'

export function Message(props) {
  const {infoMessage} = props
  return <div id="message">{infoMessage}</div>
}

const mapStateToProps = state => {
  return {
    infoMessage: state.infoMessage
  }
}

export default connect(mapStateToProps)(Message)