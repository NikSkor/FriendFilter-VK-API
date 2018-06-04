export function moveElem() {
    // let buttons = document.querySelectorAll('.download__del');
    let target = document.querySelector('.result__list');
    let source = document.querySelector('.download__list');

    function moveNode(node, elem) {
        if (node.parentNode === source) {
            target.prepend(node);
        } else if (node.parentNode === target) {
            source.prepend(node);
        }
        elem.classList.toggle('download__del_plus');
        elem.classList.toggle('download__del_close');
    }
    // for (let i = 0, button; button = buttons[i]; i++) {
    //     button.addEventListener('click', (e) => {
    //         let elem = e.target;
    //         let block = elem.parentNode;

    //         moveNode(block, elem);
    //     });
    // }
    source.addEventListener('click', (e)=>{
        let elem = e.target;
        let block = elem.parentNode;

        if (elem.classList.contains('download__del')) {
            moveNode(block, elem);
        }
    })
    target.addEventListener('click', (e)=>{
        let elem = e.target;
        let block = elem.parentNode;

        if (elem.classList.contains('download__del')) {
            moveNode(block, elem);
        }
    })

    makeDnD([source, target]);

    function makeDnD(zones) {
        let currentDrag;

        zones.forEach(zone => {
            for (const item of zone.children) {
                item.draggable = true;
            }
            zone.addEventListener('dragstart', (e) => {
                let elem;

                if (e.target.classList.contains('download__item')) {
                    elem = e.target;
                }
                if (e.target.parentNode.parentNode.classList.contains('download__item')) {
                    elem = e.target.parentNode.parentNode;
                } 
                currentDrag = { source: zone, node: elem };
                // console.log(currentDrag);

            });

            zone.addEventListener('dragover', (e) => {
                e.preventDefault();
            });

            zone.addEventListener('drop', (e) => {
                if (currentDrag) {
                    e.preventDefault();

                    if (currentDrag.source !== zone) {
                        if (e.target.classList.contains('download__item')) {
                            zone.insertBefore(currentDrag.node, e.target.nextElementSibling);
                            currentDrag.node.lastElementChild.classList.toggle('download__del_plus');
                            currentDrag.node.lastElementChild.classList.toggle('download__del_close');
                        } else {
                            zone.prepend(currentDrag.node);
                            currentDrag.node.lastElementChild.classList.toggle('download__del_plus');
                            currentDrag.node.lastElementChild.classList.toggle('download__del_close');
                        }
                        
                    }
                    currentDrag = null;
                }
            });
        })
    }
}