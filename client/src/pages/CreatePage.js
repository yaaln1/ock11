import React, { useState, useEffect, useContext } from 'react'
import { useHttp } from '../hooks/http.hook'
import { AuthContext } from '../context/Auth.context'
import {useHistory} from 'react-router-dom'
import 'materialize-css'


export const CreatePage = () => {
    const history = useHistory()
    const auth = useContext(AuthContext)
    const {request} = useHttp()
    const [link, setLink] = useState('')

    useEffect(() => {
        window.M.updateTextFields()
    })

    // const pressHandler = async (event) => {
    //     if (event.key === 'Enter') {
    //         try {
    //             // создаем новую ссылку
    //             const data = await request('/api/link/generate', 'POST', {from: link}, {
    //                 Authorization: `Bearer ${auth.token}`
    //             })
    //             // Делаем редирект на детальную страницу по id созданной ссылки
    //             history.push(`/detail/${data.link._id}`)
    //         } catch (e) {

    //         }
    //     }
    // }

    return (
        <div className="row">
        <h2>Создать заявку</h2>
            <div className="col s8 offset-s2 createpage">
            <form className="col s12">
                <label>Выберете причину или укажите свою</label>
                    <select className="browser-default">
                        <option value="" disabled selected>Выберете причину вызова</option>
                        <option value="1">Заправка картриджа принтера</option>
                        <option value="2">Проблемы с оборудованием</option>
                        <option value="3">Проблемы в программе</option>
                        <option value="4">Другое...</option>
                    </select>
                <br />
                <div className="input-field">
                    <label htmlFor="textarea1">Опишите проблему</label>
                    <textarea id="textarea1" className="materialize-textarea"></textarea>
                </div>
                <br />
                <label>Отделение</label>
                    <select className="browser-default">
                        <option value="" disabled selected>Выберете отделение</option>
                        <option value="1">Заправка картриджа принтера</option>
                        <option value="2">Проблемы с оборудованием</option>
                        <option value="3">Проблемы в программе</option>
                        <option value="4">Другое...</option>
                </select>
                <br />
                <div className="input-field"> 
                <label htmlFor="cabinetNumber">№ кабинета</label>
                        <input 
                            id="cabinetNumber" 
                            type="text" 
                            autoComplete="off"
                            maxLength="3"                          
                            placeholder="Введите номер кабинета"
                            
                        />   
                </div>
                <br />
                <div className="input-field"> 
                <label htmlFor="link">Фамилия и имя заявителя</label>
                        <input 
                            id="link" 
                            type="text" 
                            autoComplete="off"  
                            maxLength="50"                          
                            placeholder="Введите фамилию и имя"
                            
                        />   
                </div>
                
                

                </form>
            </div>
        </div>
    )
}