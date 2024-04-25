import React from 'react'

function ChildComp(props) {
  return (
    <div style={{ textAlign: 'center' }}>
      <button onClick={() => props.clickHandler('Child')}>Click</button>
    </div>

  )
}

export default ChildComp