export function makeUser(formData){
    const newUser = {
        hp: 35,
        supplies: 0,
        name: formData.get('name'),
        class: formData.get('class'),
        completed: {}
    };
    return newUser;
}