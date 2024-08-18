import Spinner from '../components/spinner/Spinner';
import ErrorMessage from '../components/errorMessage/ErrorMessage';
import Skeleton from '../components/skeleton/Skeleton';

const setContent = (process, Component, data) => { // передаем процесс нужный и данные по персонажу(если нужно)
    // отталкиваемся от процесса и в зависимости от него генерируем разные кусочки интерфейса
    switch (process) {
        case 'waiting':
            return <Skeleton/>;
            break;
        case 'loading':
            return <Spinner/>;
            break;
        case 'confirmed':
            return <Component data={data}/>; // тут реакт будет пытаться отрендерить компонент с данными, которых еще не существует, они не были обработаны. Т.к. Сначала мы устанавливаем процесс confirmed, и потом передаем данные для обработки в marvelServices(из http.hook.js)
            // решение -> передать функцию по ручному изменению состояния в сам компонент
            break;
        case 'error':
            return <ErrorMessage/>;
            break;
        default: 
            throw new Error('Unexpected process state');
    }
}

export default setContent;