// когда мы что-то экспортируем из файла, то на самом деле мы экспортируем объект
// тут у нас именованный экспорт (второй вариант это экспорт по умолчанию, когда default). Наверное потому что имя должно быть обязательно, чтобы как метод объекта можно было бы вызывать
// на выходе именованного экспорта на выходе создается объект со свойством logger, которое содержит нижеописанную функцию
// а если мы экспортируем что-то по-умолчанию, то получается объект только с 1м свойством, которое называется default и туда все помещается
export default function logger() {
    console.log('hilow');
}

export function secondLog() {
    console.log('2!!!!!!!!!!!!!!!!!!!!!!!!!');
}