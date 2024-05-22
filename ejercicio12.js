const mutants = [
    { name: 'Wolverine', power: 'regeneration' },
    { name: 'Magneto', power: 'magnetism' },
    { name: 'Professor X', power: 'telepathy' },
    { name: 'Jean Grey', power: 'telekinesis' },
    { name: 'Rogue', power: 'power absorption' },
    { name: 'Storm', power: 'weather manipulation' },
    { name: 'Mystique', power: 'shape-shifting' },
    { name: 'Beast', power: 'superhuman strength' },
    { name: 'Colossus', power: 'steel skin' },
    { name: 'Nightcrawler', power: 'teleportation' }
];

function findMutantByPower(mutants, power) {
    let salida = [];
    for (const mutant of mutants) {
        if (mutant.power === power) {
            salida.push(mutant);
        }
    }
    if (salida.length === 0) {
        salida = `No hay mutantes con poder ${power}`;
    }
    return salida;
}
console.log(findMutantByPower("Storm", "weather manipulation"));
