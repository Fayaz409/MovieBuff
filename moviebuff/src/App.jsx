// import './App.css'
import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import MobileNavigation from './components/MobileNavigation'
import axios from 'axios'
import {useDispatch} from 'react-redux'
import { useEffect } from 'react'
import { setBannerData,setImageURL } from './store/moviebuffSlice'
function App() {
  const dispatch = useDispatch()
const fetchTrendingData = async() =>{
  try {
    const res =await axios.get('/trending/all/week')
    dispatch(setBannerData(res.data.results))
    console.log(res.data.results)
  } catch (error) {
    console.log('Error',error)
  }
}


useEffect(()=>{
  const fetchConfiguration = async()=>{
    try {
      const res = await axios.get('/configuration')
      dispatch(setImageURL(res.data.images.secure_base_url+'original'))
      console.log('configuration data',res.data.images)
    } catch (error) {
      console.log('error',error)
    }
  }
  
  fetchTrendingData()
  fetchConfiguration()
},[])

  return (
    <div className="min-h-screen lg:pd-0">
    <Header />
    <main className="container mx-auto">
      <Outlet />
    </main>
    <Footer/>
    <MobileNavigation/>
  </div>
  )
}

export default App
