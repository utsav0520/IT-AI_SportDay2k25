import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout'
import Home from './components/Home'
import Bandminton from './components/Pages/Bandminton'
import Cricket  from './components/Pages/Cricket '
import Chess from './components/Pages/Chess'
import TugofWar from './components/Pages/TugofWar'
import Volleyball from './components/Pages/Volleyball'
import FootBall from './components/Pages/FootBall'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
      <Route path="/" element={<Home />} />
      <Route path="home" element={<Home />} />
      <Route path="bandminton" element={<Bandminton />} />
      <Route path="cricket " element={<Cricket  />} />
      <Route path="tugofwar" element={<TugofWar />} />
      <Route path="chess" element={<Chess />} />
      <Route path="volleyball" element={<Volleyball />} />
      <Route path="football" element={<FootBall />} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)