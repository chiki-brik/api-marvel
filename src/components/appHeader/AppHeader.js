// компонент со ссылками на страницы
import {Link, NavLink, useLocation} from 'react-router-dom';
// Link - по факту ссылка. Если открыть в devTools элемент -> там будет просто тег а. Но так как это компонент, то внутри себя он будет содержать некоторое поведение. Когда мы кликаем на Link, компонент Router начинает искать выбранный путь - Route.
// NavLink - делает то же самое, что и обычный Link. Отличие в том, что у него есть возможность стилизации активной ссылки. Можно использовать атрибус activeClassName - если есть уже css-класс для активной ссылки, иначе прописываем стили прям в атрибуте

import './appHeader.scss';

const AppHeader = () => {

    const {pathname} = useLocation();
    const styledLink = pathname.includes('/characters');

    return (
        <header className="app__header">
            <h1 className="app__title">
                <Link to="/">
                    <span>Marvel</span> information portal
                </Link>
            </h1>
            <nav className="app__menu">
                <ul>
                {/* exact(end) тут нужно добавить чтобы классы не применялись как по композиции, из-за коллизии названия ссылок! */}
                    <li><NavLink 
                            //end 
                            //isActive = {() => ['/characters', "/"].includes(pathname)}
                            style={({ isActive }) => ({color: isActive || styledLink ? '#9f0013' : 'inherit'})}
                            //to={!location.pathname.includes('/characters/') ? "/" : "/characters"}
                            to="/"
                            >Characters</NavLink></li>
                    /
                    <li><NavLink 
                            //end 
                            style={({ isActive }) => ({color: isActive ? '#9f0013' : 'inherit'})}
                            to="/comics">Comics</NavLink></li>
                </ul>
            </nav>
        </header>
    )
}

export default AppHeader;