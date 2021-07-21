import { getUser, USER } from '../data/storage-utils.js';
// import quests from '../data/quest-data.js';

const user = getUser();

const resultsArea = document.getElementById('results-area');
const storyDiv = document.createElement('div');
storyDiv.classList.add('story-div');

const hpResult = user.hp;
const suppliesResult = user.supplies;
console.log;

let story = 'After your adventures, ';
story += user.name + ' the ' + user.class + ', had ';
story += hpResult + ' health, and ';
story += suppliesResult + ' supplies.';

storyDiv.textContent = story;
resultsArea.appendChild(storyDiv);
console.log(suppliesResult);

function supplies(suppliesResult) {
    if (suppliesResult < 50) {
        return 'You have enough supplies for an ok lunch this week. But, not a Perfect Sandwich daily.';
    } else if (suppliesResult < 90){
        return 'You have enough supplies for the Perfect Sandwich all week!';
    } else {
        return 'You have enough supplies to make The Perfect Sandwich for all your neighbors and everyone is happy!';
    }
    
}

const suppliesStory = document.createElement('div');
suppliesStory.classList.add('supplies-story');
suppliesStory.textContent = supplies(suppliesResult);
resultsArea.appendChild(suppliesStory);

const resetButton = document.createElement('button');
resetButton.textContent = 'Play Again.';
resultsArea.appendChild(resetButton);
const emptyStorage = {};
function clearStorage(){
    localStorage.setItem(USER, JSON.stringify(emptyStorage));
}

resetButton.addEventListener('click', () => {
    window.location.replace('../index.html');
    clearStorage();
});