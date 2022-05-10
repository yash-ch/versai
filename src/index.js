import React from 'react';
import ReactDOM from 'react-dom';
import WebsiteRoute from './Route';
import {BrowserRouter} from 'react-router-dom';
import {configureStore} from '@reduxjs/toolkit'
import {Provider} from "react-redux";
import {bookCategoryReducer} from "./reducers/BookCatergory";


const store = configureStore({
    reducer: {
        bookCategory: bookCategoryReducer
    }
})

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <WebsiteRoute/>
        </Provider>
    </BrowserRouter>,
    document.getElementById('root')
);