import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Counter from './components/counter/Counter';
import EntryForm from './components/EntryForm/EntryForm';
import IsLogged from './components/EntryForm/IsLogged';
import WelcomePage from './components/EntryForm/WelcomePage';
import Recipes from './components/Food/Recipes/Recipes';
import MainPage from './components/MainPage/MainPage';

const Routes = () => {
    return (
        <div>
            <BrowserRouter>
            <Switch>
                <Route exact path='/' component={MainPage}/>
                <Route exact path='/counter' component={Counter}/>
                <Route exact path='/recipes' component={Recipes}/>
                <Route exact path='/entryform' component={WelcomePage}/>
                <Route exact path='/islogged' component={IsLogged}/>

            </Switch>
        </BrowserRouter>
        </div>
    );
};

export default Routes;