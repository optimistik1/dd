import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; {new Date().getFullYear()} Yikes. Все права защищены.</p>
        <nav>
          <ul className="footer-links">
            <li><Link to="/about">Погода</Link></li>
            <li><Link to="/blog">Контакты</Link></li>
            <li><a href="https://www.yandex.ru/video/preview/11362149750057564931">Политика конфиденциальности</a></li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;