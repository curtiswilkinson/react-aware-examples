import * as React from 'react'
import * as ReactDOM from 'react-dom'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import { Controller } from 'react-aware'

const update = (model: any, msg: any) => {
  switch (msg.type) {
    case 'increment':
      return [{ ...model, count: model.count + 1 }]
    case 'decrement':
      return [{ ...model, count: model.count - 1 }]
    default:
      return [ model ]
  }
}

ReactDOM.render(
  <Controller model={{ count: 0 }} update={ update }>
    <App />
  </Controller>,
  document.getElementById('root') as HTMLElement
)
registerServiceWorker()
