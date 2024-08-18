import { useState, useEffect, useRef, useMemo } from 'react';
import PropTypes from 'prop-types';
import {CSSTransition, TransitionGroup} from 'react-transition-group';

import useMarvelService from '../../services/MarvelService';
import ErrorMessage from '../errorMessage/ErrorMessage';
import Spinner from '../spinner/Spinner';

import './charList.scss';

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

const CharList = (props) => {

    const [charArr, setCharArr] = useState([]);
    // const [loading, setLoading] = useState(true);
    // const [error, setError] = useState(false);
    const [newItemLoading, setnewItemLoading] = useState(false);
    const [offset, setOffset] = useState(210);
    const [charEnded, setCharEnded] = useState(false);

    const {getAllCharacters, process, setProcess} = useMarvelService();

    useEffect(() => { // эмулируем componentDidMount. Запускается уже после рендера
        // Т.к. useEffect используется уже после рендера то мы можем использовать onRequest выше чем эта функция объявлена
        onRequest(offset, true); // весь код выше заменили - только не передали offset, так как он не нужен
    }, []);

    const onRequest = (offset, initial) => { // метод, который вызывается при нажатии на кнопку дозагрузки персонажей
        //onCharListLoading();
        initial ? setnewItemLoading(false) : setnewItemLoading(true);
        //setnewItemLoading(true);
        //marvelService
        getAllCharacters(offset)
            .then(onCharsLoaded)
            .then(() => setProcess('confirmed'));
    }

    const onCharsLoaded = (newCharArr) => { 

        let ended = false; // проверяем, не закончились ли персонажи для дозагрузки
        if (newCharArr.length < 9) {
            ended = true;
        }

        setCharArr(charArr =>[...charArr, ...newCharArr]); // старых, уже загруженных персонажей оставляем - новых добавляем
        //setLoading(false);
        setnewItemLoading(false);
        setOffset(offset => offset + 9);
        setCharEnded(ended);

    }

    // работа со ссылками
    const refsArray = useRef([]);

    //console.log('charList');

    const onCharSelect = (itemID, i) => {
        props.onCharSelected(itemID);

        refsArray.current.forEach(item => {
            item.classList.remove('char__item_selected');
        });

        refsArray.current[i].classList.add('char__item_selected');
        refsArray.current[i].focus(); 
        
    }

    const renderElements = () => {
        console.log('render');
        const items = charArr.map((item, i) => {
            const {id, ...ItemProps} = item;
            const isStubImg = ItemProps.thumbnail.indexOf('image_not_available.jpg') > 0;

            return(
                <CSSTransition key={id} timeout={500} classNames={"char__item"}>
                    <li 
                    ref={el => refsArray.current[i] = el} 
                    className="char__item" 
                    key={id} 
                    tabIndex={10} 
                    onClick={() => onCharSelect(item.id, i)}
                    onKeyDown={(e) => { 
                        if (e.key === ' ' || e.key === 'Enter') {
                            e.preventDefault(); 
                            onCharSelect(item.id, i);
                        }
                    }}>
                        <img src={ItemProps.thumbnail} alt={ItemProps.name} style={isStubImg ? {objectFit: "unset"} : {objectFit: "cover"}}/>
                        <div className="char__name">{ItemProps.name}</div>
                    </li>
                </CSSTransition>
            )
        });

        return (
            <ul className="char__grid">
            <TransitionGroup component={null}>
                {items}
            </TransitionGroup>
        </ul>
        )
    }

    const elements = useMemo(() => {
        return setContent(process, () => renderElements(), newItemLoading); // usememo запоминает результат работы этой функции
    }, [process]);

    return (
        <div className="char__list">
            {elements}
            <button 
                className="button button__main button__long"
                disabled={newItemLoading}
                style={{'display': charEnded ? 'none' : 'block'}}
                onClick={() => onRequest(offset)}> 
                {/* у onClick стрелочная функция, потому что тут нужно передать аргумент */}
                {/*style прописали, если закончились данные для отображения - то кнопку убираем*/}
                <div className="inner">load more</div>
            </button>
        </div>
    )
}

CharList.propTypes = {
    onCharSelected: PropTypes.func.isRequired
}

export default CharList;