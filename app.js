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

