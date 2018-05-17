var nameInput = document.getElementById("usuario");
var passInput = document.getElementById("senha");
var emailInput = document.getElementById("email");
var campusInput = document.getElementById("campus");
var cursoInput = document.getElementById("curso");
var buttonCad = document.getElementById("cadbt");


buttonCad.addEventListener('click',function(){
    firebase
        .auth()
            .createUserWithEmailAndPassword(emailInput.value,passInput.value)
            .then(function(){
                var data = {
                    Ref : firebase.auth().currentUser.uid,
                    Nome : nameInput.value,
                    Senha : passInput.value,
                    Email : emailInput.value,
                    Campus : campusInput.value,
                    Course : cursoInput.value                 
                }
                firebase.database().ref().child('Aluno').push(data);
                console.log("Cadastro feito com sucesso!");
                alert("Cadastro feito com sucesso!!");
                                
            })
            .catch(function(error){
                console.error(error.code);
                console.error(error.message);
                alert("Falha ao cadastrar, ver console");
            });
            
});




