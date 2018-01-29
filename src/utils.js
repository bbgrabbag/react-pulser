export let setInitialValues = (config) => {
    let output = [];
    for (let i = 0; i < config.barQuant; i++) {
        let initialHeight = Math.floor(Math.random() * (config.maxHeight - config.minHeight)) + config.minHeight;
        output.push({
            height: initialHeight,
            direction: initialHeight < (config.maxHeight + config.minHeight) / 2,
            width: (100 / config.barQuant).toFixed(1),
            i: i
        });
    }
    return output;
}