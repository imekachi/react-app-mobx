import { observer } from 'mobx-react'

import TodoInput from './TodoInput'


@observer
export default class TodoSearchInput extends TodoInput {

  onChange( event ) {
    this.props.dataStore.searchKeyword = event.target.value
  }
}