## Making a plan
1) Make a drawing of your app. Simple "wireframes"
2) Once you have a drawing, name the HTML elements you'll need to realize your vision
3) For each HTML element ask: Why do I need this?
4) Once we know _why_ we need each element, think about how to implement the "Why" as a "How"
5) Is there some state we need to initialize?
6) Find all the 'events' (user clicks, form submit, etc) in your app. Ask one by one, "What happens when" for each of these events. Does any state change?
7) Think about how to validate each of your steps
8) Consider your data model. What objects will you be using? What are the key/value pairs? What arrays do you need? What needs to live in local storage?
9) Consider what features _depend_ on what other features. Use this dependency logic to figure out what order to complete tasks.

# The Adventure Quest
1) create a google jamboard to show the basic UI and some elements
2) label where the state gets set and updated
3) create the basic HTML (heading, form w/ input, radio buttons, and character select and finally, submit button)
4) create the encounters data and load asset images into a quest folder inside the assets folder.
5) add a home folder with a js file and a function js file
6) TDD make-user, getUser, and setUser
7) Create a map folder with a map.js and index.html, have the form submit redirect to the map index.html
8) Create a quest folder with a quest.js and index.html.
9) Make map.js render a list of links to quest html file but with different quest ids.
10) Make the quest.js render different quests based on the quest id.
