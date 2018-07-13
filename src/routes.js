import React from 'react';
import Homepage from './Pages/Homepage/Homepage';
import NotFoundPage from'./Pages/NotFoundPage/NotFoundPage';
import ProductListPage from './Pages/ProductListPage/ProductListPage';
import ProductActionPage from './Pages/ProductActionPage/ProductActionPage';
const routes = [
    {
        path: '/',
        exact:true,
        main: ()=> <Homepage/>
    },
    {
        path: '/product-list',
        exact:false,
        main: ()=> <ProductListPage/>
    },
    {
        path: '/product/add',
        exact:false,
        main: ({history})=> <ProductActionPage history={history}/>
    },
    {
        path: '/product/edit/:id',
        exact:false,
        main: ({match, history})=> <ProductActionPage match={match} history={history}/>
    },
    {
        path: '',
        exact:false,
        main: ()=> <NotFoundPage/>
    }
];
export default routes;