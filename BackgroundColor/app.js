
const delayedColorChange = (newColor) => {
    // NOTE: we can't async-awayit the setTimeout function, we need to use a promise.
    // The only option would be to: await new Promise(resolve => setTimeout(resolve, 1000));
    // https://stackoverflow.com/questions/33289726/combination-of-async-function-await-settimeout/33292942#33292942
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = newColor;
            resolve();
        }, 1000)
    })
}

// The original version, using directly the Promise methods.
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

// NOTE: the await keyword needs to be used into an async function, so we need to write it into rainbow()
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