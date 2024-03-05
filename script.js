//TODO: Add Your Code Below


window.addEventListener("load", () => {
    fetch("https://handlers.education.launchcode.org/static/astronauts.json")
        .then((response) => {
            response.json().then((json) => {
                console.log(json);

                const dest = document.getElementById("container");
                

                // Showing the total number of astronauts
                dest.innerHTML += `<h2> Total Number of Astronauts: ${json.length} </h2>`;

                
                // Sorting the astronauts by hours in space from highest to lowest.
                json.sort((a, b) => b.hoursInSpace - a.hoursInSpace);



                // Showing the astronauts details
                json.map((astronaut) => {
                    dest.innerHTML += `
                        <div class="astronaut">
                            <div class="bio">
                                <h3> ${astronaut.firstName} ${astronaut.lastName} </h3>
                                <ul>
                                    <li> Hours in space: ${astronaut.hoursInSpace} </li>
                                    <li class="${astronaut.active? "active": ""}"> Active: 
                                    ${astronaut.active} </li>
                                    <li> Skills: ${astronaut.skills.join(", ")} </li>
                                </ul>
                            </div>
                            <img class="avatar" src="${astronaut.picture}"></img>
                        </div>
                    `;
                });
            });
        });
});