const colorGroups = [
    ['#69C', 'rgb(255, 125, 197)'],
    ['rgb(238, 201, 148)', 'rgb(163, 145, 159)'],
    ['rgb(182, 234, 185)', 'rgb(118, 208, 170)'],
    ['rgb(221, 76, 109)', 'rgb(228, 187, 115)'],
];

const currentColor = colorGroups[random(0, colorGroups.length - 1)];
document.querySelector('.app').style.backgroundImage = `linear-gradient(
    45deg,
    ${currentColor[0]},
    ${currentColor[1]}
)`;
