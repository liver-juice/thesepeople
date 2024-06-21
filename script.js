

// \\----|||-THE-STAT-BUILDING-FUNCTIONS-|||----//


function genFirstName(gender){
    let name;
    // in order to get the name, we need to fetch it from the api.
    // pass the gender to the api, it goes into the black box and returns us a list of baby names or whatever tf 
    // then we take that data and make it useable again.

    // so name = callthisapi(with this parameter!)
    if (gender === "Male"){
        fetch('https://api.api-ninjas.com/v1/babynames?gender=boy')
        .then(response => console.log(response))
        .catch(error => console.error(error));
    }else{
        fetch('https://api.api-ninjas.com/v1/babynames?gender=girl');
    }
}


function genLastName(gender){
    let name;
    if (gender === "Male"){
        return name;
    }else{
        return name;
    }
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

    // the "person" array
    let person = {};


    // generating the buddies attributes. stats. perks. dealing the cards.
    person.gender = genGender();
    person.age = genAge();


    if (person.gender === "Male"){
        person.firstName = genFirstName("Male");
        person.lastName = genLastName("Male");
    }else{
        person.firstName = genFirstName("Female");
        person.lastName = genLastName("Female");
    }
    


    // if this person has ___ stat, they can perform ____ action(method)
    if (person.age >= 18 && person.age <= 70){
        // this is afterdetail.
        // person.job = genJob(); 
    }



    // show me this person. i am god. bow to your creator.
    console.log(person);
}