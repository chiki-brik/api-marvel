// import Spinner from '../spinner/Spinner';
// import ErrorMessage from '../errorMessage/ErrorMessage';
// import AppBanner from "../appBanner/AppBanner";
// import { useParams } from 'react-router-dom';
// import useMarvelService from '../../services/MarvelService';
// import { useEffect, useState } from 'react';

// import './singleCharPage.scss';

// const SingleCharPage = () => {
//     const {charId} = useParams();
//     const [char, setChar] = useState(null);

//     const {loading, error, getCharacter, clearError} = useMarvelService();

//     const onCharLoaded = (char) => {
//         setChar(char);
//         //console.log(char);
//     }

//     const updateChar = () => {
//         clearError();
//         getCharacter(charId)
//             .then(onCharLoaded);
//     }

//     useEffect(() => {
//         updateChar();
//     }, [charId]);

//     //console.log(charId);
//     const errorMessage = error ?  <ErrorMessage/> : null;
//     const spinner = loading ? <Spinner/> : null;
//     const content = !(loading || error || !char) ? <View char={char}/> : null;

//     return (
//         <>
//             <AppBanner/>
//             {errorMessage}
//             {spinner}
//             {content}
//         </>    
//     )
// }

// const View = ({char}) => {
//     const {name, fulldescription, thumbnail} = char;

//     return (
//         <div className='single-char'>
//             <img src={thumbnail} alt={name} className='single-char__img'/>
//             <div className='single-char__descr'>
//                 <div className='single-char__descr-title'>
//                     {name}
//                 </div>
//                     {fulldescription}
//             </div>
//         </div>
//     )
// }

// export default SingleCharPage;

import './singleCharPage.scss';
import { Helmet } from 'react-helmet';

const SingleCharPage = ({data}) => {
    const {name, fulldescription, thumbnail} = data;

    return (
        <div className='single-char'>
            <Helmet>
                <meta
                    name="description"
                    content={`${name} comics book`}
                    />
                <title>{name}</title>
            </Helmet>
            <img src={thumbnail} alt={name} className='single-char__img'/>
            <div className='single-char__descr'>
                <div className='single-char__descr-title'>
                    {name}
                </div>
                    {fulldescription}
            </div>
        </div>
    )
}

export default SingleCharPage;
