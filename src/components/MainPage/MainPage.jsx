import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const MainPage = () => {
    return (
        <div>
           <Link to='/counter'>
              <Button className='m-3'>Счетчик</Button>   
            </Link>

            <Link to='/recipes'>
              <Button className='m-3'>Еда</Button>   
            </Link>

            <Link to='/entryform'>
              <Button className='m-3'>Вход</Button>
            </Link>

        </div>
    );
};

export default MainPage;