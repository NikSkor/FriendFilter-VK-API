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

auth()
    .then(() => {

        return callAPI('friends.get', { order: 'name', fields: ' photo_100' });
    })
    .then(friends => {

        let container = document.querySelector('.download__list');
        let friendslistLeft=[];
        let friendslistRight=[];
        let rightList = document.querySelector('.result__list');
        let friendslistOn;
        let updateListLeft=[];
        
        friendslistOn = friends.items;
        // console.log(friendslistOn);

        if (localStorage.dataLeft || localStorage.dataRight) {
            // console.log(localStorage.dataLeft);
            friendslistLeft=JSON.parse(localStorage.dataLeft);
            friendslistRight=JSON.parse(localStorage.dataRight);
            let friendslist = friendslistLeft.item;
            let friendsRight = friendslistRight.item;
            
            // console.log(friendslist);

            let updateListLeft=[];
            let updateListRight=[];
        
            for (let i=0; i<friendslist.length; i++) {
                for (let j=0; j < friendslistOn.length; j++) {
                    if (friendslist[i].id == friendslistOn[j].id) {
                        updateListLeft.push(friendslistOn[j]);

                    }
                    
                }
            }
            for (let i=0; i<friendsRight.length; i++) {
                for (let j=0; j < friendslistOn.length; j++) {
                    if (friendsRight[i].id == friendslistOn[j].id) {
                        updateListRight.push(friendslistOn[j]);
                    }
                }
            }
            
            container.innerHTML = render({ updateListLeft });
            rightList.innerHTML = renderRight({ updateListRight });
            filter();
            moveElem();
            storage();
        } else {
            updateListLeft = friendslistOn;
            container.innerHTML = render({ updateListLeft });
            filter();
            moveElem();
            storage();
        }
        // console.log(localStorage);
        // localStorage.clear();
    })