import { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import useMarvelService from '../../services/MarvelService';
import ErrorMessage from '../errorMessage/ErrorMessage';
import Spinner from '../spinner/Spinner';
import './comicsList.scss';

const setContent = (process, Component, newItemLoading) => { // передаем процесс нужный и данные по персонажу(если нужно)
    // отталкиваемся от процесса и в зависимости от него генерируем разные кусочки интерфейса
    switch (process) {
        case 'waiting':
            return <Spinner/>;
            break;
        case 'loading':
            return newItemLoading ? <Component/> : <Spinner/>;
            break;
        case 'confirmed':
            return <Component/>; 
            break;
        case 'error':
            return <ErrorMessage/>;
            break;
        default: 
            throw new Error('Unexpected process state');
    }
}

const ComicsList = () => {

    const [comicArr, setComicArr] = useState([]);
    const [offset, setOffset] = useState(0);
    const [newItemLoading, setnewItemLoading] = useState(false);
    const [comicEnded, setComicEnded] = useState(false);

    const {loading, error, getAllComics, process, setProcess} = useMarvelService();

    useEffect(() => { 
        onRequest(offset, true);
    }, []);

    const onRequest = (offset, initial) => {
        initial ? setnewItemLoading(false) : setnewItemLoading(true);

        getAllComics(offset)
            .then(onComicsLoaded)
            .then(() => setProcess('confirmed'));
    }

    const onComicsLoaded = (newComicArr) => {
        let ended = false;
        if (newComicArr.length < 8) ended = true;
        setComicArr(comicArr => [...comicArr, ...newComicArr]);

        setnewItemLoading(false);
        setOffset(offset => offset + 8);
        setComicEnded(ended);
    }

    const renderComics = () => {
        const items = comicArr.map((item, i) => {
            return (
                <li className="comics__item" key={i}>
                    <Link to={`/comics/${item.id}`}>
                        <img src={item.thumbnail} alt={item.name} className="comics__item-img"/>
                        <div className="comics__item-name">{item.name}</div>
                        <div className="comics__item-price">{item.price}</div>
                    </Link>
                </li>
            );
        });

        return (
            <ul className="comics__grid">
                {items}
            </ul>
        )
    }

    // const errorMessage = error ?  <ErrorMessage/> : null;
    // const spinner = loading && !newItemLoading ? <Spinner/> : null;

    // const elements = renderComics();
    //const elements = <div></div>;

    return (
        <div className="comics__list">
            {/* {errorMessage}
            {spinner} */}
            {setContent(process, () => renderComics(), newItemLoading)}
            {/* <ul className="comics__grid">
                {elements}
            </ul> */}
            <button 
                className="button button__main button__long"
                disabled={newItemLoading}
                style={{'display': comicEnded ? 'none' : 'block'}}
                onClick={() => onRequest(offset)}>
                <div className="inner">load more</div>
            </button>
        </div>
    )
}

export default ComicsList;