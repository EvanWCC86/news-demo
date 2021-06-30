import React from 'react'

const NewsCard = ({item, textOnImage, smallCard, largeCard, image_zoneToBottom,textFadeIn, underline}) => {
    

    return (
        // can control card_style in many ways such as big_card small_card 
        
        <figure className={`
        news_card
        ${textOnImage ? "textOnImage" : ""}
        ${smallCard ? "smallCard" : ""}
        ${largeCard ? "largeCard" : ""}
        `}> 
            {/* <a target="_blank" href={item.url}> */}
                <div className="image_container">
                    <a
                    className="App-link"
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    >
        
                    <img src={item.image} alt='' className={`
                        regularImg
                        ${image_zoneToBottom ? "image_zoneToBottom" : ""}

                    `} />
                    </a>
                </div>
            {/* </a> */}
            
            <figcaption className={`
                cardContext
                ${textFadeIn ? "textFadeIn" : ""}
            `}>
                <h3>{item.title}</h3>
                <div className="card_footer">
                    <p><strong>Author:</strong>{item.author===null ? <small>N/A</small> : item.author}</p>
                    <p>{item.source}</p>
                    <p>{item.published_at}</p>
                </div>
            </figcaption>
            
        </figure>
        
        
    )
}

export default NewsCard
