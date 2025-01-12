import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import Missions from './pages/Missions'
import CreateMission from './pages/CreateMission'
import MissionConfirmation from './pages/MissionConfirmation'
import Safety from './pages/Safety'
import Partners from './pages/Partners'
import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/missions',
    element: <Missions />
  },
  {
    path: '/missions/create',
    element: <CreateMission />
  },
  {
    path: '/missions/confirmation',
    element: <MissionConfirmation />
  },
  {
    path: '/safety',
    element: <Safety />
  },
  {
    path: '/partners',
    element: <Partners />
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
