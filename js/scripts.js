function setTheme(themeName) {
    document.documentElement.setAttribute('data-theme', themeName);
    document.getElementById('themeLabel').textContent = themeName.charAt(0).toUpperCase() + themeName.slice(1);

    // Remove tick marks from all theme options
    const themeOptions = document.querySelectorAll('.theme-option');
    themeOptions.forEach(option => {
        option.textContent = option.getAttribute('data-theme').charAt(0).toUpperCase() + option.getAttribute('data-theme').slice(1);
    });

    // Add tick mark to the selected theme
    const selectedOption = document.querySelector(`.theme-option[data-theme="${themeName}"]`);
    if (selectedOption) {
        selectedOption.textContent = '✓ ' + themeName.charAt(0).toUpperCase() + themeName.slice(1);
    }
}