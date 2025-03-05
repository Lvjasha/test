import React from 'react';

function Header() {
  return (
    <div className="container">
      <a href="https://www.yandex.ru/" className="logo">
        Logo
      </a>
      <nav>
        <a href="https://www.yandex.ru/">Главная</a>
        <a href="https://www.yandex.ru/">Корзина</a>
      </nav>
    </div>
  );
}

export default Header;
