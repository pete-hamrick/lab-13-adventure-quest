import quests from '../data/quest-data.js';
import { getUser } from '../data/storage-utils.js';
import { hasCompletedAllQuests } from './has-completed-all-quests.js';

const user = getUser();

if (user.hp <= 0 || hasCompletedAllQuests(user)){
    window.location.replace('../results');
}

const questList = document.getElementById('quest-list');

for (let quest of quests) {
    const questHref = `../quest/?questId=${quest.id}`;

    const questLink = document.createElement('a');
    questLink.href = questHref;
    questLink.textContent = quest.title;

    questList.appendChild(questLink);
}

