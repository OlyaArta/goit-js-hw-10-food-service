const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };

const themeSwitch = window.localStorage.getItem('DARK');
const themeCheckBox = document.getElementById('theme-switch-toggle');
themeCheckBox.checked = (themeSwitch === "true")? true : false;

function myFunction() {
   if(themeCheckBox.checked) {
       document.documentElement.setAttribute('dark-theme', 'dark');
       window.localStorage.setItem('dark-theme', true);
   }
   else {
       document.documentElement.setAttribute('dark-theme', 'light');
       window.localStorage.setItem('dark-theme', false);
   }
}

//  const modalBox = document.querySelector('.lightbox');
//  function onModalBOxOpen() {
//  modalBox.classList.add('is-open');
///  };
  
  // Закрытие модалки
//  function onModalBoxClose(event) {
 //   const modalBoxOpen = document.querySelector('.lightbox');
 //   modalBoxOpen.classList.remove('is-open');