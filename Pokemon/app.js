
const container = document.querySelector("#container");

const baseSrc = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'
for (let i = 1; i <= 151; i++) {
    // Create the div containing the image and pokemon number
    const pokemon = document.createElement('div');
    pokemon.classList.add('pokemon');

    // Number label
    const label = document.createElement('span');
    label.innerText = `#${i}`;

    // Image
    const newImg = document.createElement('img');
    newImg.src = `${baseSrc}${i}.png`;

    pokemon.appendChild(newImg);
    pokemon.appendChild(label);
    container.appendChild(pokemon);
}