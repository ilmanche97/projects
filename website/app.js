/* Global Variables */
// Create a new date instance dynamically with JS


// Personal API Key for OpenWeatherMap API
// Lesson 4: Credentials and API keys

let baseURL = 'http://api.openweathermap.org/data/2.5/forecast?zip=' //api
let apiKey = '&appid=e0712e239d991e993420243c98e65118';


  let d = new Date();
  let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

  
 


// Event listener to add function to existing HTML DOM element
document.getElementById('generate').addEventListener('click', performAction);
/* Function called by event listener */
function performAction(e){ // Lesson 4: Adding Fetch to Your Code


    const newzip = document.getElementById('zip').value;
    const newfeelings = document.getElementById('feelings').value;

  
  getWeather(baseURL, newzip, apiKey)
  // New Syntax!
  .then(function(data){
    // Add data
    console.log(data);
    postData('/add', { temp: data.list[0].main.temp, date: newDate, content: newfeelings }); // Input from Stackoverflow - Soruce:https://stackoverflow.com/questions/41402181/openweathermap-api-uncaught-typeerror-cannot-read-property-temp-of-undefine
  })
  .then(
    updateUI() //Lesson 4: Updating UI Elements

  )
  
}
/* Function to GET Web API Data*/
//Lesson 3: Understanding Server & Client Side Code
//Lesson 4: Async Promises
//Lesson 4: Adding Fetch to Your Code


const getWeather = async (baseURL, zip, key)=>{


    const res = await fetch(baseURL+zip+key)
    try {
      const data = await res.json();
      console.log(data)
      return data;
    } catch(error) {
      console.log("error", error);
      // appropriately handle the error
    }
  }


/* Function to POST data */
const postData = async ( url = '', data = {})=>{


    const response = await fetch(url, {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data), // body data type must match "Content-Type" header        
  });


    try {
      const newData = await response.json();
      return newData
    }catch(error) {
    console.log("error", error);
    }
}




/* Function to GET Project Data */
// Lesson 4: Updating UI Elements!!!

  const updateUI = async () => {
    const request = await fetch('/all');
    try{
      const allData = await request.json();
      document.getElementById('date').innerHTML =  allData[0].date;
      document.getElementById('temp').innerHTML = allData[0].temp;
      document.getElementById('content').innerHTML =allData[0].content;
  
  
    }catch(error){
      console.log("error", error);
    }
  }