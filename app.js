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

// toggle the hamburger-menu

function toggleMenu(){
    const menuIcon = document.querySelector('.menu-icon');
    menuIcon.classList.toggle('open');
}

// menu-icon to dropdown the menu.
document.getElementById('menuIcon').addEventListener('click', ()=> {
    let dropdown = document.getElementById('w-dropdown-toggle-1');
    dropdown.style.display = dropdown.style.display === "block" ? "none" : "block"; 
});

// close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if(!event.target.matches('#menuIcon')) {
        let dropdowns = document.getElementsByClassName("dropdown-toggle w-dropdown-toggle");
        for (let i = 0; i < dropdowns.length; i++){
            let openDropdown = dropdowns[i];
            if(openDropdown.style.display === "none") {
                openDropdown.style.display = "block";
            }
        }
    }
}