//console.log("hello world")//js connected
/*user finds a list or <ul>.... for each <li> there is a button to delete the li.
there is also a <form> that allows the user to enter info about a new party
once the form is filled out, the user can submit it and the form item should be added to the <ul>
with a button to delete as well*/

//connect to ul in html
const ul = document.querySelector(".parties");
//in the HTML, the <ul> has a class of "parties"

//we need to grab the party list from the provided server
async function fetchParties(){
  const response = await fetch("https://fsa-crud-2aa9294fe819.herokuapp.com/api/2307-CPU-RM-WEB-FT/events");
  console.log(response)
  const json = await response.json()//when using fetch we have to double await
  console.log(json)
  eventList = json.data;
  console.log(eventList);//array of events with: names, descriptions, id
  render()//calling the render function
}
fetchParties()

//create the render function that will take the data and update the UI
function render(){
  html = eventList.map((event) =>{
    return `<li> ${event} </li>`
  }).join('');
}