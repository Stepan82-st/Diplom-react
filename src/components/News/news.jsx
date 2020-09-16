import React from 'react';
import './news.css';


function News() {
    return (<div className={"news"}>
        <div className={"post_main"}>
            <div className={"post__item"}>
                <img className={"post__image"} src={'homer.jpg'} alt=""/>
                    <div className={"post__title"}>Снова СКИДЫВАЕМСЯ</div>
                    <div className={"post__text"}>Уважаемые члены садового товарищества, как видно на фото в этом году нам
                        необходимо организовать строительство водоотводной системы для предотвращения разрушения дорог в
                        межсезонье.
                    </div>
            </div>
            <div className={"post__item"}>
                <img className={"post__image"} src={'dosug.jpg'} alt=""/>
                    <div className={"post__title"}>ВНИМАНИЕ Поймали!!!</div>
                    <div className={"post__text"}>Уважаемые соседи, напоминаем, что ловля рыбы сетями, электроудочками
                        ЗАПРЕЩЕНА. Хотим с вами поделиться информацией о нашем уже бывшем соседе Федоре Охлобыстине,
                        который попался с поличным и теперь отбывает наказание в Соловках. Желающие связаться, написать
                        Федору, обращайтесь в администрацию товарищества.
                    </div>
            </div>
            <div className={"post__item"}>
                <img className={"post__image"} src={'IMG12.jpg'} alt=""/>
                    <div className={"post__title"}>Построим быстро и недорого</div>
                    <div className={"post__text"}>Принимаем заявки на сезон 2020 года, имеются готовые проекты домов,
                        рыночные расценки на проводимые виды строительных работ, официальное заключение договоров на
                        проводимые работы тел. <p>+(375)29 707-13-14.</p>
                        <p>Внимание в этом году также принимаются заявки на дома из СОЛОМЫ!</p>
                    </div>
            </div>

        </div>
            </div>);
}
export default News;