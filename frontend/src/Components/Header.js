import React from 'react';

function Header() {
  return (
    <header className="text-white bg-dark py-3">
      <div className="container d-flex justify-content-between">
        <a href="https://www.yandex.ru/" className="logo">
          Logo
        </a>
        <nav>
          <a className="me-3" href="https://www.yandex.ru/">
            Главная
          </a>
          <a href="https://www.yandex.ru/">Корзина</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
