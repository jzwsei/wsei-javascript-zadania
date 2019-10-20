var movie = {
        director: "Peter Jackson",
        writers: [" J.R.R. Tolkien ", "Fran Walsh", "Philippa Boyens", "Peter Jackson"],
        stars: ["Elijah Wood", "Ian McKellen", "Orlando Bloom"],
        country: "New Zealand | USA",
        budget: "$93,000,000",
        imdbPoints: 8.8,
        year: 2001,
        time: "2h 58 min",
        category: " Adventure, Drama, Fantasy"
    },
    availableFields = {
        director: {
            name: 'Reżyser',
            type: 'string'
        },
        writers: {
            name: 'Scenariusz',
            type: 'array'
        },
        stars: {
            name: 'Obsada',
            type: 'array'
        },
        country: {
            name: 'Państwo',
            type: 'string'
        },
        budget: {
            name: 'Budżet',
            type: 'string'
        },
        imdbPoints: {
            name: 'Punkty w IMDB',
            type: 'string'
        },
        year: {
            name: 'Rok produckji',
            type: 'string'
        },
        time: {
            name: 'Czas trwania',
            type: 'string'
        },
        category: {
            name: 'Kategoria',
            type: 'string'
        },
    };

function writeRecord(record) {
    let key, field, name, type, value;

    for (key in record) {
        field = availableFields[key];
        name = field ? field.name + ': ' : '';
        type = field ? field.type : '';
        value = type == 'array' ? record[key].join(', ') : record[key];

        console.log(name + value)
    }
}

writeRecord(movie);