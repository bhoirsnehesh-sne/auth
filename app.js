var provider = new firebase.auth.FacebookAuthProvider();

function facebookSignin() {
   firebase.auth().signInWithPopup(provider)
   
   .then(function(result) {
      var token = result.credential.accessToken;
      var user = result.user;
		
      console.log(token);
      console.log(user);
      console.log('Signin successful!');
   }).catch(function(error) {
     console.log('Signin failed!');
      console.log(error.code);
      console.log(error.message);
      
   });
}

function facebookSignout() {
   firebase.auth().signOut()
   
   .then(function() {
      console.log('Signout successful!');
   }, function(error) {
      console.log('Signout failed');
   });
}
