import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { App } from './App'
import { applyBrandFavicon } from './lib/brandLogo'
import './styles.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

// Uses the owner's logo for the favicon when public/images/pwc-logo.* exists.
void applyBrandFavicon()
