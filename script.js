// todo list

const inputlist = document.getElementById('inputlist');
const btns = document.getElementById('btns');
const listsContainer = document.getElementById('lists');
const cls = document.getElementById('cls');

btns.addEventListener('click', function(){

    // ni untuk div element, so boleh masukkan button create dan delete dlm div ni
    let createDiv = document.createElement('div');
    createDiv.style.display = 'flex';

    // ni utk button ( create para dan delete button )
    let createParagraph = document.createElement('button');
    let deleteParagraph = document.createElement('button');

    createParagraph.textContent = inputlist.value;
    deleteParagraph.textContent = 'Delete';

    createParagraph.style.backgroundColor = 'rgba(0, 120, 255, 1)';
    deleteParagraph.style.backgroundColor = 'rgba(255, 0, 45)';

    createParagraph.style.width = '200px';
    deleteParagraph.style.width = '100px';

    createParagraph.style.display = 'inline-block';
    deleteParagraph.style.display = 'inline-block';

    createParagraph.style.color = 'white';
    deleteParagraph.style.color = 'white';

    createParagraph.style.marginBottom = '3px';
    deleteParagraph.style.marginBottom = '3px';

    createParagraph.style.marginRight = '3px';
    deleteParagraph.style.marginLeft = '3px';

    createParagraph.style.border = '1px solid black';
    createParagraph.style.borderRadius = '7px';

    deleteParagraph.style.border = '1px solid black';
    deleteParagraph.style.borderRadius = '7px';

    createDiv.appendChild(createParagraph);
    createDiv.appendChild(deleteParagraph);
    listsContainer.appendChild(createDiv);
    
    deleteParagraph.addEventListener('click', function(){
        createDiv.removeChild(createParagraph)
        createDiv.removeChild(deleteParagraph)
    })
})

cls.addEventListener('click', function(){
    if(inputlist.value !== ''){
        inputlist.value = ''
    }
})