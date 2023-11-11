import { /*useEffect,*/ useState } from 'react';
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { navLinks } from '../constants';
import { logo_dark, logo_light } from '../assets';

export default function Navbar() {
    const [activeNav, setActiveNav] = useState('');

    return (
        <nav 
            className={`${styles.paddingX} w-full flex items-center py-2 fixed 
            top-0 z-20 bg-flashWhite sm:opacity-[0.97] xxs:h-[12vh]`}>
            <div className="w-full flex justify-between items-center max-w-7xl mx-auto"> 
                <Link
                    to="/"
                    className="flex items-center gap-2"
                    onClick={() => {
                        setActiveNav('');
                        window.scrollTo(0,0);
                    }}>
                    <picture >
                        <source
                            srcSet={logo_dark}
                            media="(prefer-color-scheme: dark)"
                        />
                        <img
                            src={logo_light}
                            alt='black logo'
                            className="sm:w-[70px] sm:h-[80px] w-[90px] h-[90px] object-contain"
                        />
                    </picture>
                </Link>
                <ul className='list-none hidden sm:flex flex-row gap-14 mt-2'>
                    {navLinks.map((nav) => (
                        <li
                            key={nav.id}
                            className={`${
                                activeNav === nav.title ? 'text-french' : 'text-eerieBlack'
                              } hover:text-taupe text-[21px] font-medium font-mova 
                                uppercase tracking-[3px] cursor-pointer nav-links`}
                            onClick={() => setActiveNav(nav.title)}>
                            <a href={`#${nav.id}`}>{nav.title}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}