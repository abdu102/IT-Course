import React from 'react'
import './Main.css';
import { Link } from 'react-router-dom';
export const Header = () => {
  return (
    <header className='site-header'>
        <div className="container">
         <div className="wrapper">
         <Link to='/' style={{textDecoration: 'none', fontSize: '24px', fontFamily: 'sans-serif', fontWeight: 'bold', color: '#333'}}>
                Simple LOGO
            </Link>
            <nav>
                <ul style={{listStyle: 'none', display: 'flex', gap: '30px', fontFamily: 'sans-serif', fontWeight: 'bold'}}>
                    <li><Link to='/user' style={{textDecoration: 'none',  color: '#333'}}>User page</Link></li>
                    <li><Link to='/posts' style={{textDecoration: 'none',  color: '#333'}}>Posts page</Link></li>
                </ul>
            </nav>
            <select>
                <option value="EN">EN</option>
                <option value="RU">RU</option>
            </select>
         </div>
        </div>
    </header>
  )
}
