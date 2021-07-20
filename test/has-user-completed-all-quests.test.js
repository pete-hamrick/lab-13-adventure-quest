import { hasCompletedAllQuests } from '../map/has-completed-all-quests.js';
const test = QUnit.test;

test('should return true if user has completed all quests', (expect) => {
    const user = {
        completed: {
            ingredients: true,
            build: true,
            enjoy: true
        }
    };
    const expected = true;

    const actual = hasCompletedAllQuests(user);

    expect.equal(actual, expected);
});

test('should return false if user has not completed all quests', (expect) => {
    const user = {
        completed: {
            ingredients: true
        }
    };
    const expected = false;

    const actual = hasCompletedAllQuests(user);

    expect.equal(actual, expected);
});