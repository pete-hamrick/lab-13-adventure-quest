import { createQuestSpan } from '../map/createQuest.js';

const test = QUnit.test;

test('does createQuestSpan print the quest name and completed afterwards', (expect) => {
    const quest = {
        completed: {
            ingredients: true
        }
    };
    const expected = '1. Procure your ingredients from the store! COMPLETED!';

    const actual = createQuestSpan(quest);

    expect.deepEqual(actual, expected);
});
