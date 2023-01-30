var myTextArea = document.querySelector('textarea'),

    mySpan = document.querySelector('span'),

    myMaxLength = myTextArea.getAttribute('maxlength');

myTextArea.oninput = function () {

    mySpan.textContent = myMaxLength - myTextArea.value.length;

    if(mySpan.textContent == 0) {

        mySpan.style.color = 'red';

    } else {

        mySpan.style.color = 'black';        

    }
};