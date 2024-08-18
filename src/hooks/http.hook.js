import {useState, useCallback} from "react";

export const useHttp = () => { // http - > так часто называют сущности которуе будут работать с запросами
    // const [loading, setLoading] = useState(false);
    // const [error, setError] = useState(null);
    const [process, setProcess] = useState('waiting'); // process - какой процесс будет внутри компонента. waiting - ожидание какого-то действия. обозначили текущее состояние

    // тут будут хуки которые обрабатывают загрузку сервера и ошибки сервера, поэтому логично обращение к серверу тоже вынести сюда
    const request = useCallback(async (url, method = 'GET', body = null, headers = {'Content-Type': 'application/json'}) => { // body null необходимо при get-запросах
        //setLoading(true);
        setProcess('loading'); // загружаем данные с сервера

        // этот метод будет только отправлять запрос на сервер, но не будет его обрабатывать. Поэтому для обработки ошибок будет следующая конструкция
        try {
            const response = await fetch(url, {method, body, headers}); // await ждет ответ от сервера. В response получаем promise 
            if (!response.ok) {
                throw new Error(`Could not fetch ${url}, status: ${response.status}`);
            }

            const data = await response.json(); // опять ждем когда сконвертируется

            // если данные загрузились(код дошел до этого участка)
            //setLoading(false);
            // setProcess('confirmed'); // запрос произведен - будем менять этот стейт в самой функции, т.к. иначе из-за асинхронности и еще не обработанности данных будет ошибка

            return data; // данные не трансформированные - чистые
        } catch(e) {
            //setLoading(false);
            //setError(e.message); // true
            setProcess('error');
            throw e;
        }

    }, []);

    const clearError = useCallback(() => {
        //setError(null);
        setProcess('loading');
    }, []);

    return {//loading, 
            //error, 
            request, 
            clearError, 
            process, 
            setProcess};
}