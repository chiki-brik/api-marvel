import { useEffect, useState } from 'react';
import useMarvelService from '../../services/MarvelService';
import setContent from '../../utils/setContent';

import './randomChar.scss';
import mjolnir from '../../resources/img/mjolnir.png';

const RandomChar = () => {
    const [char, setChar] = useState({});
    // const [loading, setLoading] = useState(true);
    // const [error, setError] = useState(false);

    const {getCharacter, clearError, process, setProcess} = useMarvelService(); 

    useEffect(() => {
        updateChar();
        const timerId = setInterval(updateChar, 60000); // каждые 60 сек подгружаем нового рандомыча

        return () => { // аналог componentWillUnmount
            clearInterval(timerId)
        } 
    }, []);

    const onCharLoaded = (char) => {
        setChar(char);
        //setLoading(false);
    }

    const updateChar = () => { // используем для метода стрелочную функцию, чтобы не терять контекст класса
        clearError(); // если в прошлом запросе появилась ошибка и не очистить -> следующий запрос не сработает
        const id = Math.floor(Math.random() * (1011400 - 1011000) + 1011000);
        //onCharLoading();
        getCharacter(id)
            .then(onCharLoaded)
            .then(() => setProcess('confirmed')); // завершение загрузки инфо с api
            //.catch(onError); // если ошибка при загрузке инфо
    }

    // const errorMessage = error ?  <ErrorMessage/> : null;
    // const spinner = loading ? <Spinner/> : null;
    // const content = !(loading || error) ? <View char={char}/> : null;// контент помещается тогда, когда нет загрузки и нет ошибки

    return (
        <div className="randomchar">
            {setContent(process, View, char)}
            <div className="randomchar__static">
                <p className="randomchar__title">
                    Random character for today!<br />
                    Do you want to get to know him better?
                </p>
                <p className="randomchar__title">
                    Or choose another one
                </p>
                <button className="button button__main" onClick={updateChar}>
                    <div className="inner">try it</div>
                </button>
                <img src={mjolnir} alt="mjolnir" className="randomchar__decoration" />
            </div>
        </div>
    )
}

const View = ({data}) => {
    const {name, description, thumbnail, homepage, wiki} = data;
    // console.log(thumbnail, name, description, homepage, wiki);
    // console.log(char);

    // два раза параша загружается, хотя нет strictMode
    let isStubImg = true;//thumbnail.indexOf('image_not_available.jpg') > 0;
    if (thumbnail) {
        isStubImg = thumbnail.indexOf('image_not_available.jpg') > 0;
        //console.log(isStubImg);
    }

    return (
        <div className="randomchar__block">
            <img src={thumbnail} alt="Random character" className="randomchar__img" style={isStubImg ? {objectFit: "contain"} : {objectFit: "cover"}}/>
            <div className="randomchar__info">
                <p className="randomchar__name">{name}</p>
                <p className="randomchar__descr">
                    {description}
                </p>
                <div className="randomchar__btns">
                    <a href={homepage} className="button button__main">
                        <div className="inner">homepage</div>
                    </a>
                    <a href={wiki} className="button button__secondary">
                        <div className="inner">Wiki</div>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default RandomChar;