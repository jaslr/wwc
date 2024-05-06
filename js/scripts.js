document.addEventListener('DOMContentLoaded', () => {
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
      document.documentElement.setAttribute('data-theme', currentTheme);
    }
  });
  
  function setTheme(themeName) {
    document.documentElement.setAttribute('data-theme', themeName);
    localStorage.setItem('theme', themeName);
    console.log(`Theme set to ${themeName} ${themeName === 'light' ? '☀️' : themeName === 'dark' ? '🌙' : '🧁'}`);
  }
  
