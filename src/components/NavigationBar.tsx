//scss
import '../scss/navigationBar.scss'
//assets
import logo from '../assets/img/logo/logo-1.png'
//models
import { HiddenUlInputArary } from '../../models/models'
//components
import HiddenUl from './HiddenUl'
//--------------------------------
function NavigationBar() {
    const HiddenUlinputObj: HiddenUlInputArary = {
        mainName: 'Portfolio',
        value: [
            {
                name: 'Sites',
                href: '/sites'
            },
            {
                name: 'Photos',
                href: '/photos'
            }
        ]
    }
    return (
        <nav className='navigation-bar'>
            <div className='navigation-bar__work-space'>
                <img className='navigation-bar__logo' src={logo}></img>
                <ul className='navigation-bar__ul'>
                    <li className='navigation-bar__li'>
                        <a className='navigation-bar__a' href="/#/about">
                            <h2 className='navigation-bar__h2'>About me</h2>
                        </a>
                    </li>
                    <li className='navigation-bar__li'>
                        <HiddenUl {...HiddenUlinputObj} />
                    </li>
                    <li className='navigation-bar__li'>
                        <a className='navigation-bar__a' href='/Contact'>
                            <h2 className='navigation-bar__h2'>Contact</h2>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default NavigationBar