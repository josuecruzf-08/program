const fs = require('fs');
const path = './inventario.json';

function cargarDatos() {
    if (!fs.existsSync(path)) {
        fs.writeFileSync(path, JSON.stringify([], null, 2));
    }
    const data = fs.readFileSync(path, 'utf8');
    return JSON.parse(data);
}

module.exports = { cargarDatos };