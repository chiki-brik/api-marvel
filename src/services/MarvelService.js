import { useHttp } from "../hooks/http.hook";
import { _apiKey } from "../keys/apiKey";

const useMarvelService = () => { // это тоже кастомный хук для использования сервиса
    const {//loading, 
            request, 
            //error, 
            clearError, 
            process, 
            setProcess} = useHttp();

    const _apiBase = 'https://gateway.marvel.com:443/v1/public/';
    const _baseOffset = 210; // базовый отступ для персонажей(чтобы не с самого первого персонажа(типо там не оч интересные для демонстрации))
    const _baseOffsetComics = 0;

    const getAllCharacters = async (offset = _baseOffset) => { // значение для offset по-умолчанию, если туда ничего не передается
        const res = await request(`${_apiBase}characters?limit=9&offset=${offset}&${_apiKey}`); // getResource -> request - то же самое, только тут мы еще работаем с состоянием
        return res.data.results.map(_transformCharacter); // передаем callback-функцию
    }

    const getAllComics = async (offset = _baseOffsetComics) => {
        const res = await request(`${_apiBase}comics?orderBy=issueNumber&limit=8&offset=${offset}&${_apiKey}`);
        return res.data.results.map(_transformComic);
    }

    const getComics = async (id) => {
        const res = await request(`${_apiBase}comics/${id}?${_apiKey}`);
		return _transformComic(res.data.results[0]);
    }

    const getCharacter = async (id) => {
        const res = await request(`${_apiBase}characters/${id}?${_apiKey}`);

        return _transformCharacter(res.data.results[0]);
    }
    
    // Вариант модификации готового метода для поиска по имени.
	// Вызывать его можно вот так: getAllCharacters(null, name)

	// const getAllCharacters = async (offset = _baseOffset, name = '') => {
	//     const res = await request(`${_apiBase}characters?limit=9&offset=${offset}${name ? `&name=${name}` : '' }&${_apiKey}`);
	//     return res.data.results.map(_transformCharacter);
	// }

	// Или можно создать отдельный метод для поиска по имени

    const getCharacterByName = async (name) => {
        const res = await request(`${_apiBase}characters?name=${name}&${_apiKey}`);
        // в результате может быть несколько, возьмем значение иначе
        // return _transformCharacter(res.data.results[0]);
        return res.data.results.map(_transformCharacter);
    }

    const _transformCharacter = (char) => {
        let descr = char.description.length === 0 ? 'Doesn`t have any description yet' : char.description;
        if (descr.length > 210) {
            descr = descr.slice(0, 210) + '...';
        }
        return {
            id: char.id,
            name: char.name,
            description: descr, //char.description,
            fulldescription: char.description.length === 0 ? 'Doesn`t have any description yet' : char.description,
            thumbnail: char.thumbnail.path + '.' + char.thumbnail.extension,
            homepage: char.url,
            wiki: char.urls[1].url,
            comics: char.comics.items
        }
    }

    const _transformComic = (comic) => {
        return {
            id: comic.id,
            name: comic.title,
            description: comic.description || "There is no description",
            pageCount: comic.pageCount
				? `${comic.pageCount} p.`
				: "No information about the number of pages",
            language: comic.textObjects[0]?.language || "en-us",
            price: comic.prices[0].price ? `${comic.prices[0].price}$` : "not available",
            thumbnail: comic.thumbnail.path + '.' + comic.thumbnail.extension
        }
    }

    return {//loading, 
            //error, 
            process, 
            setProcess,
            getAllCharacters, 
            getCharacter, 
            clearError,
            getAllComics, 
            getComics, 
            getCharacterByName}
}

export default useMarvelService;