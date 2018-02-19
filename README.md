# react-declarative-container

[![Travis][build-badge]][build]
[![npm package][npm-badge]][npm]
[![Coveralls][coveralls-badge]][coveralls]

Use the Declarative Container to manage component state without having to deal
with `this` or `bind` or `setState`. Use a declarative Container and the renderProp
to setup your state for your component.

```js
import Container from 'react-declarative-container'

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

export default MyComponent
```

## Props

### initialState

Allows you to pass in an initial state for your container

### didMount

If you need to do an async call when the component is mounted, use didMount it
takes a function that receives a dispatch function: `(dispatch) => fetch(...).then(v => dispatch({type: '', payload: ''}))`. Then dispatch works very similar to the redux dispatch function. This makes it easy to test your didMount function.

### actions

You may want to define several actions for your container component to pass down to the children components so that
they can be more declarative and easier to test. This prop is a function that provides a dispatch function as an argument and lets you return an object in which each property is passed as props to the children components.

### children or render

This is a function that takes an argument of props, that is all of the properties that are in state as well as all the action nodes and finally a dispatch function.

[build-badge]: https://img.shields.io/travis/user/repo/master.png?style=flat-square
[build]: https://travis-ci.org/user/repo
[npm-badge]: https://img.shields.io/npm/v/npm-package.png?style=flat-square
[npm]: https://www.npmjs.org/package/npm-package
[coveralls-badge]: https://img.shields.io/coveralls/user/repo/master.png?style=flat-square
[coveralls]: https://coveralls.io/github/user/repo
