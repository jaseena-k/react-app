import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const name = "Jaseena"
const currentDate = new Date() ;
const year =currentDate.getFullYear()
console.log(currentDate)

createRoot(document.getElementById('root')).render(
<div>
    <h1>created by{name}</h1>
    <p>copyright{year}</p>
  </div>
)