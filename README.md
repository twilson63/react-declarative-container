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

[build-badge]: https://img.shields.io/travis/user/repo/master.png?style=flat-square
[build]: https://travis-ci.org/user/repo
[npm-badge]: https://img.shields.io/npm/v/npm-package.png?style=flat-square
[npm]: https://www.npmjs.org/package/npm-package
[coveralls-badge]: https://img.shields.io/coveralls/user/repo/master.png?style=flat-square
[coveralls]: https://coveralls.io/github/user/repo
