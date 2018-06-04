import './style/style.scss';
import img from './img/logo.png';
import img2 from './img/search.png';
import img3 from './img/white.png';

import { auth, callAPI } from './js/vk';
import render from './index/downloadlist.hbs';
import renderRight from './index//addlist.hbs';
import { moveElem } from './js/dnd';
import { filter } from './js/filter';
import { storage } from './js/storage';

// localStorage.clear();
storage();
console.log(localStorage);
let friendslistLeft=[];
let friendslistRight=[];
let container = document.querySelector('.download__list');
let rightList = document.querySelector('.result__list');

if (localStorage.dataLeft && localStorage.dataRight) {
    // console.log(localStorage.dataLeft);
    friendslistLeft=JSON.parse(localStorage.dataLeft);
    friendslistRight=JSON.parse(localStorage.dataRight);
    let friendslist = friendslistLeft.item;
    let friendsRight = friendslistRight.item;

    // if (friendslist !== undefined || friendsRight !== undefined) {
    container.innerHTML = render({ friendslist });
    rightList.innerHTML = renderRight({ friendsRight });
    filter();
    moveElem();

} else {
    auth()
        .then(() => {

            return callAPI('friends.get', { order: 'name', fields: ' photo_100' });
        })
        .then(friends => {

            let friendslist=[];
            // let friendsLeft=[];
            // let friendsRight=[];

            friendslist=friends.items;
            console.log(friendslist);
            let container = document.querySelector('.download__list');

            // console.log(friendslist);
            
            // if (localStorage.dataLeft) {
            //     friendslist=JSON.parse(localStorage.dataLeft)
            // }

            container.innerHTML = render({ friendslist });
            
            filter();
            moveElem();
            storage();
            console.log(localStorage);
            // friendslist = storage();
            // container.innerHTML = render({ friendslist });
            
        })
}
// } 