import React from 'react';

const Ingridients = ({meal}) => {
    if(meal.id === 'pure'){
        return(
            <div>
                <h4>Ингридиенты</h4>
                <ul>
                    <li>Вода</li>
                    <li>Картошка</li>
                    <li>Молоко</li>
                </ul>
            </div>
        )
    }
    if(meal.id === 'ris') {
        return (
            <div>
                <h4>Ингридиенты</h4>
                <ul>
                    <li>Вода</li>
                    <li>Рис</li>
                    <li>Соль</li>
                </ul>
            </div>
        );
    } if(meal.id === 'makarony'){

        return (
            <div>
                <h4>Ингридиенты</h4>
                    <ul>
                        <li>Макароны</li>
                        <li>Вода</li>
                        <li>Соль</li>
                    </ul>
            </div>
        )
    }

    return (
        <div>

        </div>
    )

};

export default Ingridients;