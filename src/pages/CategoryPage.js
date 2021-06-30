import React,{useEffect} from 'react'
import { useParams } from 'react-router'
import {useGlobalContext} from '../context/globalContext'
import News from '../components/News'
// import Slider from '../components/Slider'
const CategoryPage = () => {
    const {id} = useParams();
   
    const {newsData,fetchNews} = useGlobalContext();
    // const heroNewsData = newsData.slice(0,5)
    useEffect(() => {
      fetchNews(id);
  },[id,fetchNews])


  return (
    <div className="categoryPage">
      {/* <Slider data={heroNewsData} /> */}
       <main className="categoryPage_main container">
          <News news={newsData} image_zoneToBottom  />
          
       </main>
       
    </div>
  )
}

export default CategoryPage
