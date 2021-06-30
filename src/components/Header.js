import React from 'react'
import {Link} from 'react-router-dom'
import { TiSocialFacebook, TiSocialLinkedin, TiSocialTwitter, TiSocialSkypeOutline } from 'react-icons/ti';
const Header = () => {
    return (
        <header>
            
                <div className="header">
                    <div className="container header_container">
                        <p>June 25</p>
                        <ul>
                            <li>
                                <Link to="/">Forums</Link>
                            </li>
                            <li>
                                <Link to="/">Contact</Link>
                            </li>
                            <li>
                                <Link to="/">Subscriber</Link>
                            </li>
                        </ul>
                        <div className="social_icons">
                            <TiSocialFacebook />
                            <TiSocialLinkedin />
                            <TiSocialTwitter />
                            <TiSocialSkypeOutline />
                            
                        </div>
                    </div>
                </div>
                <div className="brand">
                    <div className="brand_container container">
                        <div className="brand">
                            <h1>EvanWeb</h1>
                            <p>News</p>
                        </div>
                        <div className="brand_hero">
                            <div className="hero_content">
                                h1
                            </div>
                        </div>
                        
                    </div>
                </div>
            
        </header>
    )
}

export default Header
