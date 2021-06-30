import React, {useEffect,useState} from 'react'
import News from '../components/News';
import axios from 'axios'

import {useGlobalContext} from '../context/globalContext'
const HomePage = () => {
  
  


  const {newsData} = useGlobalContext();
  const featureNews = newsData.slice(0, 4)
  const [someBusinessNews, setSomeBusinessNews] = useState([])
  const [someHealthNews, setSomeHealthNews] = useState([])
  const [someTechnologyNews, setSomeTechnologyNews] = useState([])

  const healthNews = someHealthNews.slice(0, 6)
  const businessNews1 = someBusinessNews.slice(0,2)
  const businessNews2 = someBusinessNews.slice(2, 8)

  const healthUrl = `http://api.mediastack.com/v1/news?access_key=${process.env.REACT_APP_YOUR_SERVICE_ID}&countries=us&categories=health`
  const businessUrl = `http://api.mediastack.com/v1/news?access_key=${process.env.REACT_APP_YOUR_SERVICE_ID}&countries=us&categories=business`
  const technologyUrl = `http://api.mediastack.com/v1/news?access_key=${process.env.REACT_APP_YOUR_SERVICE_ID}&countries=us&categories=technology`
  const fetchCategoryNews = async (url,setCategoryNews) => {
   
        try {
            const res = await fetch(url)
            const resData = await res.json()
            const filterNews = resData.data.filter((item) => item.image !== null )
            setCategoryNews(filterNews)
        }catch (error) {
          console.log(error)
      }
  }
  console.log(someBusinessNews)

  



useEffect(() => {
  fetchCategoryNews(businessUrl, setSomeBusinessNews)
},[businessUrl])
useEffect(() => {
  fetchCategoryNews( healthUrl,setSomeHealthNews )
},[healthUrl])
useEffect(() => {
 fetchCategoryNews(technologyUrl, setSomeTechnologyNews)
},[technologyUrl])


    

  
  return (
    <main className="homePage">
      <div className="featureNews container">
        <News news={featureNews} textOnImage />
      </div>
      <div className="categoryNews container">
        <div className="homePage_left">
          <section className="healthNews">
            <h3 className="headline healthHeadline">Health News</h3>
            <div className="underline"></div>
            <div className="healthNews_container">
                <News news={healthNews} largeCard />
            </div>
          </section>

          <section className="businessNews">
              <h3 className="headline businessHeadline">Business News</h3>
              <div className="underline businessUnderline"></div>
              <div className="businessNews1">
                  <News news={businessNews1} largeCard />
              </div>
              
              <div className="businessNews2">
                  <News news={businessNews2} smallCard />
              </div>
          </section>
        </div>
        
        {/* right side */}
        <div className="homePage_right">
            <h3 className="headline TechHeadline">Technology News</h3>
            <div className="underline TechUnderline"></div>
            <News news={someTechnologyNews} smallCard  />
        </div>
        
  
      </div>
    </main>
  )
}

export default HomePage
