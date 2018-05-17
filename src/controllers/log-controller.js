var emailInput = document.getElementById("email");
var passInput = document.getElementById("senha");
var buttonLog = document.getElementById("logbt");
var displayUser = document.getElementById("user");


//Autenticar com email e senha
buttonLog.addEventListener("click",function(){
    firebase
        .auth()
            .signInWithEmailAndPassword(emailInput.value,passInput.value)
            .then(function(result){
                console.log(result);
                alert("Autenticado");
                var user = firebase.auth().currentUser;

                if (user) {
                  window.open('index.html');
                }                                  
            })
            .catch(function(error){
                console.error(error.code);
                console.error(error.message);
                alert("Falha ao autenticar");

            })

});
/*
function initApp() {
    // Listening for auth state changes.
    // [START authstatelistener]
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        // User is signed in.
        var displayName = user.displayName;
        var email = user.email;
        var emailVerified = user.emailVerified;
        var photoURL = user.photoURL;
        var isAnonymous = user.isAnonymous;
        var uid = user.uid;
        var providerData = user.providerData;
        }
      });
    }

    window.onload = function() {
      initApp();
    };*/

//LogOut
/*logbt.addEventListener("click",function(){
    firebase
        .auth()
            .signOut()
                .then(function(){
                    alert("Você se deslogou");
                },function(error){
                    console.error(error);
                });
});*/

//LogIn em outras plataformas
/*logbt.addEventListener("click",function(){
     //ao invés de Github, podemos ter facebook, twitter, google. Só suporta essas 4
    var provider = new firebase.auth.GithubAuthProvider();
    signIn(provider);
});

function signIn(provider){
    firebase.auth()
        .signInWithPopup(provider) //Ao invés de popup pode ser redirect
        .then(function(result){
            console.log(result);
            var token = result.credential.acessToken;
            })
            .catch(function(error){
                console.log(error);
                alert("Falha na autenticação");
            })
}*/
