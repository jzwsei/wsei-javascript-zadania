var animals = [
    {
        type: "cat",
        breed: "persian",
        name: "Tiberius",
        health: [
            {
                date: "2012-03-03",
                visitType: "grafting"
            },
            {
                date: "2015-06-23",
                visitType: "bowel surgery"
            }
        ]
    },
    {
        type: "Guinea pig",
        breed: "The Rex",
        name: "Marko",
        health: [
            {
                date: "2015-12-04",
                visitType: "grafting"
            },
            {
                date: "2016-03-15",
                visitType: "ear cleaning"
            }
        ]
    }

]

availableFields = {
    type: {
        name: 'Gatunek',
        type: 'string'
    },
    breed: {
        name: 'Rasa',
        type: 'string'
    },
    name: {
        name: 'Imię',
        type: 'string'
    },
    health: {
        name: 'Informacje zdrowotne',
        type: 'health'
    }
};

function writeRecord(record) {
    let key, field, name, type, value;

    for (key in record) {
        field = availableFields[key];
        name = field ? field.name + ': ' : '';
        type = field ? field.type : '';

        switch (type) {
            case 'string':
                value = record[key];
                break;
            case 'health':
                value = 
        }
        value = type == 'array' ? record[key].join(', ') : record[key];

        console.log(name + value)
    }
}

writeRecord(movie);