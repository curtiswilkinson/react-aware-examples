import * as React from 'react'
import { Aware } from 'react-aware'

class Counter extends React.Component<any, any> {
  render() {
    const increment = () => this.props.message({ type: 'increment' })
    const decrement = () => this.props.message({ type: 'decrement' })

    return (
      <div>
        <p>{ this.props.model.count }</p>
        <button onClick={ increment }>Increment</button>
        <button onClick={ decrement }>Decrement</button>
      </div>
    )
  }
}

export default Aware(Counter)
