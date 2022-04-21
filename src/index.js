import {pageLoad} from './page-load.js';
import {aboutUs} from './about.js';
import {displayMenu} from './menu.js';
import {contactUs} from './contact.js';
import {openTable} from './book.js';
import './style.css';


pageLoad();

const aboutClick=document.getElementById('about');
const menuClick=document.getElementById('menu');
const contactClick=document.getElementById('contact');
const bookClick=document.getElementById('book');


aboutClick.addEventListener('click',()=>{
    if(!document.querySelector('.aboutDetails')){
        document.querySelector('.container').innerHTML='';
        aboutUs();
    }
    else if(document.querySelector('.aboutDetails')){
        document.querySelector('.container').removeChild(document.querySelector('.aboutDetails'));
    }
})

menuClick.addEventListener('click',()=>{
    if(!document.querySelector('.menuContainer')){
        document.querySelector('.container').innerHTML='';
        displayMenu();
    }
    else if(document.querySelector('.menuContainer')){
        document.querySelector('.container').removeChild(document.querySelector('.menuContainer'));
    }
})

contactClick.addEventListener('click',()=>{
    if(!document.querySelector('.contactDetails')){
        document.querySelector('.container').innerHTML='';
        contactUs();
    }
    else if(document.querySelector('.contactDetails')){
        document.querySelector('.container').removeChild(document.querySelector('.contactDetails'));
    }
})

bookClick.addEventListener('click', openTable);


