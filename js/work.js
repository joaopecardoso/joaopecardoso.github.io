function workHover() {
    const covers = document.querySelectorAll('.cover-container');
    for (let i = 0; i < covers.length; i++) {
        covers[i].addEventListener('mouseleave', ()=>hoverText.innerHTML = "");
        // covers[i].addEventListener('touchend', () => hoverText.innerHTML = "");
        switch (i) {
        case 0:
            covers[i].addEventListener('mouseenter', ()=>hoverText.innerHTML = 'MX2 <img class="svg-arrow-hover" src="https://joaogeneroso.com/assets/arrow-upright-thin.svg">');
            // covers[i].addEventListener('touchstart', () => hoverText.innerHTML = 'Nike Ibirapuera <img class="svg-arrow-hover" src="https://joaogeneroso.com/assets/arrow-upright-thin.svg">');
            break;
        case 1:
            covers[i].addEventListener('mouseenter', ()=>hoverText.innerHTML = 'YSn3 <img class="svg-arrow-hover" src="https://joaogeneroso.com/assets/arrow-upright-thin.svg">');
            // covers[i].addEventListener('touchstart', () => hoverText.innerHTML = 'Sumaúma <img class="svg-arrow-hover" src="https://joaogeneroso.com/assets/arrow-upright-thin.svg">');
            break;
        case 2:
            covers[i].addEventListener('mouseenter', ()=>hoverText.innerHTML = 'GFAUD <img class="svg-arrow-hover" src="https://joaogeneroso.com/assets/arrow-upright-thin.svg">');
            // covers[i].addEventListener('touchstart', () => hoverText.innerHTML = 'GFAUD <img class="svg-arrow-hover" src="https://joaogeneroso.com/assets/arrow-upright-thin.svg">');
            break;
        case 3:
            covers[i].addEventListener('mouseenter', ()=>hoverText.innerHTML = 'Semana dos Bixos <img class="svg-arrow-hover" src="https://joaogeneroso.com/assets/arrow-upright-thin.svg">');
            // covers[i].addEventListener('touchstart', () => hoverText.innerHTML = 'Semana dos Bixos <img class="svg-arrow-hover" src="https://joaogeneroso.com/assets/arrow-upright-thin.svg">');
            break;
        case 4:
            covers[i].addEventListener('mouseenter', ()=>hoverText.innerHTML = 'Novas Ocupações contra o Novo Normal <img class="svg-arrow-hover" src="https://joaogeneroso.com/assets/arrow-upright-thin.svg">');
            // covers[i].addEventListener('touchstart', () => hoverText.innerHTML = 'Demonumenta <img class="svg-arrow-hover" src="https://joaogeneroso.com/assets/arrow-upright-thin.svg">');
            break;
        case 5:
            covers[i].addEventListener('mouseenter', ()=>hoverText.innerHTML = 'Demonumenta <img class="svg-arrow-hover" src="https://joaogeneroso.com/assets/arrow-upright-thin.svg">');
            // covers[i].addEventListener('touchstart', () => hoverText.innerHTML = 'Demonumenta <img class="svg-arrow-hover" src="https://joaogeneroso.com/assets/arrow-upright-thin.svg">');
            break;
        }
    }
}
