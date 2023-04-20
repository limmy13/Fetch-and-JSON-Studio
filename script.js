// window.addEventListener("load", async function() {
//     async function astronauts(event) {
//       let response = await fetch("https://handlers.education.launchcode.org/static/astronauts.json");
//       let jsonData = await response.json();
    

//       for (let i = 0; i < jsonData.length; i++) {
//         let astronaut = jsonData[i]; // Access the current object in the array
//         console.log(astronaut); // Print the current astronaut object
//         // You can access properties of the astronaut object like astronaut.name, astronaut.age, etc.
//     }
//     }
  
//     await astronauts(); // Call the astronauts() function to execute the GET request
//   });

window.addEventListener("load", function() {
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response) {
        return response.json();
    }).then(function(jsonResponse) {
        let container = document.getElementById("container");
        let astronautItems = "";
        jsonResponse.forEach(function(astronaut) {
            astronautItems += `
                <div class=astronaut>
                    <div class=bio>
                        <h3>${astronaut.firstName} ${astronaut.lastName}</h3>
                        <ul>
                            <li>Hours in space: ${astronaut.hoursInSpace}</li>
                            <li>Active: ${astronaut.active}</li>
                            <li>Skills: ${astronaut.skills.join(", ")}</li>
                        </ul>
                    </div>
                    <img class=avatar src=${astronaut.picture}>
                </div>
            `;
        });
        container.innerHTML = astronautItems;
    })
});




 

  