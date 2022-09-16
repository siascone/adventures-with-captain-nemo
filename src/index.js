const Heading = require('./scripts/heading');

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    const heading = new Heading('Hey Programmers!!');
    console.log(heading.heading);
    root.innerHTML = heading.heading;
})