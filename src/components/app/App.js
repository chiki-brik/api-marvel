import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import AppHeader from "../appHeader/AppHeader";
import Spinner from '../spinner/Spinner';
import { lazy, Suspense } from 'react'; // внутри использует callback-функцию, которая подгружает какие-то компоненты
// тут нельзя использовать catch для обработки ошибки загрузки компонента, поэтому необходим вспомогательный компонент Suspense - отвечает за ошибки импорта и отображение запасного содержимого
// import { MainPage, ComicsPage, Page404, SingleComicPage } from '../pages';
// import { MainPage, ComicsPage, SingleComicPage } from '../pages';
// ЕТО НЕ НАДА ПИСАТ import Page404 from '../pages/404'; // выносим его отдельно, потому что именно в файле 404 экспорт по умолчанию, в index.js в связке, чтобы потом деструктурировать - именованный экспорт. Потом по итогу вообще все страницы сделали lazy(но можно ток одну)
// ВСЕ ДИНАМИЧЕСКИЕ ИМПОРТЫ ДОЛЖНЫ ВСТАВЛЯТЬСЯ ПОСЛЕ СТАТИЧЕСКИХ, ИНАЧЕ МОЖЕТ ПРОИЗОЙТИ ОШИБКА!!!
const Page404 = lazy(() => import('../pages/404'));
const MainPage = lazy(() => import('../pages/MainPage'));
const ComicsPage = lazy(() => import('../pages/ComicsPage'));
const SingleComicPage = lazy(() => import('../pages/SingleComicPage/SingleComicPage'));
const SingleCharPage = lazy(() => import ('../pages/SingleCharPage/SingleCharPage'));
const UniSinglePage = lazy(() => import('../pages/UniSinglePage'));

const App = () => {

    return (
        <Router>
            <div className="app">
                <AppHeader />
                <main>
                    {/* Обычно всю маршрутную структуру оборачивают в suspense. fallback - обязательный атрибут-аргумент. Запасное содержимое, которое отображается пока грузится динамический импорт. Там может быть реакт-компонент и реакт-элемент*/}
                    <Suspense fallback={<Spinner/ >}>
                        <Routes>
                            <Route path="/" element={<MainPage/>}/> 
                            <Route path="/characters/:itemId" element={<UniSinglePage Component={SingleCharPage} dataType='char'/>}/>
                            {/* <Route path="/characters/:charId" element={<SingleCharPage/>}/> */}
                            <Route path="/comics" element={<ComicsPage/>}/>
                            {/* <Route path="/comics/:comicId" element={<SingleComicPage/>}/> */}
                            <Route path="/comics/:itemId" element={<UniSinglePage Component={SingleComicPage} dataType='comic'/>}/>
                            <Route path="*" element={<Page404/>}/>
                        </Routes>
                    </Suspense>
                </main>
            </div>
        </Router>
    )
}

export default App;