import React from 'react'
import styled from 'styled-components'
import { observer } from 'mobx-react'
import Todo from './Todo'

const Wrapper = styled.div`
  text-align: left;
`

const List = styled.ul`
  padding: 0;
`

const Item = styled(Todo)`

`

@observer
export default class TodoList extends React.Component {

  render() {
    const { filteredTodos } = this.props.dataStore
    const listOfTodos = filteredTodos.map( todo => {
      return <Item key={todo.id} id={todo.id} isComplete={todo.isComplete}>{todo.text}</Item>
    })

    return (
      <Wrapper>
        <List>
          {listOfTodos}
        </List>
      </Wrapper>
    )
  }
}