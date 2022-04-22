function loadLogo(){
    const logo=document.createElement('div');
    logo.className="logo";
    const restaurant1=document.createElement('h1');
    const restaurant2=document.createElement('h4');
    restaurant1.textContent="DA CLAUDIO";
    restaurant2.textContent="RISTORANTE NYC";
    logo.appendChild(restaurant1);
    logo.appendChild(restaurant2);
    return logo;
}

function loadNav(){
    const links=document.createElement('div');
    links.className="links";
    const list=document.createElement('ul');
    const li=document.createElement('li');
    li.textContent="ABOUT";
    li.setAttribute('id', "about")
    const li2=document.createElement('li');
    li2.textContent="MENU";
    li2.setAttribute('id', "menu")
    const li3=document.createElement('li');
    li3.textContent="CONTACT";
    li3.setAttribute('id', "contact")
    const li4=document.createElement('li');
    li4.textContent="BOOK NOW";
    li4.setAttribute('id', "book")
    list.appendChild(li);
    list.appendChild(li2);
    list.appendChild(li3);
    list.appendChild(li4);
    links.appendChild(list);  
    return links;
}

export function pageLoad(){
    const container=document.createElement('div');
    container.className="container";
    const header=document.createElement('div');
    header.className="header";
    const logo=loadLogo();
    header.appendChild(logo);
    const navPanel=loadNav();
    header.appendChild(navPanel);
    document.body.appendChild(header);
    document.body.appendChild(container);
}

