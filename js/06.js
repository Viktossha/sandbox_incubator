let a = {  //ссылка на объект
    name: 'It-incubator.com',
    protocol: 'https',
    maxStudentsCount: 10,
    isOnline: true,
    students: ['ivan', 'andrey', 'farid'],
    classroom: {
        teacher: {
            name: 'wew',
            age: 18
        }
    }
}

let b = a //ссылка на тот же самый объект
let c = {...a} //поверхнсотное копирование, т.е. копируются только примитивы, а все вложенные объъекты - это НЕ копии, это ссылки на те же самые объекты

//Делаем поверхностную копию объекта a :
//let copyA = {...a};
/*Вот из чего состоит наш объект копия copyA при поверхностном копировании:
let copyA = {
    name: 'It-kamasutra.com', // создалась копия, т.к.  это примитив (можем вносить изменения)
    protocol: 'https', // создалась копия, т.к.  это примитив (можем вносить изменения)
    maxStudentsCount: 10, // создалась копия, т.к.  это примитив (можем вносить изменения)
    isOnline: true, // создалась копия, т.к.  это примитив (можем вносить изменения)
    students: ['ivan', 'andrey', 'farid'], // создалась ССЫЛКА на этот же объект/массив ,а НЕ КОПИЯ ЭТОГО ОБЪЕКТА/МАССИВА. Просто ссылка!!! (НЕ можем вносить изменения)
    classroom: { // создалась ССЫЛКА на этот же объект classroom ,а НЕ КОПИЯ ЭТОГО ОБЪЕКТА. Просто ссылка!!! (НЕ можем вносить изменения)
        teacher: { // создалась ССЫЛКА на этот же объект, а НЕ КОПИЯ ЭТОГО ОБЪЕКТА. Просто ссылка!!! (НЕ можем вносить изменения)
            name: 'wew',
            age: 18
        }
    }}*/

//Делаем глубокую копию массива students
//copyA.students = [...a.students]; // только сейчас создали КОПИЮ МАССИВА students. Теперь это копия массива, а не ссылка (можем вносить изменения)
//делаем глубокую копию объекта classroom
//copyA.classroom = {...a.classroom}; // только сейчас создали КОПИЮ ОБЪЕКТА classroom. Теперь это копия объекта, а не ссылка (можем вносить изменения)
//делаем глубокую копию объекта teacher
//copyA.classroom.teacher = {...a.classroom.teacher} // только сейчас создали КОПИЮ ОБЪЕКТА teacher. Теперь это копия объекта, а не ссылка (можем вносить изменения)

// Запись в одну строку
//let copyA = {...a, students:[...a.students], classroom: {...a.classroom, teacher: {...a.classroom.teacher}}}

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Ждём ввод одной строки с четырьмя числами
rl.on('line', (line) => {
    const [A, B, C, D] = line.trim().split(' ').map(Number);

    let cost;
    if (D <= B) {
        cost = A;
    } else {
        cost = A + (D - B) * C;
    }

    console.log(cost);
    rl.close();
});
















}
