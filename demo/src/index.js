import React, { Component } from 'react'
import { render } from 'react-dom'

import Container from '../../src'

const MyComponent = props => {
  return (
    <Container initialState={{ hello: 'World' }}>
      {props => (
        <div>
          <h1>Hello {props.hello}</h1>
          <input
            value={props.hello}
            onChange={e =>
              props.dispatch({ type: 'hello', payload: e.target.value })
            }
          />
        </div>
      )}
    </Container>
  )
}

render(<MyComponent />, document.querySelector('#demo'))
