import { computed, observable } from 'mobx'

class Todo {
  @observable id
  @observable text
  @observable isComplete

  constructor(text, isComplete = false) {
    this.text       = text
    this.id         = Date.now() + Math.round(Math.random() * 100)
    this.isComplete = isComplete
  }
}

const initialTodos = [
  new Todo('buy milk', true),
  new Todo('buy eggs'),
  new Todo('buy a chicken'),
]

class TodoStore {
  @observable todos         = [...initialTodos]
  @observable searchKeyword = ''

  @computed get filteredTodos() {
    let filterMatch = new RegExp(this.searchKeyword, 'i')
    return this.todos.filter(todo => {
      // if no keyword is set, or it matches
      return !this.searchKeyword || filterMatch.test(todo.text)
    })
  }

  addTodo(text) {
    this.todos.push(new Todo(text))
  }

  completeTodo(id, forceComplete = null) {
    let target        = this.todos.filter(todo => todo.id === id)[0]
    target.isComplete = ( forceComplete === null )
      ? !target.isComplete
      : forceComplete
  }
}

let store = window.store = new TodoStore()

export default store