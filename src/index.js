import './style/style.scss';
import img from './img/logo.png';
import img2 from './img/search.png';
import img3 from './img/white.png';

import { auth, callAPI } from './js/vk';
import render from './index/downloadlist.hbs';
import { moveElem } from './js/dnd';
import { filter } from './js/filter';


auth()
    .then(() => {

        return callAPI('friends.get', { order: 'name', fields: ' photo_100' });
    })
    .then(friends => {
        let friendslist=[];

        friendslist=friends.items;

        let container = document.querySelector('.download__list');
        
        container.innerHTML = render({ friendslist });
        filter();
        moveElem();


    })