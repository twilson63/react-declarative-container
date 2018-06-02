/**
 * Container
 *
 * React Component using RenderProps pattern to
 * empower react developers to exclude the
 * confusing `this` keyword and the need to call setState
 *
 * Basically React Developers could use functional components
 * in their whole application, and not have to worry about
 * `class`, `setState` or the confusing `this` keywords
 *
 * Usage:
 *
 *   import Container from 'react-container'
 *
 *
 *   const MyComponent = props => {
 *     return (
 *       <Container initial={{title: 'Hello World'}}>
 *         {props => <h1>{props.title}</h1>}
 *       </Container>
 *     )
 *   }
 *
 *   so far you have three optional properties that you can set
 *
 *   - intial = which sets the initial state and passes it as props
 *   - mount = which gives you a dispatch function do manage on mount
 *   - actions = which works the same as mapDispatchToProps
 *
 */
import React from 'react'
import PropTypes from 'prop-types'

class Container extends React.Component {
  constructor(props) {
    super(props)
    this.state = props.initialState || {}
  }

  componentDidMount() {
    if (this.props.didMount) {
      this.props.didMount(this.dispatch.bind(this))
    }
  }

  dispatch({ type, payload }) {
    if (!type) {
      throw new Error('action.type must be defined!')
    }
    if (payload === undefined) {
      throw new Error('action.payload must be defined!')
    }
    if (typeof type !== 'string') {
      throw new Error('action.type must be a string!')
    }
    this.setState({ [type]: payload })
  }

  render() {
    const noop = () => null
    const Component = this.props.children || this.props.render || noop

    const actions = Object.assign(
      { dispatch: this.dispatch.bind(this) },
      typeof this.props.actions === 'function'
        ? this.props.actions(this.dispatch.bind(this), this.state)
        : {}
    )

    return <Component {...this.state} {...actions} />
  }
}

Container.propTypes = {
  initialState: PropTypes.object,
  didMount: PropTypes.func,
  actions: PropTypes.func,
  children: PropTypes.func
}

export default Container
