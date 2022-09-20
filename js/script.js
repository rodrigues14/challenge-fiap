// activating the mobile btn
const btnMobile = document.querySelector('#btn-menu');

function toggleMenu() {
    
    const nav = document.querySelector('#nav');

    nav.classList.toggle('active');

    let iconMenu = btnMobile.querySelector('i');
    if (nav.classList.contains('active')) {
        iconMenu.classList.add('icon-menu');
        iconMenu.classList.add('fa-solid');
        iconMenu.classList.add('fa-xmark');
    } else {
        iconMenu.classList.remove('icon-menu');
        iconMenu.classList.remove('fa-solid');
        iconMenu.classList.remove('fa-xmark');
        iconMenu.classList.add('icon-menu');
        iconMenu.classList.add('fa-solid');
        iconMenu.classList.add('fa-bars');
    }
}
btnMobile.addEventListener('click', toggleMenu);


// show hours and date
function dateAndHours() {

    const date = new Date();
    const day = String(date.getDate()).padStart(2, '0');
    const month = String((date.getMonth() + 1)).padStart(2, '0');
    const year = date.getFullYear();

    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');

    const areaDate = document.querySelector('#date');
    areaDate.innerHTML = `${day}/${month}/${year}`; 

    const areaHours = document.querySelector('#hours');
    areaHours.innerHTML = `${hours}:${minutes}:${seconds}`;

}
setInterval(dateAndHours);


// activating the main btns
function activeBtn() {
 
    let btnOptions = document.querySelectorAll('.btn-action');
    let message = document.querySelector('#msg');

    const text = [
        "Portão aberto com sucesso!",
        "Luz Acessa com sucesso!",
        "Câmeras de segurança ativadas!",
        `Detalhes da viagem: <br>
        18km percorrido <br>
        3L de combustivel <br>
        Destino: casa <br>
        Tempo: 15 min`,
        "Texto aleátorio",
        "Texto aleátorio",
    ]

    for (let i = 0; i < btnOptions.length; i++) {

        btnOptions[i].addEventListener('click', () => {

            setTimeout(() => {

                message.innerHTML = text[i];
                message.classList.remove('hide');

            }, 500);

            setTimeout(() => {
                message.classList.add('hide');
            }, 4500);
        });
    }
}
activeBtn();


// theme change
const chk = document.querySelector('#chk')

function loadTheme() {
    const darkMode = localStorage.getItem('dark');

    if(darkMode) {
        toggleTheme();
    }
}
loadTheme()

function toggleTheme() {
    document.body.classList.toggle('dark');
}

chk.addEventListener('change', () => {
    toggleTheme();

    // save or remove darkMode
    localStorage.removeItem("dark");

    if (document.body.classList.contains('dark')) {
        localStorage.setItem("dark", 1);
    }

} );


// random value for gasoline and house
function retornRandomValue() {

    const randomNumberHouse = Math.floor(Math.random() * 100);
    const randomNumberGas = Math.floor(Math.random() * 100);

    const distanceHouse = document.querySelector('#house-distance p');
    const valueGas = document.querySelector('#gasoline p');

    distanceHouse.innerHTML = `${randomNumberHouse}m`;
    valueGas.innerHTML = `${randomNumberGas}%`;

}
retornRandomValue();