import { observer } from 'mobx-react'

import TodoInput from './TodoInput'


@observer
export default class TodoAddInput extends TodoInput {

  onKeyPress( event ) {
    // Add only when the enter key is pressed
    if ( event.which === 13 ) {
      this.props.dataStore.addTodo( event.target.value )
      event.target.value = ''
    }
  }
}