import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import FetchAPIList from './FetchAPIList.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FetchAPIList />
  </StrictMode>,
)
