function randomInt(min: number, max: number) {
    return Math.floor(Math.random() * (max - min) + min);
}

const authorList = [
    'Elon+Musk',
    'Jesus+Cristo',
    'Mahatma+Gandhi',
    'Luther+King',
    'Nelson+Mandela',
    'Fernando+Pessoa',
    'Clarice+Lispector',
    'Albert+Einstein',
    'Henry+Ford',
    'Sigmund+Freud',
    'Benjamin+Franklin',
    'Victor+Hugo',
    'Da+Vinci',
    'Vinicius+Moraes',
]

export {
    randomInt,
    authorList
}