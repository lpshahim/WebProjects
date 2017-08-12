

    var dialogPolyfill = {};
     /*jshint browser: true*/ 
    var dialog;

    firebase.auth().onAuthStateChanged(function(user){
       if (user){

           /*$(".login-cover").hide();

           dialog = document.querySelector('#loginDialog');
           if (! dialog.showModal) {
                dialogPolyfill.registerDialog(dialog);
            }
           dialog.close();*/

       } else {

           dialog = document.querySelector('#loginDialog');
           if (! dialog.showModal) {
                dialogPolyfill.registerDialog(dialog);
            }
           dialog.showModal();
       }
    });

    $("#loginBtn").click({

        function(){

           var email = $("#loginEmail").val();
           var password = $("#loginPassword").val();

           if ((email !== "") && (password !== "")){

               $("#lognProgress").show();
               $("#loginBtn").hide();

               firebase.auth().signInWithEmailAndPassword(email,password).catch(function(error){

                    $("#loginError").show().text(error.message);

                    $("#loginProgress").hide();
                    $("#loginBtn").show();
               });
           }
       } 
    });







