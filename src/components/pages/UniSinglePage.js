import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import AppBanner from "../appBanner/AppBanner";
import useMarvelService from '../../services/MarvelService';
import setContent from '../../utils/setContent';

// Хотелось бы вынести функцию по загрузке данных как отдельный аргумент (getComics + getCharacter)
// Но тогда мы потеряем связь со стэйтами загрузки и ошибки
// А если вынесем их все в App.js - то они будут одни на все страницы!!!

const UniSinglePage = ({Component, dataType}) => {
    const {itemId} = useParams();
    const [data, setData] = useState(null);

    const {getCharacter, getComics, clearError, process, setProcess} = useMarvelService();

    useEffect(() => {
        updateItem();
    }, [itemId]);

    const updateItem = () => {
        clearError();
        if (dataType === 'char') {
            getCharacter(itemId)
                .then(onItemLoaded)
                .then(() => setProcess('confirmed'));
        } else if (dataType === 'comic') {
            getComics(itemId)
                .then(onItemLoaded)
                .then(() => setProcess('confirmed'));
        }
    }

    const onItemLoaded = (data) => {
        setData(data);
    }

    // const errorMessage = error ?  <ErrorMessage/> : null;
    // const spinner = loading ? <Spinner/> : null;
    // const content = !(loading || error || !item) ? <Component item={item}/> : null;

    return (
        <>
            <AppBanner/>
            {setContent(process, Component, data)}
        </>    
    )
}

export default UniSinglePage;