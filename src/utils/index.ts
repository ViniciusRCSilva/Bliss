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
    'Henry+Ford',
    'Sigmund+Freud',
    'Benjamin+Franklin',
    'Victor+Hugo',
    'Da+Vinci',
]

const authorListLength = authorList.length

const randomAuthor = authorList[randomInt(0, authorListLength)]

export {
    randomInt,
    randomAuthor
}