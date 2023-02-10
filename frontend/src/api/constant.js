const API_URL = 'http://127.0.0.1:8000/api/v1'

const API_URL_ARTICLES = API_URL + '/articles/?format=json&page_size=6&page=';
const API_URL_ARTICLE = API_URL + '/articles/';
const API_URL_CONTACTS = API_URL + '/contacts/?format=json';
const API_URL_MENUS = API_URL + '/menus/?format=json';
const API_URL_SALE = API_URL + '/sale/?format=json';
const API_URL_REVIEWS = API_URL + '/reviews/?format=json&page_size=6&page=';
const API_URL_CELEBRATES = API_URL + '/celebrates/?format=json&page_size=6&page=';
const API_URL_CELEBRATE = API_URL + '/celebrates/';
const API_URL_POLYTICS = API_URL + '/polytics/?format=json';
const API_URL_CREATE_RESERVE = API_URL + '/reserve/';
const API_URL_CREATE_CALL = API_URL + '/call/';
const API_URL_CREATE_DEGUSTATION = API_URL + '/degustation/';
const API_URL_CREATE_HAPPY = API_URL + '/happy/';

export {
    API_URL_ARTICLES,
    API_URL_ARTICLE,
    API_URL_CONTACTS,
    API_URL_MENUS,
    API_URL_SALE,
    API_URL_REVIEWS,
    API_URL_CELEBRATES,
    API_URL_CELEBRATE,
    API_URL_POLYTICS,
    API_URL_CREATE_RESERVE,
    API_URL_CREATE_CALL,
    API_URL_CREATE_DEGUSTATION,
    API_URL_CREATE_HAPPY,
}