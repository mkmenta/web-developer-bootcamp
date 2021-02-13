const delayedColorChange = (newColor) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = newColor;
            resolve();
        }, 1000)
    })
}
delayedColorChange('red')
    .then(() => {
        return delayedColorChange('orange');
    }).then(() => {
        return delayedColorChange('yellow');
    }).then(() => {
        return delayedColorChange('green');
    }).then(() => {
        return delayedColorChange('blue');
    }).then(() => {
        return delayedColorChange('indigo');
    }).then(() => {
        return delayedColorChange('violet');
    })