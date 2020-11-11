var cesar = cesar || (function(){
    //tenemos que entender que para poder cifrar o descifrar
    //es necesario obtener 3 parametros
    //txt, desp, action
    var doStaff = function(txt, desp, action){
        //nota ya estamos mal, la nueva version de JS
        //ya no maneja var, ahora todo es let y const
        //besos y comercial wiiiii
        var replace = (function(){
            //necesito un alfabeto
            var abc = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i',
        'j', 'k', 'l', 'm', 'n', 'ñ', 'o', 'p', 'q', 'r', 's', 't', 'u', 
        'v', 'w', 'x', 'y', 'z'];

        var l = abc.length;
        //tenemos que crear una funcion que se encargue de poder realizar
        //el cambio de las posiciones de las letras para el
        //cifrado
        return function(c){
            var i = abc.indexOf(c.toLowerCase());
            console.log(c);
            console.log("si");
            //reemplazo de las posiciones o el movimiento
            //primero tenemos que saber si el texto esta vacio
            if(i != -1){
                //movimiento de las posiciones
                var pos = i;
                if(action){
                    //cifrar
                    pos = math.mod(pos+desp,27);
                }else{
                    //descifrando
                    pos = math.mod(pos-desp,27);
                }
                return abc[pos];
            }
            return c;
        };

    })();

    //vamos a necesitar regresar el reemplazo de la cadena
    //pero primero hay que verificarlo
    var re = (/[a-zñ]/ig);
    return String(txt).replace(re, function(macth){
        //se encarga de buscar las coincidencias entre la
        //expresion regular y el textarea
        return replace(macth);
    });
    
    };

    //necesito enviar si vamos a cifrar o descifrar
    return {
        //el caso para cuando cifras
        encode : function(txt, desp){
            return doStaff(txt, desp, true);
        },
        decode : function(txt, desp){
            return doStaff(txt, desp, false);
        }
    };

})();


//crear las funciones codificar y decodificar

function codificar(){
    document.getElementById("resultado").innerHTML = 
    cesar.encode(document.getElementById("cadena").value, parseInt(document.getElementById("clave").value));
    
}

function decodificar(){
    document.getElementById("resultado").innerHTML = 
    cesar.decode(document.getElementById("cadena").value, parseInt(document.getElementById("clave").value));
}

/// VALIDACION

const txtval = document.getElementById("cadena");
const claveval = document.getElementById("clave");

txtval.addEventListener('keyup', (e) => {
	let valor = e.target.value;
	txtval.value = valor.replace(/[^a-zA-zñÑ]/g, '');
});


claveval.addEventListener('keyup', () => {
     
	claveval.value = claveval.value
	// Eliminar los espacios
	.replace(/\s/g, '')
	// Eliminar las letras
	.replace(/[^-0-9]/g, '');
});
function validar(que){
    document.getElementById("resultado").innerHTML = " ";
    txtval.value = txtval.value.replace(/[0-9]/g, '');
    claveval.value = claveval.value
    // Eliminar los espacios
    .replace(/\s/g, '')
    // Eliminar las letras
    .replace(/[^\-0-9]/g, '');
    let cont = 0;
    for (let i = 0; i < claveval.value.length; i++) {
        if(claveval.value.charAt(i)=="-"){
            cont++;
        }else{

        }
        
    }
    if(cont>1){
        claveval.value ="";
    }else{

    }
    let val = false;
    if(txtval.value == "" || claveval.value ==""){

    }else{
        val = true;
    }
    if(val){
        if(que){
            codificar();
        }else{
            decodificar();
        }  
    }else{
        document.getElementById("resultado").innerHTML = "Aviso: Asegurese de solo escribir letras en el campo de texto y numeros enteros en el campo clave";
        
    }

}