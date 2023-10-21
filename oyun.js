let ad = prompt('Adınızı daxil edin:')
let user = prompt('Rəqəmi daxil edin:')
let number = Math.floor(Math.random() * 6);
let netice;

if (user == number) {
    netice = ` ${ad}, sizi təbrik edirik. Siz qalib gəldiniz. `
}
else if (user > 6) {
    netice = ` ${ad}, siz 0-dan 5-ə qədər rəqəm daxil etməlisiniz.`
}
else if (user !== number) {
    netice = ` ${ad}, siz ${user} daxil etdiniz, uduş rəqəmi isə ${number} idi. Siz uduzdunuz.`
}
document.getElementById('oyun').innerHTML = netice;

