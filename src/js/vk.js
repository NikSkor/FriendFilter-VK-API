// import { render } from './createList';
import render from '../index/downloadlist.hbs';
import { moveElem } from '../js/dnd';

VK.init({
    apiId: 6497541
});

function auth() {
    return new Promise((resolve, reject) => {
        VK.Auth.login(data => {
            if (data.session) {
                resolve();
            } else {
                reject(new Error('Не удалось авторизоваться'));
            }
        }, 2);
    });
}

function callAPI(method, params) {
    params.v = '5.76';

    return new Promise((resolve, reject) => {
        VK.api(method, params, (data) => {
            if (data.error) {
                reject(data.error);
            } else {
                resolve(data.response);
            }
        });
    })
}
function vision (fg) {
    console.log(fg);
}
// let friendslist=[];
// export {
//     auth, callAPI
// };
auth()
    .then(() => {

        return callAPI('friends.get', { fields: 'photo_100' });
    })
    .then(friends => {
        let friendslist=[];

        friendslist=friends.items;
        
        // vision(friendslist);
        // let container = document.querySelector('.download__list');

        // render(friends);
        // container.innerHTML = ({ friendslist });
        // let mas = friends;

        let container = document.querySelector('.download__list');
        
        container.innerHTML = render({ friendslist });

        moveElem();


    })

