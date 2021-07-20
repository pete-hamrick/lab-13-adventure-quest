const ingredients = {
    id: 'ingredients',
    title: '1. Procure your ingredients from the store!',
    map: {
        top: '89%',
        left: '44%'
    },
    image: 'store.jpg',
    description: `
        You enter the fresh produce chamber only to be confronted 
        by a loud unmasked man shouting at an employee for asking 
        him to put a mask on. What do you do?
    `,
    choices: [{
        id: 'confront',
        description: 'Tell the man to put his mask on and stop being a big jerk',
        result: `
            He redirects his ire towards you, berating you for 15 minutes about the country being free and his rights being his rights. You go home and get sick and are unable to make the perfect sandwich all week. 
        `,
        hp: -50,
        supplies: 25
    }, {
        id: 'skip',
        description: 'skip the fresh produce',
        result: `
            You go down unoccupied aisles and get what ingredients you can. Unfortunately, you go to the register with only bagged bread, sauerkraut, and pickled herring. These obviously make worse sandwiches.
        `,
        hp: -20,
        supplies: 5
    }, {
        id: 'avoid',
        description: 'Avoid for now, go to the free sample aisle and enjoy a small coffee or seltzer',
        result: `
            Because you have taken your time to enjoy the walk through the store, the big buffoon gets what he wanted, is satisfied, and leaves. You return to a peaceful produce aisle, grab superior fresh ingredients and find a 20 dollar bill!
        `,
        hp: 0,
        gold: 60
    }]
};

const build = {
    id: 'build',
    title: '2. Build the Perfect Sandwich!!!',
    map: {
        top: '17%',
        left: '37%'
    },
    image: 'kitchen.png',
    description: `
        You go to your kitchen to put together this Perfect Sandwich.
        But the kitchen is a mess!!! The good knife is dirty, the cutting board 
        is covered in food scraps and crumbs. You need to put the Sandwich together
        quickly, but the mess is in the way of you and creating this sandwich.
    `,
    choices: [{
        id: 'run',
        description: 'Get the hell out of the house. Who even wants a sandwich?',
        result: `
            You high tail it out of the house. Luckily,
            while fleeing you find a bag of pretzels to eat.
            Unluckily, your whole goal was to make the Perfect Sandwich. 
            You die cause there's no point if you're not doing the Quest!
        `,
        hp: -35,
        supplies: 15
    }, {
        id: 'dirty',
        description: 'Use the dirty cutting board and knife',
        result: `
            You use the good knife and dirty cutting board resulting
            in a nearly Perfect Sandwich. However, when eaten there are other
            food crumbs and even some hair in this making it a far from 
            Perfect Sandwich. You have failed your Quest and die.
        `,
        hp: -45,
        supplies: 0
    }, {
        id: 'clean',
        description: 'Be a good person and clean before you get to work',
        result: `
            Knowing better, you take the couple minutes to clean the cutting
            board and your good knife. While this loses you a little time, it
            is the good knife and you make up for lost time by quickly cutting up
            your ingredients and putting together the Perfect Sandwich. The neighborhood
            all suddenly wants one too and award you more supplies to make them
            a Perfect Sandwich at a later date!
        `,
        hp: 0,
        supplies: 90
    }]
};

const enjoy = {
    id: 'enjoy',
    title: '3. Time to sit down and enjoy the Perfect Sandwich',
    map: {
        top: '31%',
        left: '5%'
    },
    prerequisites: ['dragon', 'monsters'],
    image: 'diningroom.jpg',
    description: `
        It is now time to find your comfy chair at the table and enjoy
        the Perfect Sandwich after an adventurous time acquiring and putting 
        it together. As you pick up your plate and move from the kitchen,
        your two cute but enormous dogs come running because they also want
        the Perfect Sandwich. What do you do next?
    `,
    choices: [{
        id: 'feed',
        description: 'You feed them their food first',
        result: 'You peacefully pacify them! You also find more delicious sandwich supplies in the cupboard!',
        hp: 0,
        supplies: 40
    }, {
        id: 'ignore',
        description: 'You ignore their begging and bad behavior',
        result: 'Oh no! one of them jumps on you and while you move away from them the sandwich falls on the ground, they enjoy it. You die.',
        hp: -50,
        gold: 0
    }, {
        id: 'distract',
        description: 'You attempt to distract them with a toy',
        result: 'They love toys, but they love food more. One does chase the toy. But, during the chase, the other grabs the sandwich. You are sad.',
        hp: -40,
        gold: 0
    }]
};

const quests = [
    ingredients, 
    build,
    enjoy,
];

export default quests;