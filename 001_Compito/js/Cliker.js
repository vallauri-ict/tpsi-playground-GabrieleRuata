"use  strict"

let _punto=1;
let _click=false;
let _lblpunti,_textpunti;

window.onload = function () {
    _lblpunti = document.getElementById("lblpunti");

    _click=false;

    _textpunti=_lblpunti.innerHTML;
    _lblpunti.innerHTML=_punto+_textpunti;

    while (_click){
        _punto++;
        _lblpunti.innerHTML=_punto+_textpunti;
    }

}

function punto() {

        _punto++;
        _lblpunti.innerHTML=_punto+_textpunti;


}

function click() {
    _click=true;
    do {
            _punto++;
            _lblpunti.innerHTML=_punto+_textpunti;
    }while (_click=false);

    while (_click=false){
        _punto++;
        _lblpunti.innerHTML=_punto+_textpunti;
    }
}