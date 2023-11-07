const btn1 = document.getElementById("Spooky");
const btn2 = document.getElementById("dark-mode");
const btn3 = document.getElementById("scream-mode");
// const body = document.getElementById("body");


function changeMode(
    size,
    weight,
    transform,
    background,
    color
) {
    return function() {
    document.body.style.fontSize = size + 'px';
    document.body.style.fontWeight = weight;
    document.body.style.textTransform = transform;
    document.body.style.backgroundColor = background;
    document.body.style.color = color;
    };
}

function main() {
    const spooky = changeMode(
        9,
        'bold',
        'uppercase',
        'pink',
        'green'
    );
    const darkMode = changeMode(
        12,
        'bold',
        'capitalize',
        'black',
        'white'
    );
    const screamMode = changeMode(
        12,
        'normal',
        'lowercase',
        'white',
        'black'
    );
    
    btn1.addEventListener('click', spooky);
    
    btn2.addEventListener('click', darkMode);
    
    btn3.addEventListener('click', screamMode);
}
main();