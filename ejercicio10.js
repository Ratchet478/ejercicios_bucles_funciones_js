const capitals = {
    Spain: 'Madrid',
    France: 'Paris',
    Italy: 'Rome',
    Germany: 'Berlin',
    Portugal: 'Lisbon',
    Poland: 'Warsaw',
    Greece: 'Athens',
    Austria: 'Vienna',
    Hungary: 'Budapest',
    Ireland: 'Dublin'
};

function getCapital(country) {
    let salida = '';
    if (!country in capitals) {
        salida = `El pais ${country} no esta en la lista`;
    } else {
        salida = capitals[country];

    }
    return salida;
}
console.log(getCapital('Spain'));
