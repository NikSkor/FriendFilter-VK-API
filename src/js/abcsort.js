export function abcSort () {
    let rightList = document.querySelector('.result__list');
    let leftList = document.querySelector('.download__list');

    function filtering (friendsList) {

        function sort (first, second) {
            if (first > second) {
                return 1;
            }
            
            if (first < second) {
                return -1; 
            }
            
            return 0;
        }

        return friendsList.reduse(sort)
    }
    
}



        // for (let friendNode of friendsList.children) {
        //     if (friendNode.textContent.toLowerCase() > {
        //         friendNode.classList.remove('hide');
        //     } else {
        //         friendNode.classList.add('hide');
        //     }

        //     towns.sort((first, second)=>{
        //         if (first.name > second.name) {
        //             return 1;
        //         }
                
        //         if (first.name < second.name) {
        //             return -1; 
        //         }
                
        //         return 0;
        //     })


