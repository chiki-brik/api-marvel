// import { useState } from "react";
// import {useFormik} from "formik";
// import {Link} from 'react-router-dom';
// import useMarvelService from "../../services/MarvelService";

// import "./form.scss";

// const SearchForm = () => {
//     const [style, setStyle] = useState('none');
//     const [error, setError] = useState(false);
//     const [notFound, setNotFound] = useState(false);
//     const [charId, setCharId] = useState(null);

//     const {getCharacterByName} = useMarvelService();

//     const validate = (values) => {
//         const errors = {};
//         if (!values.charName) {
//             errors.charName = 'This field is required';
//             setError(true);
//             setNotFound(false);
//         } 
    
//         return errors;
//     }

//     const onCharSelected = (char) => {
//         //console.log(char);
//         //console.log(char.id); 
//         setCharId(char.id);
//     }

//     const onSubmit = (values) => {
//         //console.log(values.charName);
//         getCharacterByName(values.charName)
//             .then(onCharSelected)
//             .then(() => {
//                 setStyle("flex");
//                 setNotFound(false);
//                 setError(false); 
//             })
//             .catch(() => {
//                 setNotFound(true);
//                 setError(false);
//                 setStyle("none");
//             });
//         //console.log(JSON.stringify(values, null, 2));
//     }

//     const formik = useFormik({
//         onSubmit,
//         validate,
//         initialValues: {
//             charName: ''
//         }
//     });

//     return (
//         <form className="search-form" onSubmit={formik.handleSubmit}>
//             <div className="search-form__text"> Or find a character by name:</div>
//             <input
//                 id="charName"
//                 name="charName"
//                 className="search-form__input"
//                 value={formik.values.charName}
//                 onBlur={formik.handleBlur}
//                 onChange={e => {
//                     formik.handleChange(e);
//                     setError(false);
//                     setStyle("none");
//                     setNotFound(false);
//                 }}
//                 type="text"/>
//             <button type="submit" href="#" className="button button__main search-form__btn-search">
//                 <div className="inner">Find</div>
//             </button>
//             {formik.errors.charName && formik.touched.charName ?
//                 <div className="search-form__error">
//                     {formik.errors.charName}
//                 </div> : null
//             }    
//             <div style={{display: `${style}`}} className="search-form__success">
//                 <div href="#" className="search-form__success-text">
//                     There is {formik.values.charName.toUpperCase()}! Visit page?
//                 </div>

//                 <Link to={`/characters/${charId}`} className="button button__secondary search-form__success-btn">
//                     <div className="inner">to page</div>
//                 </Link>
//             </div>        
//             {notFound ? <div className="search-form__error">The character was not found. Check the name and try again</div> : null}
//         </form>
//     )
// }

// export default SearchForm;

import {useState} from 'react';
import { Formik, Form, Field, ErrorMessage as FormikErrorMessage } from 'formik';
import * as Yup from 'yup';
import {Link} from 'react-router-dom';

import useMarvelService from '../../services/MarvelService';
import ErrorMessage from '../errorMessage/ErrorMessage';

import './form.scss';

const setContent = (process, Component) => { // передаем процесс нужный и данные по персонажу(если нужно)
    // отталкиваемся от процесса и в зависимости от него генерируем разные кусочки интерфейса
    switch (process) {
        case 'waiting':
            return null;
            break;
        case 'loading':
            return null;
            break;
        case 'confirmed':
            return <Component/>; 
            break;
        case 'error':
            return <div className="char__search-critical-error"><ErrorMessage /></div>;
            break;
        default: 
            throw new Error('Unexpected process state');
    }
}

const CharSearchForm = () => {
    const [char, setChar] = useState(null);
    const {getCharacterByName, clearError, process, setProcess} = useMarvelService();

    const onCharLoaded = (char) => {
        setChar(char);
    }

    const updateChar = (name) => {
        clearError();

        getCharacterByName(name)
            .then(onCharLoaded)
            .then(() => setProcess('confirmed'));
    }

    //const errorMessage = error ? <div className="char__search-critical-error"><ErrorMessage /></div> : null;
    const results = () => {
        return (
            !char ? null : char.length > 0 ?
                    <div className="char__search-wrapper">
                        <div className="char__search-success">There is! Visit {char[0].name} page?</div>
                        <Link to={`/characters/${char[0].id}`} className="button button__secondary">
                            <div className="inner">To page</div>
                        </Link>
                    </div> : 
                    <div className="char__search-error">
                        The character was not found. Check the name and try again
                    </div>
        )
    }

    return (
        <div className="char__search-form">
            <Formik
                initialValues = {{
                    charName: ''
                }}
                validationSchema = {Yup.object({
                    charName: Yup.string().required('This field is required')
                })}
                onSubmit = { ({charName}) => {
                    updateChar(charName);
                }}
            >
                <Form>
                    <label className="char__search-label" htmlFor="charName">Or find a character by name:</label>
                    <div className="char__search-wrapper">
                        <Field 
                            id="charName" 
                            name='charName' 
                            type='text' 
                            placeholder="Enter name"/>
                        <button 
                            type='submit' 
                            className="button button__main"
                            disabled={process === 'loading'}>
                            <div className="inner">find</div>
                        </button>
                    </div>
                    <FormikErrorMessage component="div" className="char__search-error" name="charName" />
                </Form>
            </Formik>
            {setContent(process, () => results())}
            {/* {results}
            {errorMessage} */}
        </div>
    )
}

export default CharSearchForm;