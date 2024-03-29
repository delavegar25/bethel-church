// javascript
// join online button
// make the join online accessible for keyboard users.

function joinOnline() {
    document.querySelector('#join-online').addEventListener('keyup', (e) => {
        if(e.key === 'Enter'){
             e.target.click();
        }
    })
}

// make the Listen now button accessible for keyboard users

function listenNow() {
    document.querySelector('#listen-now').addEventListener('keyup', (e) => {
        if(e.key === 'Enter'){
            e.target.click();
        }
    })
}


// make the view schools button accessible for keyboard users.

function viewSchools() {
    document.querySelector('#view-schools').addEventListener('keyup', (e) => {
        if(e.key === 'Enter'){
            e.target.click();
        }
    })
}

// make the subscribe button accessible for keyboard users

function subscribeButton() {
    document.querySelector('#mc-embedded-subscribe').addEventListener('keyup', (e) => {
        if(e.key === 'Enter'){
            e.target.click();
        }
    })
}

// for search icon
function searchIcon() {
    let search = document.querySelector('#search-icon');
    if(search.style.display === 'block'){
        search.style.display = 'none';
    } else {
        search.style.display = 'block';
    }
}

// asynchronous programming for all the buttons
function joinButtons() {
    const btn1 = document.querySelector('#join-person');
    const btn2 = document.querySelector('#join-online');
    const btn3 = document.querySelector('#listen-now');
    console.log(btn1, btn2, btn3);

    // added the eventhandler to handle the click event
    // made sure when client clicks it executes in 1sec.
    btn1.addEventListener('click', () => {
        setTimeout(() => {
           console.log('execute btn1 in 1sec');
        }, 1000);
    })

    btn2.addEventListener('click', () => {
        setTimeout(() => {
            console.log('execute btn2 in 1sec.')
        }, 1000);
    })

    btn3.addEventListener('click', () => {
        setTimeout(() => {
            console.log('listen now!');
        }, 1000);
    })
}

// for the search icon
const searchIcon = document.getElementById('search-icon');
const searchInput = document.getElementById('searchInput');

// coding
searchIcon.addEventListener('click', () => {
    searchInput.classList.toggle('hidden');
    if(!searchInput.classList.contains('hidden')){
        searchInput.focus(); // focus on the input when it is displayed.
    }
});

searchInput.addEventListener('blur', () => {
    searchInput.classList.add('hidden');
})