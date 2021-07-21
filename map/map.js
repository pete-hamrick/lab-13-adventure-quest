import quests from '../data/quest-data.js';
import { getUser, loadUser } from '../data/storage-utils.js';
import { hasCompletedAllQuests } from './has-completed-all-quests.js';



loadUser();

const user = getUser();

if (user.hp <= 0 || hasCompletedAllQuests(user)){
    window.location.replace('../results');
}

const questList = document.getElementById('quest-list');

for (let quest of quests) {
    if (user.completed[quest.id]){
        createQuestSpan(quest);
    } else {
        createQuestLink(quest);
    }
}

export function createQuestSpan(quest) {
    const span = document.createElement('span');
    span.innerText = `${quest.title} COMPLETED!`;
    questList.appendChild(span);
}

export function createQuestLink(quest) {
    const questHref = `../quest/?questId=${quest.id}`;
    
    const questLink = document.createElement('a');
    questLink.href = questHref;
    questLink.textContent = quest.title;
    
    questList.appendChild(questLink);
    
}