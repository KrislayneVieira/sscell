document.addEventListener('DOMContentLoaded', function() {
    const toggleDarkModeButton = document.getElementById('toggle-dark-mode');
    const moonIcon = 'fa-moon';
    const sunIcon = 'fa-sun';

    toggleDarkModeButton.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        if (document.body.classList.contains('dark-mode')) {
            toggleDarkModeButton.innerHTML = `<i class="fas ${sunIcon}"></i>`;
        } else {
            toggleDarkModeButton.innerHTML = `<i class="fas ${moonIcon}"></i>`;
        }
    });
});
