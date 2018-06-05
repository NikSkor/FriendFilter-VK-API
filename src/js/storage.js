export function storage() {
    let save = document.querySelector('.footer__btn');
    let storage = localStorage;
    let rightList = document.querySelector('.result__list');
    let leftList = document.querySelector('.download__list');
    let alertBlock = document.querySelector('.content__alert');
    let alertButton = document.querySelector('.alert__button');

    function saveList(list) {
        let friendsList = [];

        for (const item of list) {
            let elem = {};

            elem.first_name = item.children[1].textContent;
            elem.photo_100 = item.children[0].firstElementChild.getAttribute('src');
            elem.id = item.children[3].textContent;

            friendsList.push(elem);
        }

        return friendsList;
    }

    save.addEventListener('click', ()=> {     
        let leftFriendList = leftList.querySelectorAll('.download__item');
        let rightFriendList = rightList.querySelectorAll('.download__item')  
        
        storage.dataLeft=JSON.stringify ({
            item: saveList(leftFriendList)
        });
        storage.dataRight=JSON.stringify ({
            item: saveList(rightFriendList)
        });
        alertBlock.classList.remove('content__alert_hide');
        alertButton.addEventListener('click', ()=> {
            alertBlock.classList.add('content__alert_hide');
        })

        // alert('Списки друзей сохранены!');
    })

}