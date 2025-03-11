import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import Button from './Button'; // Импорт компонента Button

function Header() {
  return (
    <header className="header">
      <div className="container">
        <Link to="/" className="logo"><img src="\img\Group 2.png" alt="Логотип YIKES" /></Link>
        <nav>
          <ul className="nav-links">
            <li><Link to="/">Главная</Link></li>
            <li><Link to="/about">О нас</Link></li>
            <li><Link to="/blog">Поддержка</Link></li>
          </ul>
        </nav>
        <Button text="Войти" onClick={() => alert("Вы вошли!")} /> {/* Пример использования Button */}
      </div>
    </header>
  );
}

export default Header;