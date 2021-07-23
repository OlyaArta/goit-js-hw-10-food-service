const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };

const body = document.querySelector('body');
body.classList.add(Theme.LIGHT);

const themeSwitchEl = document.querySelector('.theme-switch__toggle');
themeSwitchEl.addEventListener('change', onSwitch);

function onSwitch(event) {
 
  if(event.target.checked,
     themeSwitchEl.checked = true) {  
    localStorage.setItem('theme', Theme.DARK);
    body.classList.toggle(Theme.DARK);
    body.classList.toggle(Theme.LIGHT);
   // body.classList.add('dark-theme')
  }  
  else {
    localStorage.setItem('theme', Theme.LIGHT);
    body.classList.remove(Theme.DARK);
    body.classList.add(Theme.LIGHT);
  }
}

