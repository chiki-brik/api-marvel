import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import setContent from '../../utils/setContent';
import useMarvelService from '../../services/MarvelService';
import './charInfo.scss';

const CharInfo = (props) => {

    const [char, setChar] = useState(null);

    const {getCharacter, clearError, process, setProcess} = useMarvelService(); // будет запускаться хук, который будет генерировать процесс, который идет в этом конкретном компоненте

    const onCharLoaded = (char) => {
        // как только загружаются данные - спинер убираем
        setChar(char);
    }

    const updateChar = () => {
        const {charId} = props;
        if (!charId) { // изначально, когда никто не выбран в charid null
            return;
        }

        clearError();
        getCharacter(charId)
            .then(onCharLoaded)
            .then(() => setProcess('confirmed')); // чтобы избавиться от бага из-за асинхронности в setContent
    }

    useEffect(() => {
        updateChar();
    }, [props.charId]);

    // const skeleton = char || loading || error ? null : <Skeleton/>; 
    // const errorMessage = error ?  <ErrorMessage/> : null; 
    // const spinner = loading ? <Spinner/> : null; 
    // const content = !(loading || error || !char) ? <View char={char}/> : null; 

    return (
        <div className="char__info">
            {/* {skeleton}
            {errorMessage}
            {spinner}
            {content} */}
            {setContent(process, View, char)}
        </div>
    )
}

const View = ({data}) => {
    const {name, description, thumbnail, homepage, wiki, comics} = data;

    let comicsItems;
    if (comics.length === 0) {
        comicsItems = 'No comics yet';
    } else {
        comicsItems = comics.slice(0, 10).map((item, i) => {
            //http://gateway.marvel.com/v1/public/comics/56021
            //console.log(item.resourceURI.slice(43));
            const comicId = `/comics/${item.resourceURI.slice(43)}`;
                        //if (i > 9) return; // но все равно проходит по всем элементам
                        return (
                            <li className="char__comics-item" key={comicId}>
                                <Link to={comicId}>{item.name}</Link>
                            </li>
                        )
                    });
    }

    const isStubImg = thumbnail.indexOf('image_not_available.jpg') > 0;

    return (
        <>
            <div className="char__basics">
                <img src={thumbnail} alt={name} style={isStubImg ? {objectFit: "unset"} : {objectFit: "cover"}}/>
                <div>
                    <div className="char__info-name">{name}</div>
                    <div className="char__btns">
                        <a href={homepage} className="button button__main">
                            <div className="inner">homepage</div>
                        </a>
                        <a href={wiki} className="button button__secondary">
                            <div className="inner">Wiki</div>
                        </a>
                    </div>
                </div>
            </div>
            <div className="char__descr">
                {description}
            </div>
            <div className="char__comics">Comics:</div>
            <ul className="char__comics-list">
                {comicsItems}
            </ul>
        </>
    )
}

CharInfo.propTypes = { // charId - пропс, который приходит в этот компонент
    charId: PropTypes.number // пропс charId обязательно должен быть числом(number). Если все кул - консоль пустая. Если нет (поменяем на string) - предупреждение в консоли
}

export default CharInfo;