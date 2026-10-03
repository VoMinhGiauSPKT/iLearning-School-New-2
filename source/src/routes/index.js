import PageNotAllowed from '@components/common/page/PageNotAllowed';
import PageNotFound from '@components/common/page/PageNotFound';
import HomePageContainer from '@modules/containers/home';
import LoginPageContainer from '@modules/containers/login';

/*
    auth
        + null: access login and not login
        + true: access login only
        + false: access not login only
*/
const routes = {
    pageNotAllowed: {
        path: '/not-allowed',
        component: PageNotAllowed,
        auth: null,
        title: 'Page not allowed',
    },
    homePage: {
        path: '/',
        component: HomePageContainer,
        auth: null,
        title: 'Trang chủ',
    },
    loginPage: {
        path: '/login',
        component: LoginPageContainer,
        auth: false,
        title: 'Home',
    },
    pageNotFound: {
        path: '/not-found',
        component: PageNotFound,
        auth: false,
        title: 'Page not found',
    },
    notFound: {
        component: PageNotFound,
        auth: null,
        title: 'Page not found',
        path: '*',
    },
};

export default routes;
