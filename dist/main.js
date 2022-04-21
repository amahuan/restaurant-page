(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>b});var a=t(81),o=t.n(a),i=t(645),r=t.n(i),s=t(667),c=t.n(s),d=new URL(t(10),t.b),l=new URL(t(973),t.b),p=new URL(t(384),t.b),u=new URL(t(412),t.b),h=r()(o()),m=c()(d),f=c()(l),g=c()(p),y=c()(u);h.push([e.id,"@font-face {\n    font-family: 'Neutraface' ;\n    src: url("+m+");\n}\n@font-face {\n    font-family: 'Neutraface TF' ;\n    src: url("+f+");\n}\n@font-face {\n    font-family: 'Neutraface Demi' ;\n    src: url("+g+");\n}\n\n*,\n*::before,\n*::after {\n    box-sizing: border-box;\n    padding: 0;\n    margin: 0;\n    font-family: 'Neutraface';\n}\n\n.container {\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-template-rows: 60px auto;\n    justify-items: center;\n    width: 100vw;\n    height: 100vh;\n    background-repeat: no-repeat;\n    background-position: center;\n    background-image: url("+y+');\n    transition: background-image 1s;\n    background-size: cover;\n    padding: 50px;\n}\n\n.aboutDetails {\n    width: 70vw;\n    transition: 2s;\n}\n\n.aboutHeader {\n    background-color: rgba(255,255,255,0.7);\n    font-size: 30px;\n    padding: 20px;\n}\n\n.aboutContent {\n    background-color: rgba(255,255,255,0.7);\n    padding: 20px;\n    padding-left: 100px;\n}\n\n.aboutContent h3 {\n    font-size: 1.2rem;\n    margin-top: 1.2rem;\n}\n\n.aboutContent p {\n    font-size: 1.2rem;\n}\n\n.logo {\n    display: grid;\n    justify-items: center;\n    text-align: center;\n    align-content: center;\n    padding: 10px;\n}\n\n.header {\n    display: flex;\n    flex: 1;\n    justify-content: space-between;\n    margin: 10px;\n}\n\n.header h1 {\n    text-align: left;\n    font-size: 40px;\n    align-items: center;\n    margin: 0px;\n    font-family: \'Neutraface TF\';\n}\n.header h4 {\n    text-align: left;\n    font-size: 14px;\n    letter-spacing: 4px;\n    margin: 0px;\n    font-family: \'Neutraface\';\n}\n.links {\n    display: grid;\n}\n\nul {\n    list-style-type: none;\n    font-size: 1.2rem;\n    padding-right: 0px;\n    display: grid;\n    grid-template-columns: 150px 150px 150px 150px;\n    margin: 0px;\n    align-items: center;\n    text-align: center;\n    font-family: \'Neutraface\';\n}\n\nli:last-child:hover {\n    color: rgb(143, 0, 0);\n    font-weight:800;\n}\n\nli:hover {\n    cursor: pointer;\n}\n\n.contactDetails {\n    display: grid;\n    width: 70vw;\n    grid-template-columns: 2fr 1fr;\n    transition: 2s;\n}\n\n.left {\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-template-rows: 1fr 1fr;\n    align-content: space-around;\n    min-width: 500px;\n}\n\n.addressDetails {\n    background-color: rgba(255,255,255,0.8);\n    font-size: 30px;\n    padding: 20px;\n}\n\n.hoursContent {\n    background-color: rgba(255,255,255,0.8);\n    padding: 20px;\n}\n\n.eventDetails {\n    background-color: rgba(255,255,255,0.8);\n    padding: 20px;\n}\n\n.addressDetails h2, .hoursContent h2, .eventDetails h2 {\n    font-size: 1.4rem;\n    margin-top: 1.2rem;\n}\n\n.addressDetails ul, .hoursContent ul {\n    list-style-type: none;\n    font-size: 1.4rem;\n    margin-top: 1.2rem;\n    display: grid;\n    grid-template-columns: 1fr;\n    justify-content: left;\n}\n\n.eventDetails {\n    font-size: 1.4rem;\n}\n\n.addressDetails li, .hoursContent li {\n    text-align: left;\n}\n\n.right {\n    display: grid;\n    align-items: center;\n    justify-items: center;\n    padding: 20px;\n}\n.right img {\n    height: 650px;\n    width: 650px;\n}\n\n.menuContainer {\n    display: grid;\n    width: 70vw;\n    height: 90vh;\n    grid-template-columns: repeat(3, 1fr);\n    grid-template-rows: repeat(6, 1fr);\n    grid-template-areas: \n    "antipasti primi dessert"\n    "antipasti primi dessert"\n    "antipasti primi cocktail"\n    "secondi primi cocktail"\n    "secondi contorni cocktail"\n    "secondi contorni cocktail";\n}\n\n.menuContainer div {\n    background-color: rgba(255,255,255,0.8);  \n    text-align: center;\n    padding: 10px;\n    align-content: flex-start;\n}\n\n.menuContainer div h2 {\n    padding-top: 7px;\n    padding-bottom: 7px;\n    font-size: 1rem;\n    color:rgb(143, 0, 0);\n}\n\n.menuContainer div h3 {\n    padding-top: 7px;\n    padding-bottom: 2px;\n    font-size: 0.8rem;\n    color: rgb(80, 79, 79)\n}\n\n.menuContainer div p {\n    padding-top: 3px;\n    padding-bottom: 7px;\n    font-size: 0.8rem;\n    color: rgb(80, 79, 79)\n}\n\n.antipasti {\n    grid-area: antipasti;\n}\n\n.secondi {\n    grid-area: secondi;\n}\n\n.primi {\n    grid-area: primi;\n}\n\n.contorni {\n    grid-area: contorni;\n}\n\n.dessert {\n    grid-area: dessert;\n}\n\n.cocktail {\n    grid-area: cocktail;\n}\n\n.contorni p {\n    margin-top: 4rem;\n}\n',""]);const b=h},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",a=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),a&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),a&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,a,o,i){"string"==typeof e&&(e=[[null,e,void 0]]);var r={};if(a)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(r[c]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);a&&r[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),n.push(l))}},n}},667:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,a=0;a<n.length;a++)if(n[a].identifier===e){t=a;break}return t}function a(e,a){for(var i={},r=[],s=0;s<e.length;s++){var c=e[s],d=a.base?c[0]+a.base:c[0],l=i[d]||0,p="".concat(d," ").concat(l);i[d]=l+1;var u=t(p),h={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)n[u].references++,n[u].updater(h);else{var m=o(h,a);a.byIndex=s,n.splice(s,0,{identifier:p,updater:m,references:1})}r.push(p)}return r}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var i=a(e=e||[],o=o||{});return function(e){e=e||[];for(var r=0;r<i.length;r++){var s=t(i[r]);n[s].references--}for(var c=a(e,o),d=0;d<i.length;d++){var l=t(i[d]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}i=c}}},569:e=>{var n={};e.exports=function(e,t){var a=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var a="";t.supports&&(a+="@supports (".concat(t.supports,") {")),t.media&&(a+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(a+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),a+=t.css,o&&(a+="}"),t.media&&(a+="}"),t.supports&&(a+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleTagTransform(a,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},10:(e,n,t)=>{e.exports=t.p+"794f7defd77f3e1c0db9.otf"},973:(e,n,t)=>{e.exports=t.p+"18908773b40fceaf0c9b.otf"},384:(e,n,t)=>{e.exports=t.p+"645aa438c052fe09f9dc.otf"},412:(e,n,t)=>{e.exports=t.p+"7bfe981f9dbf64a929c6.jpg"}},n={};function t(a){var o=n[a];if(void 0!==o)return o.exports;var i=n[a]={id:a,exports:{}};return e[a](i,i.exports,t),i.exports}t.m=e,t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var a in n)t.o(n,a)&&!t.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:n[a]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var a=n.getElementsByTagName("script");a.length&&(e=a[a.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href,(()=>{var e=t(379),n=t.n(e),a=t(795),o=t.n(a),i=t(569),r=t.n(i),s=t(565),c=t.n(s),d=t(216),l=t.n(d),p=t(589),u=t.n(p),h=t(426),m={};m.styleTagTransform=u(),m.setAttributes=c(),m.insert=r().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=l(),n()(h.Z,m),h.Z&&h.Z.locals&&h.Z.locals,function(){const e=document.createElement("div");e.className="header";const n=document.createElement("div");n.className="logo";const t=document.createElement("h1"),a=document.createElement("h4");t.textContent="DA CLAUDIO",a.textContent="RISTORANTE NYC",n.appendChild(t),n.appendChild(a);const o=document.createElement("div");o.className="links";const i=document.createElement("ul"),r=document.createElement("li");r.textContent="ABOUT",r.setAttribute("id","about");const s=document.createElement("li");s.textContent="MENU",s.setAttribute("id","menu");const c=document.createElement("li");c.textContent="CONTACT",c.setAttribute("id","contact");const d=document.createElement("li");d.textContent="BOOK NOW",d.setAttribute("id","book"),i.appendChild(r),i.appendChild(s),i.appendChild(c),i.appendChild(d),o.appendChild(i);const l=document.createElement("div");l.className="container",e.appendChild(n),e.appendChild(o),document.body.appendChild(e),document.body.appendChild(l)}();const f=document.getElementById("about"),g=document.getElementById("menu"),y=document.getElementById("contact"),b=document.getElementById("book");f.addEventListener("click",(()=>{document.querySelector(".aboutDetails")?document.querySelector(".aboutDetails")&&document.querySelector(".container").removeChild(document.querySelector(".aboutDetails")):(document.querySelector(".container").innerHTML="",function(){const e=document.querySelector(".container"),n=document.createElement("div");n.className="aboutDetails";const t=document.createElement("div");t.innerHTML="WHO WE ARE & WHAT <br /> WE ARE ABOUT",t.className="aboutHeader";const a=document.createElement("div");a.className="aboutContent",a.innerHTML="<p>A true neighborhood restaurant, Da Claudio welcomes downtown regulars, local businesses and visitors from the world over with open arms. Walk off of historic Ann Street, in the heart of Manhattan’s financial district, into a warm, light and airy space. And let Linda and Claudio Marini share their love of delicious food, drink and hospitality. Their locally-sourced seasonal Italian menu enhances market fare with the finest imports from Italy. Their beautiful bar serves lovingly crafted cocktails, Italian wines and small plates. Full service tables brim with fresh pastas, meats and seafood. And the restaurant offers a full take-out and delivery menu. Linda and Claudio are passionate about tradition as well as innovation in their cuisine. And they radiate this passion to their guests. A meal at Da Claudio is an elegant, yet deeply comfortable experience. After six wonderful years in the neighborhood, Da Claudio is a downtown classic.</p>\n    <h3>CLAUDIO</h3>\n    <p>A native of Sanremo, Italy, where he attended hotel school and worked in 5 Star hotels, Claudio Marini came to New York in 1989 with dreams of opening his own restaurant. After waiting tables at Mezzogiorno in SoHo on the advice of the cab driver who drove him to town from the airport, his first venture was a homespun, wildly successful panini and pasta shop run out of a tiny midtown basement. From that location, he won the heart of Linda Chen Marini by sending heart-shaped pizzas to her in her office at Barneys, where she was a rising star as a fashion buyer. In 1998, Claudio named his first real restaurant, Caffe Linda, after his soon to be bride. Claudio and Linda owned Caffe Linda until 2015, when they decided to focus all their energies on Da Claudio. From 2006 to 2012, they also owned Barbarini Alimentari & Mercato, located on historic Front Street in the Seaport, a neighborhood institution until it was completely destroyed by Superstorm Sandy. Following this tragedy, with the support of many loyal customers, Linda and Claudio built Da Claudio on higher ground on Ann Street. Their persistence paid off. It was an instant hit. Claudio wants nothing more than to greet you warmly at the door of Da Claudio and to share his delicious food and wine with you in the comfort of his “home.”</p>\n    <h3>LINDA</h3>\n    <p>Linda Chen Marini was born in Urumqi, China, and immigrated to New York City as a little girl with her parents. She grew up bilingual and bicultural. Linda attended Laguardia High School for fine arts then spent four college years in Rome, Italy, where she became fluent in Italian and fell in love with the language, culture, fashion and food. After graduate school back in New York at FIT, Linda began her stellar career as a buyer at Barneys. After Claudio’s heart-shaped pizzas led to a set of twins, Linda left the fashion world to join Claudio and focus on running the business side of the restaurants. Linda not only brings business savvy and a great design sense to Da Claudio, but a deep appreciation of food, wine and all things Italian. Like Claudio, she is a lover of downtown and a lover of people. Her enthusiasm is irresistable! Linda and Claudio are joyful and welcoming. At Da Claudio, they radiate gratitude for friends, neighbors and customers. Their love comes through in every aspect of the fabulous food and wonderful service.</p>",e.style.backgroundImage="url('../images/squidink.jpg')",n.appendChild(t),n.appendChild(a),e.appendChild(n)}())})),g.addEventListener("click",(()=>{document.querySelector(".menuContainer")?document.querySelector(".menuContainer")&&document.querySelector(".container").removeChild(document.querySelector(".menuContainer")):(document.querySelector(".container").innerHTML="",function(){const e=document.querySelector(".container"),n=document.createElement("div");n.className="menuContainer";for(let e=1;e<=6;e++){let t=document.createElement("div");t.className="menuBlock",t.setAttribute("id",e),t.textContent=e,n.appendChild(t)}e.appendChild(n),document.getElementById("1").classList.add("antipasti"),document.getElementById("2").classList.add("secondi"),document.getElementById("3").classList.add("primi"),document.getElementById("4").classList.add("contorni"),document.getElementById("5").classList.add("dessert"),document.getElementById("6").classList.add("cocktail"),document.querySelector(".antipasti").innerHTML="\n    <h2>ANTIPASTI</h2>\n    <h3>PIATTO DEL SALUMIERE</h3>\n    <p>assorted cured meats & cheeses</p>\n    <h3>PROSCIUTTO DI PARMA</h3>\n    <p>seasonal fruit</p>\n    <h3>CARPACCIO DI BRESAOLA</h3>\n    <p>dried cured beef, mushroom confit, arugula, shaved parmigiano</p>\n    <h3>POLIPO</h3>\n    <p>octopus, potatoes, olive tapenade, capers</p>\n    <h3>FRITTO MISTO</h3>\n    <p>calamari, shrimp, pesce, vegetables, spicy aioli</p>\n    <h3>CARCIOFINI</h3>\n    <p>fried baby artichoke hearts, spiced bread crumbs</p>\n    <h3>INSALATA DI RUCOLA</h3>\n    <p>arugula, cherry tomato, parmigiano, lemon</p>",document.querySelector(".secondi").innerHTML="\n    <h2>SECONDI</h2>\n    <h3>PARMIGIANA DI MELANZANE</h3>\n    <p>eggplant, mozzarella, tomato</p> \n    <h3>BRODETTO DI PESCE</h3>\n    <p>lobster tomato broth, clams, mussels, shrimp, calamari</p>\n    <h3>PESCE DEL DI'</h3>\n    <p>catch of the day</p>\n    <h3>POLLO ALLA MILANESE</h3>\n    <p>arugula & cherry tomato salad</p>\n    <h3>SCALOPPINE DI POLLO</h3>\n    <p>grilled vegetables, white wine, lemon, capers</p>\n    <h3>TAGLIATA</h3>\n    <p>sliced black angus ny strip steak, herbed sautéed potatoes, brandy peppercorn sauce</p>\n    <h3>GRILLED SEASONAL VEGETABLE PLATE</h3>\n    <p>grilled vegetables</p>",document.querySelector(".primi").innerHTML="\n    <h2>PRIMI</h2>\n    <h3>GNOCCHI</h3>\n    <p>ricotta & potato gnocchi, pesto, string beans, pine nuts</p>\n    <h3>BUCATINI ARRABBIATA</h3>\n    <p>spicy tomato sauce</p>\n    <h3>BLACK LINGUINE</h3>\n    <p>squid ink pasta, head-on prawns, spicy tomato sauce</p>\n    <h3>CALAMARATA</h3>\n    <p>seafood medley, lobster sauce</p>\n    <h3>SPINACH FETTUCCINE</h3>\n    <p>Italian sweet sausage, shishito peppers, brandy sauce</p>\n    <h3>GARGANELLI</h3>\n    <p>wagyu bolognese, parmigiano</p>\n    <h3>SPAGHETTI CARBONARA</h3>\n    <p>smoked pancetta, pecorino, black pepper</p>\n    <h3>FUSILLI AVELLINESI</h3>\n    <p>lamb ragu, saffron cream, micro greens</p>\n    <h3>LASAGNA</h3>\n    <p>wagyu bolognese, béchamel sauce</p>\n    <h3>BUCATINI CACIO E PEPE</h3>\n    <p>cheese & pepper</p>\n    <h3>RIGATONI ALL' AMATRICIANA</h3>\n    <p>guanciale, tomato, pecorino, red chili flake, red onion</p>",document.querySelector(".contorni").innerHTML="\n    <h2>CONTORNI<h2>\n    <h3>SAUTÉED SPINACH</h3>\n    <h3>ROASTED BRUSSELS SPROUTS, PANCETTA</h3>\n    <h3>HERBED SAUTÉED POTATOES</h3>\n    <h3>SAUTÉED STRING BEANS</h3>\n    <p>*Gluten Free or Whole Wheat pasta available (excluding lasagna & gnocchi)</p>",document.querySelector(".dessert").innerHTML="\n    <h2>DESSERTS</h2>\n    <h3>TORTA DI CIOCCOLATO</h3>\n    <p>chocolate mousse cake</p>\n    <h3>CROSTATA DI FRUTTA</h3>\n    <p>seasonal fruit tart</p>\n    <h3>CHEESECAKE</h3>\n    <p>seasonal fruit garnish</p>\n    <h3>SORBETTO</h3>\n    <p>blood orange, lemon, pear</p>\n    <h3>GELATO</h3>\n    <p>hazelnut, vanilla, chocolate</p>\n    <h3>CLASSIC TIRAMISU</h3>",document.querySelector(".cocktail").innerHTML="\n    <h2>CRAFT COCKTAILS</h2>\n    <h3>NEGRONI DA CLAUDIO</h3>\n    <p>tanqueray gin, carpano antica formula, campari</p>\n    <h3>NEGRONI DA LINDA</h3>\n    <p>tito's vodka, cinzano bianco vermouth, cappelletti aperitivo</p>\n    <h3>DA CLAUDIO SPRITZ</h3>\n    <p>aperol, prosecco, house-sparkling water</p>\n    <h3>FUOCO</h3>\n    <p>jalapeno-infused tequila, lime, pineapple, agave, spicy salt rim</p>\n    <h3>LA COSTIERA</h3>\n    <p>gin, lemon juice, dill syrup, egg white</p>\n    <h3>BRANDOLINO</h3>\n    <p>st. george pear brandy, lemon juice, falernum, grapefruit juice</p>\n    <h3>AMARCORD</h3>\n    <p>st. george green chile vodka, red beets, lime juice, maraschino liqueur</p>\n    <h3>IL CAPO</h3>\n    <p>bulleit bourbon, vecchio amaro del capo, campari, orange bitters</p>\n    <h3>SIMMER DOWN</h3>\n    <p>cognac, nocino liqueur, borghetti</p>\n    <h3>ESPRESSO MARTINI</h3>\n    <p>house-infused vanilla vodka</p>",e.style.backgroundImage="url('../images/seafood.jpg')"}())})),y.addEventListener("click",(()=>{document.querySelector(".contactDetails")?document.querySelector(".contactDetails")&&document.querySelector(".container").removeChild(document.querySelector(".contactDetails")):(document.querySelector(".container").innerHTML="",function(){const e=document.querySelector(".container"),n=document.createElement("div");n.className="contactDetails";const t=document.createElement("div");t.className="left";const a=document.createElement("div");a.innerHTML="\n    <h2>CONTACT</h2>\n    <ul>\n    <li>21 Ann Street  New York City NY 10038</li>\n    <li>212-285-2668</li>\n    <li>info@daclaudionyc.com</li>\n    </ul>",a.className="addressDetails";const o=document.createElement("div");o.className="hoursContent",o.innerHTML="\n    <h2>INDOOR, DELIVERY, TAKE-OUT</h2>\n    <ul>\n    <li>Sunday - Thursday 5:00 - 10:00 pm Dinner</li>\n    <li>Friday - Saturday 5:00 - 11:00 pm Dinner</li>\n    <li>Tuesday - Friday 12:00 - 3:00 pm Lunch</li>\n    </ul>";const i=document.createElement("div");i.innerHTML="<h2>PRIVATE DINING AND SPECIAL EVENTS</h2>\n    <p>\n    Da Claudio offers three semi-private dining spaces, suitable for parties of up to 22, 24, and 52 seated guests. All partial and full buyouts are subject to a minimum spend plus tax and gratuity. Dining options include cocktail receptions with passed finger foods, happy hour events or sit down coursed meals served plated (up to 20 guests) or family style (for up to 98 seated guests or 125 standing guests). If you are interested in hosting an event with us, please contact the private dining and special events coordinator at linda@daclaudionyc.com\n    </p>",i.className="eventDetails";const r=document.createElement("div");r.className="right",r.innerHTML='\n    <img src="../images/map.jpg" alt="map location">',e.style.backgroundImage="url('../images/bar.jpg')",t.appendChild(a),t.appendChild(o),t.appendChild(i),n.appendChild(t),n.appendChild(r),e.appendChild(n)}())})),b.addEventListener("click",(function(){window.open("https://www.opentable.com/da-claudio-ristorante?lang=EN&ref=18014&sp=ppc_g_us_restaurants&cmid=12654247124&aid=129665147993&tid=kwd-1020217037476&locp=9004373&loci=9004091&mt=&nw=g&d=c&cid=551111884280&pos=&gclid=CjwKCAjwu_mSBhAYEiwA5BBmf7oSm8Nz5wH7xctC_CcgbNMOidjeCEkHNlJ71YOhMkyYCk0gbbsyzxoC9zoQAvD_BwE","_blank")}))})()})();