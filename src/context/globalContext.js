import React, {useState, createContext, useContext, useEffect} from 'react';


const AppContext = createContext();

const AppProvider = ({children}) => {
    const [category, setCategory] = useState("general")
   

    const [newsData, setNewsData] = useState([]);
    const [loading, setLoading] = useState(false);
    // const [textOnImage, setTextOnImage] = useState(true);
    // const [smallCard, setSmallCard] = useState(true);
    // const [largeCard, setLargeCard] = useState(true);
    
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen)
    }

    const fetchNews = async (category) => {
        const url2 = `http://api.mediastack.com/v1/news?access_key=${process.env.REACT_APP_YOUR_SERVICE_ID}&countries=us&categories=${category}`
        try {
            const res = await fetch(url2)
            const resData = await res.json()
            const filterNews = resData.data.filter((item) => item.image !== null )
            setNewsData(filterNews)
        } catch (error) {
            console.log(error)
        }
    }

    // const fetchNews = async (category) => {
    //     const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${process.env.REACT_APP_YOUR_SERVICE_ID}`;
        
    //     try {
    //         setLoading(true);
    //         const res = await fetch(url);
    //         const resData = await res.json();
    //         const filterNews = resData.articles.filter((item) => item.urlToImage !== null )
    //         setNewsData(resData)
           
    //         setLoading(false);
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }
    // useEffect(() => {
    //     fetchNews(category);
    // },[category])
    useEffect(() => {
        fetchNews(category)
    },[category])
    console.log(newsData)

    return <AppContext.Provider value={{
        loading,
        newsData,
        setCategory,
        // textOnImage,
        // smallCard,
        // largeCard,
        fetchNews,
        toggleSidebar,
        sidebarOpen,
        
    }}>
        {children}
    </AppContext.Provider>
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}

export {AppContext, AppProvider}