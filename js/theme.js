// document.addEventListener('DOMContentLoaded', () => {
//     const toggleButton = document.getElementById('theme-toggle');
//     const icon = toggleButton.querySelector('i');

//     // Check for saved user preference, if any, on load of the website
//     const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;

//     if (currentTheme) {
//         document.documentElement.setAttribute('data-theme', currentTheme);

//         if (currentTheme === 'dark') {
//             icon.classList.remove('bi-moon-fill');
//             icon.classList.add('bi-sun-fill');
//         }
//     }

//     toggleButton.addEventListener('click', () => {
//         let theme = document.documentElement.getAttribute('data-theme');

//         if (theme === 'dark') {
//             document.documentElement.setAttribute('data-theme', 'light');
//             localStorage.setItem('theme', 'light');
//             icon.classList.remove('bi-sun-fill');
//             icon.classList.add('bi-moon-fill');
//         } else {
//             document.documentElement.setAttribute('data-theme', 'dark');
//             localStorage.setItem('theme', 'dark');
//             icon.classList.remove('bi-moon-fill');
//             icon.classList.add('bi-sun-fill');
//         }
//     });
// });
