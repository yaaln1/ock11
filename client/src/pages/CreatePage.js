import React, { useState, useEffect, useContext } from 'react'
// import { useHttp } from '../hooks/http.hook'
// import { AuthContext } from '../context/Auth.context'
import {useHistory} from 'react-router-dom'
import 'materialize-css'

export const CreatePage = () => {
    return (
        <>
            <h2>Это страница создания страницы</h2>
        </>
    )
}


// export const CreatePage = () => {
//     const history = useHistory()
//     const auth = useContext(AuthContext)
//     const {request} = useHttp()
//     const [link, setLink] = useState('')

//     useEffect(() => {
//         window.M.updateTextFields()
//     })

//     const pressHandler = async (event) => {
//         if (event.key === 'Enter') {
//             try {
//                 // создаем новую ссылку
//                 const data = await request('/api/link/generate', 'POST', {from: link}, {
//                     Authorization: `Bearer ${auth.token}`
//                 })
//                 // Делаем редирект на детальную страницу по id созданной ссылки
//                 history.push(`/detail/${data.link._id}`)
//             } catch (e) {

//             }
//         }
//     }

//     return (
//         <div className="row">
//             <div className="col s8 offset-s2 createpage">
//                 <div className="input-field">
//                         <input 
//                             id="link" 
//                             type="text" 
//                             value={link}
//                             placeholder="Вставьте ссылку"
//                             onChange={e => setLink(e.target.value)}
//                             onKeyPress={pressHandler}
//                         />
//                         <label htmlFor="link">Введите ссылку</label>
//                 </div>
//             </div>
//         </div>
//     )
// }