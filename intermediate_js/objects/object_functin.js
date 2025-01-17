// how to create a funciton within an object 
// how to call a function 
const my_object = {
    property: "My value!",
    other_property: 77,
    "more_property": function () {
        console.log("PEPE");
    }


};

console.log(my_object.property);
my_object["more_property"](); // call the function 


