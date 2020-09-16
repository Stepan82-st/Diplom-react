import React from 'react';
import './Dialogs.css';


function Dialogs() {
    return(
        <div className={'dialogs'}>

                <ul className={'menu-menu-1'} >
                    <li className={'menu-item'}><p>Директор Брыль Степан Федорович тел. (29) 1611662</p></li>
                    <li className={'menu-item'}><p>Юрист Степанов Иван Иванович  тел. (29) 7071314</p></li>
                    <li className={'menu-item'}><p>Бухгалтер Федоров Иван Иванович  тел. (29) 7071314</p></li>
                    <li className={'menu-item'}><p>Коллектор Федоров Степан Иванович  тел. (29) 7071314</p></li>
                </ul>
            <form>
                <label>
                    Задать вопрос:
                    <textarea type="text" name="textarea"/>
                </label>
                <input type="submit" value="Отправить" />
            </form>
        </div>);
}
export default Dialogs;