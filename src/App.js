import React, { Component } from 'react'
import styled, { ThemeProvider } from 'styled-components'

// UI
import DemoHeader from './components/DemoHeader'
import TodoList from './components/TodoList'
import TodoSearchInput from './components/TodoSearchInput'
import TodoAddInput from './components/TodoAddInput'

// Data
import dataStore from './stores/TodoStore'

const Outer = styled.div`
  text-align: center;
`

const theme = {
  // bg: 'palevioletred',
  // fg: 'papayawhip'
}

const TodoWrapper = styled.div`
  margin: 10px auto;
  max-width: 400px;
`

class App extends Component {
  render() {
    return (
      <Outer>
        <ThemeProvider theme={theme}>
          <DemoHeader/>
        </ThemeProvider>
        <TodoWrapper>
          <TodoSearchInput placeholder="Search todo..." dataStore={dataStore} type="text"/>
          <TodoList dataStore={dataStore}/>
          <TodoAddInput placeholder="Add new todo..." dataStore={dataStore} type="text"/>
        </TodoWrapper>
      </Outer>
    )
  }
}

export default App
