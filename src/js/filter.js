export function filter() {
    let filterLeft = document.querySelector('#filterInputFriend');
    let filterRight = document.querySelector('#filterInputResult');
    let rightList = document.querySelector('.result__list');
    let leftList = document.querySelector('.download__list');
    
    filterLeft.addEventListener('input', ()=>{ 
        filtering(filterLeft, leftList);
    })
    filterRight.addEventListener('input', ()=>{
        filtering(filterRight, rightList);
    })

    function filtering (input, friendsList) {
        let { value } = input;

        for (let friendNode of friendsList.children) {
            if (friendNode.textContent.toLowerCase().includes(value.toLowerCase())) {
                friendNode.classList.remove('hide');
            } else {
                friendNode.classList.add('hide');
            }
        }
    }
}