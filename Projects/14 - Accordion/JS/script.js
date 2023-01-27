// var button = document.querySelectorAll('button'),
//     des,
//     desHeight;


// for(var i = 0; i < button.length; i++) {

//     button[i].onclick = function() {

//         this.classList.toggle('active');

//         des = this.nextElementSibling;
//         desHeight = des.scrollHeight

//         if(des.style.height) {

//             des.style.height = null;

//         } else {

//             des.style.height = desHeight + 'px';

//         }

//     }

// }


var buttons = document.querySelectorAll('button'),
    des = document.querySelector('.des');

for(var i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function() {
        if(this.nextElementSibling.style.height) {
            this.nextElementSibling.style.height = null;
            this.nextElementSibling.style.padding = null;
        } else {
            this.nextElementSibling.style.height = 50 + 'px';
            this.nextElementSibling.style.padding = 10 + 'px';
        }
    }
}

