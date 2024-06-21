

function genFirstName(){
    return "Larry"
}
function genLastName(){
    return "Lord"
}
function genGender(){
    let randNum = Math.round(Math.random());
    if (randNum === 0){
        return "Male";
    }
    else if (randNum === 1){
        return "Female";
    }
    
}
function genAge(){
    //shitter system, too many old fellas
    return Math.round(Math.random() * 100);

    //perhaps we bring in a new system which first picks between subcategories like juvenile, young adult, adult, and senior citizen 
    //then supply an age based on that range

}


// when button is pressed, call the create person function!
let buton = document.querySelector("#btn");
buton.addEventListener("click", createPerson);


// the create person function!
function createPerson(){
    let person = {};
    person.Gender = genGender();
    person.age = genAge();
    console.log(person);
}