import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { navLinks } from '../constants';

export default function Navbar() {
    const [activeNav, setActiveNav] = useState('');

    return (
        <nav>
            <div>
                <Link>
                </Link>
            </div>
        </nav>
    )
}