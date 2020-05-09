import './styles.css';
import markup from './js/create-items'

const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
};

const buttonRef = document.querySelector('.js-switch-input')

populateTheme();
buttonRef.addEventListener('change', handleCheckChange)

function handleCheckChange(event){
    if(buttonRef.checked){
        document.body.classList.add(Theme.DARK)
        document.body.classList.remove(Theme.LIGHT)
        localStorage.setItem('theme', Theme.DARK)
        
    }else{document.body.classList.replace(Theme.DARK, Theme.LIGHT)
        localStorage.setItem('theme', Theme.LIGHT)
    }
}

function populateTheme(){
    const savedTheme = localStorage.getItem('theme')
    
    if(savedTheme){
        document.body.classList.add(savedTheme)
        if(savedTheme === Theme.DARK){
            buttonRef.checked = true
        }
    }
    
} 

const menuRef = document.querySelector('.js-menu')

menuRef.insertAdjacentHTML('beforeend', markup)





