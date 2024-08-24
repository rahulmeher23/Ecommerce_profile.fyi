import { useEffect, useState } from 'react'
import './App.css'
import { Logo } from './assets/AppIcons'
import { RouterProvider } from 'react-router-dom'
import { appRouter } from './appRouter/appRouter'
import { Toaster } from 'react-hot-toast'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { fetchProducts } from './redux/slices/productsSlice'


function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [])

  return (
    <>
      <div >
        <RouterProvider router={appRouter} />
        <Toaster position="top-right" />
      </div>
    </>
  )
}

export default App
