export function reloadPage() {
    const container=document.querySelector('.container');
    var images=["url('../dist/images/fish2.jpg')","url('../dist/images/steak.jpg')","url('../dist/images/morepasta.jpg')","url('../dist/images/caccio.jpg')","url('../dist/images/fish.jpg')","url('../dist/images/dessert.jpg')","url('../dist/images/charcuterie.jpg')"];
    var random=Math.floor(Math.random() * images.length);
    container.style.backgroundImage=images[random];
    container.innerHTML='';
   }