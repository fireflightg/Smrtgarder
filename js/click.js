
window.onload = function sta(){
	const dbReftObject = firebase.database().ref().child("plant");
	const dbd = dbReftObject.child("cool");

dbd.on('value', function(snapshot)
    {
        if(snapshot.hasChild("2")){
        	console.log("hello");
        	document.getElementById("okey").innerText = "Plant Status: Ok";

        }
        if(snapshot.hasChild("1")){
          console.log("hello");
          document.getElementById("okey").innerText = "Plant Status: Uh oh";

        }
        else{
        	console.log("ok");

        }
    });
}
