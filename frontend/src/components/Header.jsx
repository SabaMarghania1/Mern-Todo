import React, {useEffect, useState} from 'react';
import sun from '/icon-sun.svg';
import moon from '/icon-moon.svg';
export default function Header() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <header className="header">
      <div>
        <p className="logo">TODO</p>
        <img src={theme === 'light' ? moon : sun} alt="background-image" onClick={toggleTheme} />
      </div>
    </header>
  );
}
