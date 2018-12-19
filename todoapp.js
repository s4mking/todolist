//  localStorage.clear();
function testsam(){
        localStorage.clear();
        var valueAdd=document.getElementById('valeur').value;
        var description=document.getElementById('description').value;
        var valueDateTodo=document.getElementById('dateTodo').value;
        var newDiv = document.createElement('li');
    if(valueAdd==''|| description==''||valueDateTodo==''){
        alert('Vous devez rentrer tous les champs!!!');
    }
    else{
        //Declaration text node
        var cross= document.createTextNode("\u00D7");
        var childValid=document.createTextNode('\u2713');
        var childValue= document.createTextNode(valueAdd);
        var childDescription= document.createTextNode(description);
        var childDate= document.createTextNode(valueDateTodo);
            
        //declaration element span
        var spanAdd=document.createElement('button');
        var spanValid=document.createElement('button');

        spanValid.addEventListener("click", function(){
            if(this.parentElement.style.textDecoration=='line-through'){
                    this.parentElement.style.textDecoration ='none';
                }
            else{
                this.parentElement.style.textDecoration ='line-through';
                }
            })
        var spanDescription=document.createElement('span');
        var spanDate=document.createElement('span');
        var spanName=document.createElement('span');

        //Ajout text au span
        spanName.appendChild(childValue);
        spanValid.appendChild(childValid);
        spanDate.appendChild(childDate);
        spanDescription.appendChild(childDescription);
        spanAdd.appendChild(cross);

        spanAdd.className='delete';
        spanValid.className='valid';
        newDiv.className=valueAdd;
        document.getElementById('todolist').appendChild(newDiv);

        //Ajout au li
        newDiv.appendChild(spanDate);
        newDiv.appendChild(spanName);
        newDiv.appendChild(spanDescription);
        newDiv.appendChild(spanAdd);
        newDiv.appendChild(spanValid);


        //Ajout ,nouveau bouton

        var liste_bouton=document.getElementsByClassName('delete_name');
        var test_presence_bouton=0;
        for(var l=0;l<liste_bouton.length;l++){
            if(liste_bouton[l].id==valueAdd){
                test_presence_bouton=1;
            }
        }
        if(test_presence_bouton==0){
            var liste_bouton = document.getElementsByClassName('delete_name');
            var div_button =document.getElementById('delete_select');
            var new_button=document.createElement('button');
            new_button.setAttribute('person',valueAdd);
            new_button.textContent='Supprimer '+valueAdd;
            new_button.classList.add('delete_name');
            new_button.id=valueAdd;
            div_button.appendChild(new_button);

        new_button.addEventListener('click', function(){
        var classGen=this.id;
        var listeClassDelete = document.getElementsByClassName(classGen);
        for(var k = 0; k < listeClassDelete.length; k++) {
                listeClassDelete[k].style.display='none';
            }       
            this.parentNode.removeChild(this);
        })

        }

        var listDelete = document.getElementsByClassName('delete');
        for(var i= 0; i<listDelete.length;i++) {
            listDelete[i].addEventListener("click", function() {
                var par=this.parentNode;
                par.parentElement.removeChild(par);
                var classObj=this.parentElement.className;
                var listeDelTest=document.getElementsByClassName(classObj);
                if(listeDelTest.length==''){
                    var id_del = document.getElementById(classObj);
                    id_del.parentNode.removeChild(id_del);
                }
                
            })
        }
    }
        
}

    //eventlistener sur le load de la pge
    window.addEventListener("load", function(){   
        var codeHtml=localStorage.getItem('codepage');
        //Ajout d'un bouton pour reset le cache 
        document.querySelector('#resetcache').addEventListener('click',function(){
            // localStorage.clear();
            // location.reload();
            alert('toto');
        });
        window.addEventListener('beforeunload', function(){
            var markup = document.documentElement.innerHTML;
            localStorage.setItem('codepage',markup); 
        });
        if(codeHtml!=null){
            document.documentElement.innerHTML=codeHtml;
        }

        document.getElementById('add').addEventListener('click', function(){
            testsam();
        });
        //Ajout des events listeners lors du reload 
        document.getElementById('button_delete_all').addEventListener('click', function(){
            var myNode = document.getElementById("todolist");
        while (myNode.firstChild) {
            myNode.removeChild(myNode.firstChild);
            }
             var listeClassDelete = document.querySelectorAll('.delete_name');
            for(var k = 0; k < listeClassDelete.length; k++){
            var pars=listeClassDelete[k];
            pars.parentNode.removeChild(pars); 
                }     
        })

   var liste_bouton = document.getElementsByClassName('delete_name'); 
    for(var listeb=0;listeb<liste_bouton.length;listeb++){
        liste_bouton[listeb].addEventListener('click', function(){
            var classGen=this.id;
            var listeClassDelete = document.querySelectorAll('.'+classGen);
            this.parentNode.removeChild(this);
            for(var k = 0; k < listeClassDelete.length; k++){
              var pars=listeClassDelete[k];
              pars.parentNode.removeChild(pars); 
            }
        });      
    }
    var listDelete = document.getElementsByClassName('delete');
    for(var i= 0; i<listDelete.length;i++) {
            listDelete[i].addEventListener("click", function() {
                var par=  this.parentElement
                 par.parentElement.removeChild(par);
                var classObj=this.parentElement.className;
                var listeDelTest=document.getElementsByClassName(classObj);
                if(listeDelTest.length==''){
                    var id_del = document.getElementById(classObj);
                    id_del.parentNode.removeChild(id_del);
                }
                
                
        })
 }

 var listeValid = document.getElementsByClassName('valid');
 for(var u= 0; u<listeValid.length;u++) {
    listeValid[u].addEventListener("click", function() {
            if(this.parentElement.style.textDecoration=='line-through'){
                this.parentElement.style.textDecoration ='none';
            }
        else{
            this.parentElement.style.textDecoration ='line-through';
            }
        })
        
    }
});