import React from 'react'

export default (props) => {
  if (props.staticContext) {
    props.staticContext.NotFound = true
  }
  return (
    <div>404, sorry page not found</div>
  )
}