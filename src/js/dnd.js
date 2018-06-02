import render2 from '../index/addlist.hbs';
const source = document.querySelector('.download__list');
const target = document.querySelector('.result__list');
// let counter = 0;

makeDnD([source, target]);

document.addEventListener('click', e => {
    if (e.target.classList.contains('.download__del')) {
        const newItem = createItem();
        const parent = e.target.parentNode;

        parent.insertBefore(newItem, parent.lastElementChild)
    }
});

function createItem() {
    // const newDiv = document.createElement('div');

    // // newDiv.textContent = counter++;
    // newDiv.classList.add('item');
    // newDiv.draggable = true;

    // return newDiv;
    let container = document.querySelector('.result__list');
        
    container.innerHTML = render2({ friendslist });
}

function makeDnD(zones) {
    let currentDrag;

    zones.forEach(zone => {
        zone.addEventListener('dragstart', (e) => {
            currentDrag = { source: zone, node: e.target };
        });

        zone.addEventListener('dragover', (e) => {
            e.preventDefault();
        });

        zone.addEventListener('drop', (e) => {
            if (currentDrag) {
                e.preventDefault();

                if (currentDrag.source !== zone) {
                    if (e.target.classList.contains('item')) {
                        zone.insertBefore(currentDrag.node, e.target.nextElementSibling);
                    } else {
                        zone.insertBefore(currentDrag.node, zone.lastElementChild);
                    }
                }

                currentDrag = null;
            }
        });
    })
}
