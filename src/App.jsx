import { useState } from 'react'
import AutocompleteChips from './AutocompleteChips'
import './App.css'

function App() {

  return (
    <div className='tags'>
      <h3>Pick Users</h3>
      <AutocompleteChips />
    </div>
  )
}

export default App
