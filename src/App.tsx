import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Content } from './assets/components/content'
import { Header } from './assets/components/header'

function App() {
  return (
    <>
    <h1>olá</h1>
    <Content />
    <Header
    title='guai'
    description='oxi'
    />
    <Header
    title='nada'
    description='guei'
    value='0'
    />

    </>
  )
}

export default App
