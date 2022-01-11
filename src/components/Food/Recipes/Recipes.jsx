import React, { useState } from 'react';
import Ingridients from '../Ingridients/Ingridients';

const Recipes = () => {
    const [meal, setMeal] = useState({
        id: '',
        isChecked: false
    })
    const [isChecked, setIsChecked] = useState(false)

    function handleChange(e){
        setMeal({
            ...meal,
            id: e.target.id,
            isChecked: e.target.checked
        })
    }

    return (
        <div>
            <img src="https://images11.popmeh.ru/upload/img_cache/ef3/ef34ea63316e94444070574eafe7567b_ce_1081x720x35x0.jpg" style={{width: '400px', margin: '20px'}} alt="stars" />
            <h1 style={{color: "darkred", fontWeight: 'bold'}}>Ресторан "У МЕНЯ"</h1>
            <h2 style={{color: "red"}}>Меню на сегодня и навсегда</h2>
            <form>
            <input onChange={handleChange} type="radio" name='ing' id='pure' className='my-3'/>
            <label   htmlFor="pure">Пюре</label>
            <br/>
            
            <input onChange={handleChange} type="radio" name='ing' id='ris' className='my-3'/>
            <label htmlFor="ris">Рис</label>
            <br/>

            
            <input onChange={handleChange} type="radio" name='ing' id='makarony' className='my-3'/>
            <label htmlFor="makarony">Макароны</label>
            <br/>

            </form>

            <Ingridients  meal={meal}   />
        </div>
    );
};

export default Recipes;