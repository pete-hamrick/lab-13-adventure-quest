export const USER = 'USER';

export function getUser(){
    //return user from localStorage
    const userString = localStorage.getItem(USER);
    return JSON.parse(userString);
}

export function setUser(userObject){
    // stringify the userObject
    const userString = JSON.stringify(userObject);
    // set in local storage
    localStorage.setItem(USER, userString);
}

export function findById(items, id) {
    for (const item of items) {
        if (item.id === id) {
            return item;
        }
    }
}

export function loadUser() {
    const name = document.getElementById('name');
    const hp = document.getElementById('hp');
    const supplies = document.getElementById('supplies');

    const user = getUser();

    // name.textContent = `Name: ${user.name}`;
    hp.textContent = `Health: ${user.hp}`;
    supplies.textContent = `Supplies: ${user.supplies}`;

    if (user.hp <= 0) {
        hp.textContent = 'You Died!';
    }

    if (user.class === 'artist') {
        name.textContent = `${user.name}, the Sandwich Artist`;
    } else if (user.class === 'warrior') {
        name.textContent = `${user.name}, the Weekend Sandwich Warrior`;
    } else if (user.class === 'person') {
        name.textContent = `${user.name}, the regular sandwich enjoyer`;
    }
}

export function userDied() {
    const user = getUser();
    
    if (user.hp <= 0){
        name.textContent = 'You Died!';
        window.location.replace('../results');
    }
}