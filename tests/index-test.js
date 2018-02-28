import expect from 'expect'
import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'

import Container from 'src/index.js'

describe('Container', () => {
  let node

  beforeEach(() => {
    node = document.createElement('div')
  })

  afterEach(() => {
    unmountComponentAtNode(node)
  })

  it('displays a welcome message', () => {
    render(
      <Container
        initialState={{ title: 'Welcome to React components' }}
        //didMount={dispatch => dispatch({ type: 'title', payload: 'Foobar' })}
        render={({ title }) => <div>{title}</div>}
      />,
      node,
      () => {
        expect(node.innerHTML).toContain('Welcome to React components')
      }
    )
  })

  it('throws error on empty action', () => {
    render(
      <Container
        initialState={{ title: 'Welcome to React components' }}
        //didMount={dispatch => dispatch({})}
        render={({ title }) => <div>{title}</div>}
      />,
      node,
      () => {
        expect(node.innerHTML).toContain('Welcome to React components')
      }
    )
  })
})
