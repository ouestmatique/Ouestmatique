function generateData(alpha) {

    let x = [];
    let y = [];

    for (let i = 0; i <= 5; i += 0.01) {

        x.push(i);

        y.push(
            Math.pow(i, alpha)
        );
    }

    return {x, y};
}

function updatePlot(alpha) {

    const data = generateData(alpha);

    Plotly.newPlot(

        'plot',

        [{
            x: data.x,
            y: data.y,
            mode: 'lines'
        }],

        {
            title: {
                text: 'f(x) = x<sup>' + alpha + '</sup>'
            },

            xaxis: {
                title: 'x'
            },

            yaxis: {
                title: 'f(x)',
                range: [0, 10]
            }
        }
    );
}

document$.subscribe(function () {

    const slider = document.getElementById('alphaSlider');

    const input = document.getElementById('alphaInput');

    if (!slider || !input) return;

    slider.addEventListener('input', function () {

        input.value = slider.value;

        updatePlot(
            parseFloat(slider.value)
        );
    });

    input.addEventListener('input', function () {

        slider.value = input.value;

        updatePlot(
            parseFloat(input.value)
        );
    });

    updatePlot(1);
});