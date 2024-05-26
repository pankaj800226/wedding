import { Link } from 'react-router-dom'
import whatshap from '../assets/whatsapp.png'
import linkedin from '../assets/linkedin.png'
import instagram from '../assets/instagram.png'
import letter from '../assets/gmail.png'


const Footer = () => {
    return (
        <div className="footer_container">
            <footer className="footer">
                <div className="footer__addr">
                    <h1 className="footer__logo">Something</h1>

                    <h2>Contact</h2>

                    <address>
                        5534 Somewhere In. The World 22193-10212<br />

                        <Link className="footer__btn" to="mailto:example@gmail.com">Email Us</Link>
                    </address>
                </div>

                <ul className="footer__nav">
                    <li className="nav__item">
                        <h2 className="nav__title">Media</h2>

                        <ul className="nav__ul">
                            <li>
                                <Link to="#">Online</Link>
                            </li>

                            <li>
                                <Link to="#">Print</Link>
                            </li>

                            <li>
                                <Link to="#">Alternative Ads</Link>
                            </li>
                        </ul>
                    </li>

                    <li className="nav__item nav__item--extra">
                        <h2 className="nav__title">Technology</h2>

                        <ul className="nav__ul nav__ul--extra">
                            <li>
                                <Link to="#">Hardware Design</Link>
                            </li>

                            <li>
                                <Link to="#">Software Design</Link>
                            </li>

                            <li>
                                <Link to="#">Digital Signage</Link>
                            </li>

                            <li>
                                <Link to="#">Automation</Link>
                            </li>Lito                        <li>
                                <Link to="#">Artificial Intelligence</Link>
                            </li>

                            <li>
                                <Link to="#">IoT</Link>
                            </li>
                        </ul>
                    </li>

                    <li className="nav__item">
                        <h2 className="nav__title">Legal</h2>

                        <ul className="nav__ul">
                            <li>
                                <Link to="#">Privacy Policy</Link>
                            </li>

                            <li>
                                <Link to="#">Terms of Use</Link>
                            </li>

                            <li>
                                <Link to="#">Sitemap</Link>
                            </li>
                        </ul>
                    </li>
                </ul>

                <div className="legal">
                    <p>&copy; 2019 Something. All rights reserved.</p>
                    <div className="social_link">
                        <Link><img src={letter} alt="" /></Link>
                        <Link to='https://wa.me/76675 10648'><img src={whatshap} alt="" /></Link>
                        <Link><img src={linkedin} alt="" /></Link>
                        <Link><img src={instagram} alt="" /></Link>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer