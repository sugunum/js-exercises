/*
Task 1
=======
Write JavaScript below that logs:
    1. all the "p" element nodes of the document,
    --> should log a list of nodes with a length of 6

    

    2. the first div element node
    --> should log the ".site-header" node

    3. the element with id "jumbotron-text"
    --> should log the "#jumbotron-text" node

    4. all the "p" elements of contained inside  the .primary-content element node
    --> should log a list of nodes with a length of 3

*/


/*
Task 2
======

When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"
*/
//let myButton = document.querySelector("Alert");
    //myButton.addEventListener("click", alertSomething);

   // function alertSomething() {
    //    alert("Something");
    //}

/*
Task 3
=======

Write JavaScript below that changes the background colour of the page
 when the 'Change colour' button is clicked.
*/


/*
Task 4
======

When a user clicks the 'Add some text' button, a new paragraph should be added below the buttons 
that says "Read more below."
*/
let addTextBtn = document.querySelector("#addTextBtn"); //we find button
addTextBtn.addEventListener("click",addText)  //define the event click call the function addtext                                                                                              
 function addText(){
   let paragraph = document.createElement("p")//creating new paragraf element
   paragraph.innerText= "Read more below"//text i should be in the  paragraf
   let jumbotron =document.querySelector(".jumbotron");

   jumbotron.appendChild(paragraph);
};



/*
Task 5
======

When the 'Larger links!' button is clicked, the text of all links on the page should increase.
*/

let largerLinkBtn = document.querySelector("")
largerLinkBtn.addEventListener("click",linkBtn)

function linkBtn(){
    let findLinks = document.querySelectorAll("a");
    findLinks.style

}