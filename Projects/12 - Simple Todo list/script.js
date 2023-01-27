let add = document.querySelector('#add'),
    input = document.querySelector('input'),
    tasks = document.querySelector('#tasks');

add.addEventListener('click', (e) => {
    e.preventDefault();
    if(input.value !== '') {
        tasks.innerHTML += "<div class='task'>" + input.value + "<div><button id='done'><i class='fas fa-check'></i></button><button id='delete'><i class='fas fa-trash'></i></button></div></div>";
    }

    let done = document.querySelectorAll('#done'),
    del = document.querySelectorAll('#delete');

    done.forEach(v => {
        v.addEventListener('click', (e) => {
            e.preventDefault();
            v.parentElement.parentElement.style.textDecoration = 'line-through'
        })
    })

    del.forEach(v => {
        v.addEventListener('click', (e) => {
            e.preventDefault();
            v.parentElement.parentElement.remove();
        })
    })

})
