import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ActionIcon, Container, Grid, Group, TextInput, Title } from '@mantine/core'
import TodoList from './components/TodoList'
import { IconPlus } from '@tabler/icons-react'
import TodoCreate from './components/TodoCreate'
import { TaskProvider } from './context/TaskContext'

function App() {


  return (
    <TaskProvider>

      <Container>

        <TodoCreate />
        <TodoList />

      </Container>


    </TaskProvider>


  )
}

export default App
