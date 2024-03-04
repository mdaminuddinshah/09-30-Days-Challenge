// todo list

const inputlist = document.getElementById('inputlist');
const btns = document.getElementById('btns');
const listsContainer = document.getElementById('lists');
const cls = document.getElementById('cls');

btns.addEventListener('click', function(){
    let createParagraph = document.createElement('button');
    createParagraph.textContent = inputlist.value;
    createParagraph.style.display = 'inline-block';
    createParagraph.style.marginRight = '3px';
    createParagraph.style.border = '1px solid black';
    createParagraph.style.borderRadius = '7px';

    listsContainer.appendChild(createParagraph);
    
})

cls.addEventListener('click', function(){
    if(inputlist.value !== ''){
        inputlist.value = ''
    }
})