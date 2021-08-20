import React, { useContext, useEffect } from 'react'
import {NavLink, useHistory} from 'react-router-dom'
import { AuthContext } from '../context/Auth.context'
import M from 'materialize-css'

export const Navbar = () => {
    const history = useHistory()
    const auth = useContext(AuthContext)
    const logoutHandler = (event) => {
        event.preventDefault()
        auth.logout()
        history.push('/')
    }

    useEffect(() => {
        let dropdowns = document.querySelectorAll(".dropdown-trigger");
        let options = {
          inDuration: 300,
          outDuration: 225
        };
        M.Dropdown.init(dropdowns, options);
    
        // eslint-disable-next-line
      }, []);

    

    return (
        <>
        <ul id="dropdown1" className="dropdown-content">
        <li><a href="#!">one</a></li>
        <li><a href="#!">two</a></li>
        <li className="divider"></li>
        <li><a href="#!">three</a></li>
        </ul>
        <nav>
            <div className="nav-wrapper blue darken-1 navbar">
            <span href="/" className="brand-logo">ИТ отдел ОЦК</span>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><NavLink to="/">Главная</NavLink></li>
                <li><NavLink to="/create">Создать</NavLink></li>
                <li><NavLink to ="/links">Ссылки</NavLink></li>
                <li><a className="dropdown-trigger" href="#!" data-target="dropdown1" >Dropdown<i className="material-icons right">arrow_drop_down</i></a></li>
                {(auth.isAuthenticated && <li><a href="/" onClick={logoutHandler}>Exit</a></li>) || <li><NavLink to ="/login"><i className="material-icons">person</i></NavLink></li>}  
            </ul>
            </div>
        </nav>

        </>
    )
}