var uploader = document.getElementById("upload");
var fileButton = document.getElementById("arquivo");

fileButton.addEventListener("change",function(e){
    //Obter arquivo
    var file = e.targer.files[0];

    //Referenciar storage
    var storageRef = firebase.storage().ref('arquivos/'+file.name);//guide para gerar nome randomico

    //Enviar o arquivo
    var task = storageRef.put(file);

    //Atualizar o progress bar
    task.on('state_changed',function progress(snapshot){
        var percentage = (snapshot.bytesTransferred/snapshot.totalBytes)*100;
        uploader.value = ércentage;
    },
    function error(err){
        console.log(err);
    },
    function complete(){
        alert("Envio Completo!");
    });



    })


