var firebaseConfig = {
      apiKey: "AIzaSyCMDApjI_b5vfaKeAkuntYtHNqe_5a0RL0",
      authDomain: "kittykatkwitter.firebaseapp.com",
      databaseURL: "https://kittykatkwitter-default-rtdb.firebaseio.com",
      projectId: "kittykatkwitter",
      storageBucket: "kittykatkwitter.appspot.com",
      messagingSenderId: "307844043815",
      appId: "1:307844043815:web:dea215421aad718f4aaa02"
    };
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
    console.log("room name: "+ Room_names);
    row="<div class='room_name'id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>"
    document.getElementById("output").innerHTML+=row; 
      //End code
      });});}
      
getData();
function add_room(){
      room_name= document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
      purpose: "adding room name"
});

localStorage.setItem("room_name", room_name);
window.location="kwitter_page.html";
}

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location="kwitter_page.html";
};

function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location="index.html";

}