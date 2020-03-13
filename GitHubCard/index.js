/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

// axios.get('https://api.github.com/users/CarlosAA10')
//   .then(response => {
//     console.log(response)
//     console.log(response.data.login); 
//   })

//   .catch(error => {
//     console.log(error);
//   })

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = ['cat', 'dog'];



/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/


function gitUser(object) {

  // elements created below

  const card = document.createElement('div'), 
        image = document.createElement('img'), 
        cardInfo = document.createElement('div'), 
        name = document.createElement('h3'), 
        userName = document.createElement('p'), 
        location = document.createElement('p'), 
        profile = document.createElement('p'), 
        anchor = document.createElement('a'), 
        gitfollowers = document.createElement('p'), 
        gitfollowing = document.createElement('p'), 
        bio = document.createElement('p'); 
  // elements appended below


  // classes added to elements
  card.classList.add('card'); 
  cardInfo.classList.add('card-info'); 
  name.classList.add('name'); 
  userName.classList.add('username'); 
 
  // src and textContent added to elements below
  image.src = object.data.avatar_url; 
  name.textContent = object.data.name; 
  location.textContent = `Location: ${object.data.location}`; 
  profile.textContent = `Profile: `;
  anchor.href = object.data.url;
  anchor.textContent = object.data.html_url; 
  gitfollowers.textContent = `Followers: ${object.data.followers}`; 
  gitfollowing.textContent = `Folowing: ${object.data.following}`; 
  bio.textContent = `Bio: ${object.data.bio}`; 
  


  card.append(image, cardInfo); 
  cardInfo.append(name, userName, location, profile, gitfollowers, gitfollowing, bio); 
  profile.append(anchor); 


  return card; 
}

const parent = document.querySelector('.cards'); 

axios.get('https://api.github.com/users/CarlosAA10')
  .then(response => {
    parent.append(gitUser(response)); 
    console.log(response); 
  })
; 

axios.get('https://api.github.com/users/CarlosAA10/followers')
  .then(response => {
    response.data.forEach(item => {
      followersArray.push(item.url);  
    })
  })

  .catch( error => {
    console.log('you failed homie ' +error); 
  })

  .then( () => {
    followersArray.forEach(item => {
      axios.get(item)
      .then(response => {
        parent.append(gitUser(response)); 
      })
    })
  })



/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
