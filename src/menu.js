export function displayMenu() {
    const container=document.querySelector('.container');
    const menuContainer=document.createElement('div');
    menuContainer.className="menuContainer";
    for(let i=1;i<=6;i++){
        let div=document.createElement('div');
        div.className="menuBlock";
        div.setAttribute('id',i);
        div.textContent=i;
        menuContainer.appendChild(div);
    }
    container.appendChild(menuContainer);
    document.getElementById('1').classList.add('antipasti');
    document.getElementById('2').classList.add('secondi');
    document.getElementById('3').classList.add('primi');
    document.getElementById('4').classList.add('contorni');
    document.getElementById('5').classList.add('dessert');
    document.getElementById('6').classList.add('cocktail');
    document.querySelector('.antipasti').innerHTML=`
    <h2>ANTIPASTI</h2>
    <h3>PIATTO DEL SALUMIERE</h3>
    <p>assorted cured meats & cheeses</p>
    <h3>PROSCIUTTO DI PARMA</h3>
    <p>seasonal fruit</p>
    <h3>CARPACCIO DI BRESAOLA</h3>
    <p>dried cured beef, mushroom confit, arugula, shaved parmigiano</p>
    <h3>POLIPO</h3>
    <p>octopus, potatoes, olive tapenade, capers</p>
    <h3>FRITTO MISTO</h3>
    <p>calamari, shrimp, pesce, vegetables, spicy aioli</p>
    <h3>CARCIOFINI</h3>
    <p>fried baby artichoke hearts, spiced bread crumbs</p>
    <h3>INSALATA DI RUCOLA</h3>
    <p>arugula, cherry tomato, parmigiano, lemon</p>`;
    document.querySelector('.secondi').innerHTML=`
    <h2>SECONDI</h2>
    <h3>PARMIGIANA DI MELANZANE</h3>
    <p>eggplant, mozzarella, tomato</p> 
    <h3>BRODETTO DI PESCE</h3>
    <p>lobster tomato broth, clams, mussels, shrimp, calamari</p>
    <h3>PESCE DEL DI'</h3>
    <p>catch of the day</p>
    <h3>POLLO ALLA MILANESE</h3>
    <p>arugula & cherry tomato salad</p>
    <h3>SCALOPPINE DI POLLO</h3>
    <p>grilled vegetables, white wine, lemon, capers</p>
    <h3>TAGLIATA</h3>
    <p>sliced black angus ny strip steak, herbed sautéed potatoes, brandy peppercorn sauce</p>
    <h3>GRILLED SEASONAL VEGETABLE PLATE</h3>
    <p>grilled vegetables</p>`;
    document.querySelector('.primi').innerHTML=`
    <h2>PRIMI</h2>
    <h3>GNOCCHI</h3>
    <p>ricotta & potato gnocchi, pesto, string beans, pine nuts</p>
    <h3>BUCATINI ARRABBIATA</h3>
    <p>spicy tomato sauce</p>
    <h3>BLACK LINGUINE</h3>
    <p>squid ink pasta, head-on prawns, spicy tomato sauce</p>
    <h3>CALAMARATA</h3>
    <p>seafood medley, lobster sauce</p>
    <h3>SPINACH FETTUCCINE</h3>
    <p>Italian sweet sausage, shishito peppers, brandy sauce</p>
    <h3>GARGANELLI</h3>
    <p>wagyu bolognese, parmigiano</p>
    <h3>SPAGHETTI CARBONARA</h3>
    <p>smoked pancetta, pecorino, black pepper</p>
    <h3>FUSILLI AVELLINESI</h3>
    <p>lamb ragu, saffron cream, micro greens</p>
    <h3>LASAGNA</h3>
    <p>wagyu bolognese, béchamel sauce</p>
    <h3>BUCATINI CACIO E PEPE</h3>
    <p>cheese & pepper</p>
    <h3>RIGATONI ALL' AMATRICIANA</h3>
    <p>guanciale, tomato, pecorino, red chili flake, red onion</p>`;
    document.querySelector('.contorni').innerHTML=`
    <h2>CONTORNI<h2>
    <h3>SAUTÉED SPINACH</h3>
    <h3>ROASTED BRUSSELS SPROUTS, PANCETTA</h3>
    <h3>HERBED SAUTÉED POTATOES</h3>
    <h3>SAUTÉED STRING BEANS</h3>
    <p>*Gluten Free or Whole Wheat pasta available (excluding lasagna & gnocchi)</p>`;
    document.querySelector('.dessert').innerHTML=`
    <h2>DESSERTS</h2>
    <h3>TORTA DI CIOCCOLATO</h3>
    <p>chocolate mousse cake</p>
    <h3>CROSTATA DI FRUTTA</h3>
    <p>seasonal fruit tart</p>
    <h3>CHEESECAKE</h3>
    <p>seasonal fruit garnish</p>
    <h3>SORBETTO</h3>
    <p>blood orange, lemon, pear</p>
    <h3>GELATO</h3>
    <p>hazelnut, vanilla, chocolate</p>
    <h3>CLASSIC TIRAMISU</h3>`;
    document.querySelector('.cocktail').innerHTML=`
    <h2>CRAFT COCKTAILS</h2>
    <h3>NEGRONI DA CLAUDIO</h3>
    <p>tanqueray gin, carpano antica formula, campari</p>
    <h3>NEGRONI DA LINDA</h3>
    <p>tito's vodka, cinzano bianco vermouth, cappelletti aperitivo</p>
    <h3>DA CLAUDIO SPRITZ</h3>
    <p>aperol, prosecco, house-sparkling water</p>
    <h3>FUOCO</h3>
    <p>jalapeno-infused tequila, lime, pineapple, agave, spicy salt rim</p>
    <h3>LA COSTIERA</h3>
    <p>gin, lemon juice, dill syrup, egg white</p>
    <h3>BRANDOLINO</h3>
    <p>st. george pear brandy, lemon juice, falernum, grapefruit juice</p>
    <h3>AMARCORD</h3>
    <p>st. george green chile vodka, red beets, lime juice, maraschino liqueur</p>
    <h3>IL CAPO</h3>
    <p>bulleit bourbon, vecchio amaro del capo, campari, orange bitters</p>
    <h3>SIMMER DOWN</h3>
    <p>cognac, nocino liqueur, borghetti</p>
    <h3>ESPRESSO MARTINI</h3>
    <p>house-infused vanilla vodka</p>`;
    container.classList.add('notransition');
    container.style.backgroundImage="url('../dist/images/seafood.jpg')";
}
