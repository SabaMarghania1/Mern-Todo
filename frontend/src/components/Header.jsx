import React, {useState} from 'react';
import sun from '/icon-sun.svg';
import moon from '/icon-moon.svg';
export default function Header() {
  const [theme, setTheme] = useState('light');

  function toggleTheme() {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  }
  return (
    <header className="header">
      <div>
        <p className="logo">TODO</p>
        <img src={theme === 'light' ? moon : sun} alt="background-image" onClick={toggleTheme} />
      </div>
    </header>
  );
}
