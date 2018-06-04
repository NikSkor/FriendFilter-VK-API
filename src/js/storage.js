export function storage() {
    let save = document.querySelector('.footer__btn');
    let storage = localStorage;
    let rightList = document.querySelector('.result__list');
    let leftList = document.querySelector('.download__list');

    function saveList(list) {
        let friendsList = [];

        for (const item of list) {
            let elem = {};

            elem.first_name = item.children[1].textContent;
            elem.photo_100 = item.children[0].firstElementChild.getAttribute('src');

            friendsList.push(elem);
        }

        return friendsList;
    }

    save.addEventListener('click', ()=> {
        // storage.dataLeft=JSON.stringify ('');
        // storage.dataRight=JSON.stringify ('');        
        let leftFriendList = leftList.querySelectorAll('.download__item');
        let rightFriendList = rightList.querySelectorAll('.download__item')  
        
        storage.dataLeft=JSON.stringify ({
            item: saveList(leftFriendList)
        });
        storage.dataRight=JSON.stringify ({
            item: saveList(rightFriendList)
        });
    })

}