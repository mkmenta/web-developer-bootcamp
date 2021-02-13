const delayedColorChange = (newColor) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = newColor;
            resolve();
        }, 1000)
    })
}

// delayedColorChange('red')
//     .then(() => {
//         return delayedColorChange('orange');
//     }).then(() => {
//         return delayedColorChange('yellow');
//     }).then(() => {
//         return delayedColorChange('green');
//     }).then(() => {
//         return delayedColorChange('blue');
//     }).then(() => {
//         return delayedColorChange('indigo');
//     }).then(() => {
//         return delayedColorChange('violet');
//     })

async function rainbow() {
    await delayedColorChange('red');
    await delayedColorChange('orange');
    await delayedColorChange('yellow');
    await delayedColorChange('green');
    await delayedColorChange('blue');
    await delayedColorChange('indigo');
    await delayedColorChange('violet');
}

rainbow().then(() => console.log("Rainbow done!"))