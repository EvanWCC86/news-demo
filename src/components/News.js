import React from 'react'
import NewsCard from './NewsCard'

const News = ({news, textOnImage, smallCard, largeCard }) => {
  
  return (
    <>
      {news.map((item) => (
          <NewsCard item={item} key={item.title} textOnImage={textOnImage} largeCard={largeCard} smallCard={smallCard} image_zoneToBottom  />
      ))}
    </>
  )
}

export default News
