const names = prompt("Input names").split(", ");

let k = document.querySelector("#katya"),
    v = document.querySelector("#vasya"),
    m = document.querySelector("#manya"),
    t = document.querySelector("#tanya");

// let obj = {
//     k,
//     v,
//     m,
//     t
// };

function showCard( names ) {

    for (let i = 0; i < names.length; i++) {

        if ( names[i] === "Таня" ) {
            t.style.display = 'block';
        }

        if ( names[i] === "Катя" ) {
            k.style.display = 'block';
        }

        if ( names[i] === "Вася" ) {
            v.style.display = 'block';
        }

        if ( names[i] === "Маня" ) {
            m.style.display = 'block';
        }
    }

}

showCard(names);

let activeElement;

let offSetX = 0,
    offSetY = 0;

let mDown = ( event ) => {
    activeElement = event.target;
    offSetX = event.offsetX;
    offSetY = event.offsetY;
};

let mUp = ( event ) => activeElement = null;

let mMove = ( event ) => {

    if ( activeElement ) {
        activeElement.style.top = (event.clientY - offSetY) + 'px';
        activeElement.style.left = (event.clientX - offSetX) + 'px';
    }

};


document.addEventListener('click', function( event ) {
    event.target.addEventListener('mousedown', mDown);
    event.target.addEventListener('mouseup', mUp);
    document.addEventListener('mousemove', mMove);
});

