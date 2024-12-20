emailjs.init({publicKey:'HQ2J_4mJFDXHoAn62'},);

let prg = 0;
let answ_n=0;
let parte_1 = false;
let parte_2=true;
let parte_3=false;
let parte_4= false;
let answ_check= false;
let answ_check_f= false;
let answ_rsplist = [];
let click_bt = false; 
let mail_pattern =  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;




let input_letters = document.getElementById("updsend");

input_letters.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("send_Bt").click();
  }
});



final_resp_fp=()=>{
    try{
        let elemn = document.getElementById("opc_6");
        Close_pop(elemn);
        setTimeout(()=>{
    
            elemn.remove();
    
    
        },250)

    }
    catch{

    }

    setTimeout(()=>{

        answ_rsplist.forEach((e) => console.log(e) );
        let leght_resp = answ_rsplist.length;
        let data_send_usr ;
        if(leght_resp == 5){

            data_send_usr = {

                Pregunta_1: answ_rsplist[0],
                Pregunta_2:answ_rsplist[1],
                Pregunta_3:answ_rsplist[2],
                Pregunta_4:answ_rsplist[3],
                Pregunta_5:answ_rsplist[4],
                pregunta_6: "none",
                pregunta_7: "none"

            };


        }
        else{
            if(leght_resp==7){

                data_send_usr = {

                    Pregunta_1: answ_rsplist[0],
                    Pregunta_2:answ_rsplist[1],
                    Pregunta_3:answ_rsplist[2],
                    Pregunta_4:answ_rsplist[3],
                    Pregunta_5:answ_rsplist[4],
                    Pregunta_6:answ_rsplist[5],
                    Pregunta_7:answ_rsplist[6]
                    
                };
                

            }


        }

        emailjs.send('service_q7v317o', 'template_4wlk2db', data_send_usr).then(
            (response) => {
              console.log('SUCCESS!', response.status, response.text);
            },
            (error) => {
              console.log('FAILED...', error);
            },
        );

        
        

       


        //Subir datos 
        let ras_1 = document.getElementById('chat_block');
        let ras_2 = document.createElement("div");
        let ras_3 = document.createElement("div");
        ras_2.className="row_mssg_6";
        ras_3.className = "sep_gl"
        const message_n=`
            <div class="circle_mssg">
                <img  src="imgs/MiddlebyBlancoLOGO.png"  >
            </div> 
            <div class="column_mssg_final_part">  
                <div class="mssg_block_final_part" id="obj" >
                    <i>Gracias por contactarnos, <br> (`+ String(answ_rsplist[3]) + `).<br> Si necesitas más información, no dudes en regresar. <br> Que tengas un excelente día. <br><br> Explora más:  </i>

                    <div class="row_st_r_1">
                        <a href= 'https://tiendafs.middleby.com.mx/' target="_blank" >
                            ¬ Food Service
                        </a>
                        <p>
                            🛒
                        </p>

                    </div>

                    <div class="row_st_r_2">
                        <a href='https://tiendares.middleby.com.mx/' target="_blank" >
                            ¬ Residencial
                        </a>
                        <p>
                            🛒
                        </p>

                    </div>

                    <div class="row_st_r_3"> 
                        <a href='https://parts-middleby.com.mx/'  target="_blank" >
                            ¬ Refacciones & Partes 
                        </a>
                        <p>
                            🛒                        
                        </p>

                    </div>

                </div>
               
            </div> `;
        ras_2.innerHTML=message_n;
        ras_1.appendChild(ras_2);
        ras_1.appendChild(ras_3);
        parte_1=true
        ras_1.scrollTo(0,prg+=150);



    },250);
    parte_4=false;




}


pgr_final_a=(a,c)=>{

    answ_check_f=true;
    Resp_Selector(String(a),"opc_6",String(c));
    parte_4=false;

}



//validacion de datos
validation =()=>{
    let pass_1= false;
    let pass_2 =false;
    

    let ras_1 = document.getElementById("nme_d1");
    let ras_2 = document.getElementById("eml_d2") ;

    let Button = document.getElementById("dta_collect");
    
    if(!mail_pattern.test(ras_2.value)){

        console.log("error_1");

        ras_2.style.animation="animation 0.2s linear 1";
        ras_2.style.backgroundColor = "#ffcece" 
        setTimeout(()=>{

            ras_2.style.animation="none";
            ras_2.style.backgroundColor = "white";
    
            
    
        },250)  
         

        
   

    }
    else{
        ras_2.style.border="none";
        pass_2=true;
    }




    if((ras_1.value).trim().length === 0){
        console.log("error_2");
        
        ras_1.style.animation="animation 0.2s linear 1";
        ras_1.style.backgroundColor = "#ffcece" 
        setTimeout(()=>{

            ras_1.style.animation="none";
            ras_1.style.backgroundColor = "white";
    
            
    
        },250)  
         



    }
    else{
        pass_1=true;
        ras_1.style.border="none";
    }

    if(pass_1 && pass_2 ==true){

        Button.textContent="Guardado";
        Button.style.backgroundColor="#62ff8d";
        parte_3=false;

        answ_rsplist.push(ras_1.value);
        answ_rsplist.push(ras_2.value);
        ras_1.disabled ="disabled";
        ras_2.disabled ="disabled";
        Button.onclick="";
        af_select();
        parte_4=true;

    }

}










//Cerrar mensajes seleccion 

Close_pop=(element)=>{
    
    element.style.transition=" height 0.2s ease 0s, width 0.3s ease 0s";
    element.style.height="0px";
    element.style.width="0px";

}

//cerrar chat o abrir
Close_window=()=>{
    let canvas = document.getElementById('main');
    let circle = document.getElementById('cir_el');
    let text_el= document.getElementById('text_el');
    let flecha = document.getElementById('arrow');
    let fila_1 = document.getElementById('line_1');
    let r_row = document.getElementById('image');

    if(click_bt==false){
    
        circle.style.display="none";
        text_el.style.display="none";
        flecha.style.right= "0px";
        flecha.style.width="50px";
        canvas.style.transition="height 0.2s ease 0s , width 0.2s ease 0s,rotate 0.3s ease 0s";
        r_row.style.rotate="0deg"
        canvas.style.width="50px";
        canvas.style.height="50px";
        canvas.style.borderRadius ="15px";
        click_bt= true;
        fila_1.style.display="block";



    }
    else{
        fila_1.style.display="flex";
        circle.style.display="flex";
        text_el.style.display="block";
        canvas.style.width="340px";
        canvas.style.height="570px";
         r_row.style.rotate="90deg"
        click_bt= false;
        canvas.style.borderRadius ="30px";
        flecha.style.right= "15px";
        flecha.style.width="30px";


    }



}


// Priner Selector 

main_selector=(a,nmid)=>{
       
    let cht = document.getElementById('chat_block');
    let spc_k = document.createElement("div");
    let ras = document.createElement("div");
    ras.className="row_mssg";
    spc_k.className="sep_gl";
    const message_n=`
        <div class="circle_mssg">
            <img  src="imgs/MiddlebyBlancoLOGO.png"  >
        </div> 
        <div class="column_mssg"> 
            <div class="mssg_block_1">
                <i>`+String(a)+`</i>
            </div>  
            <div class="mssg_block_2" id="`+String(nmid)+`"  > 
                <div class="rsp_1"  onclick= "Selector_Equipos('`+String(nmid)+`')"    id = "`+String(nmid)+"1"+`" >
                    QUIERO INFORMACION SOBRE EQUIPOS 
                </div> 
                <div class="rsp_2"   onclick= "Selector_Capacitacion('`+String(nmid)+`')" id = "`+String(nmid)+"2"+`">
                    TENGO PREGUNTAS SOBRE CAPACITACION 
                </div> 
                <div class="rsp_3"  onclick="Selector_Servicios('`+String(nmid)+`')"   id = "`+String(nmid)+"3"+`">
                    ESTOY INTERESADO EN SERVICIOS.
                </div> 
            </div>
        </div> `;
    ras.innerHTML=message_n;
    cht.appendChild(ras);
    cht.appendChild(spc_k);
    cht.scrollTo(0,prg+=250);
    



}





//respuestas Persoanlizada

Resp_Selector=(a,b,c)=>{    

    answ_rsplist.push(String(c));
    
    
    if (b !=null){
        let elemn = document.getElementById(b);
        Close_pop(elemn);
    
        setTimeout(()=>{
    
            elemn.remove();
    
    
        },250)


    }


    setTimeout(()=>{
        let ras_1 = document.getElementById('chat_block');
        let ras_2 = document.createElement("div");
        ras_2.className="row_mssg_1";
        const message_n=`
            <div class="circle_mssg">
                <img  src="imgs/MiddlebyBlancoLOGO.png"  >
            </div> 
            <div class="column_mssg_1">  
                <div class="mssg_block_a" id="obj" >
                    <i>`+String(a)+`</i>
                </div> 
                
            </div> 
            `;
        ras_2.innerHTML=message_n;
        ras_1.appendChild(ras_2);

        if(answ_check_f!=true){
            answ_check=true;
        }
        
        ras_1.scrollTo(0,prg+=150);
        parte_2=false;





    },250);
    



}

// Segundo Selector

Selector_Equipos=(a)=>{

    answ_rsplist.push("Informacion de equipo");

    let element = document.getElementById(a);
    Close_pop(element);

    setTimeout(()=>{

        element.remove();


    },250)


    setTimeout(()=>{
        let ras_1 = document.getElementById('chat_block');
        let ras_2 = document.createElement("div");
        ras_2.className = "row_mssg";
        const message_n=`
            <div class="circle_mssg">
                <img  src="imgs/MiddlebyBlancoLOGO.png"  >
            </div> 
            <div class="column_mssg"> 
                <div class="mssg_block_1">
                    <i>ENTENDIDO,<br> ¿QUE SOLUCION TE INTERESA?</i>
                </div>  
                <div class="mssg_block_2" id="opc_2" > 
                    <div class="rsp_1"   onclick="Resp_Selector('¿Que equipo tienes en mente?','opc_2','food service' )" >
                        FOOD SERVICE
                    </div> 
                    <div class="rsp_2"  onclick="Resp_Selector('¿Que equipo tienes en mente?','opc_2','Residencial' )">
                        RESIDENCIAL
                    </div> 
                    <div class="rsp_3"   onclick="Resp_Selector('¿Que equipo tienes en mente?','opc_2','Otros' )">
                        OTROS
                    </div> 
                </div>
            </div> `;
        ras_2.innerHTML=message_n;
        ras_1.appendChild(ras_2);
        parte_1=true
        ras_1.scrollTo(0,prg+=150);

    },250)
   

}


//Tercer Selector

Selector_Capacitacion=(a)=>{

    answ_rsplist.push("Informacion Capacitacion");

    let element = document.getElementById(a);
    Close_pop(element);

    setTimeout(()=>{

        element.remove();


    },250)


    setTimeout(()=>{
        let ras_1 = document.getElementById('chat_block');
        let ras_2 = document.createElement("div");
        ras_2.className="row_mssg";
        const message_n=`
            <div class="circle_mssg">
                <img  src="imgs/MiddlebyBlancoLOGO.png"  >
            </div> 
            <div class="column_mssg"> 
                <div class="mssg_block_1_1">
                    <i> Claro.<br> ¿Que tipo de capacitacion estas Buscando? </i>
                </div>  
                <div class="mssg_block_2_2"  id= "opc_3"   > 
                    <div class="rsp_1"      onclick="Resp_Selector('Comprendo ¿Cual es el equipo?','opc_3','Uso de equipos')" >
                        Uso de equipos.
                    </div> 
                    <div class="rsp_2"    onclick="Resp_Selector('¿Que marcas requieren capacitacion tecnica?','opc_3','Servicio tecnico')" ">
                        Servicio tecnico.
                    </div> 
                   
                </div>
            </div> `;
        ras_2.innerHTML=message_n;
        ras_1.appendChild(ras_2);
        parte_1=true;
        ras_1.scrollTo(0,prg+=150);

    },250)
   

}


//Cuarto selector

Selector_Servicios=(a)=>{

    answ_rsplist.push("informacion en Servicios");

    let element = document.getElementById(a);
    Close_pop(element);

    setTimeout(()=>{

        element.remove();


    },250)


    setTimeout(()=>{
        let ras_1 = document.getElementById('chat_block');
        let ras_2 = document.createElement("div");
        ras_2.className="row_mssg";
        const message_n=`
            <div class="circle_mssg">
                <img  src="imgs/MiddlebyBlancoLOGO.png"  >
            </div> 
            <div class="column_mssg"> 
                <div class="mssg_block_1">
                    <i>Claro,<br> ¿Que tipo de servicio necesitas? </i>
                </div>  
                <div class="mssg_block_2"  id = opc_4> 
                    <div class="rsp_1"     onclick="Resp_Selector('¿Que equipo requiere asesoria o mantenimiento?','opc_4','Mantenimiento y asesoria tecnica')"  >
                        MANTENIMIENTO Y ASESORIA TECNICA
                    </div> 
                    <div class="rsp_2"  onclick="Resp_Selector('¿Podrías compartirnos tu interes sobre nuestras marcas?','opc_4','Consultoria de proyecto')">
                        CONSULTORIA DE PROYECTO.
                    </div> 
                    <div class="rsp_3"   onclick="Resp_Selector('¿De qué equipo o marca necesitas asistencia post-venta?','opc_4','Post Venta')">
                        POST-VENTA
                    </div> 
                </div>
            </div> `;
        ras_2.innerHTML=message_n;
        ras_1.appendChild(ras_2);
        parte_1=true
        ras_1.scrollTo(0,prg+=150);

    },250)
   

}


af_select=()=>{
    setTimeout(()=>{
        let ras_1 = document.getElementById('chat_block');
        let ras_2 = document.createElement("div");
        let ras_3 = document.createElement("div");
        ras_3.className = "sep_gl";
        ras_2.className="row_mssg_A";
        const message_n=`
            <div class="circle_mssg">
                <img  src="imgs/MiddlebyBlancoLOGO.png"  >
            </div> 
            <div class="column_mssg_A"> 
                <div class="mssg_block_af">
                    <i> Gracias por tu interés <br> (`+String(answ_rsplist[3])+`). <br> Hemos registrado tu información <br> y un miembro de
                        nuestro equipo se pondrá en contacto contigo pronto. <br><br> ¿Hay algo más en lo que pueda
                        ayudarte?" </i>
                </div>  
                <div class="mssg_block_2_as"  id= "opc_6"   > 
                    <div class="rsp_1"  onclick  ="final_resp_fp()" >
                        No, gracias.
                        
                    </div> 
                    <div class="rsp_2"   onclick ="pgr_final_a('Adelante, estoy aquí para ayudarte.<br> ¿Cuál es tu pregunta?','pregunta')"  >
                        Sí, tengo otra pregunta.
                    </div>
                    <div class ="rsp_3"  onclick ="pgr_final_a('Con gusto. ¿Qué oferta te interesa?','Oferta')" >
                        Me gustaría conocer más sobre una oferta específica.
                        
                    </div> 
                   
                </div>
            </div> `;
        ras_2.innerHTML=message_n;
        ras_1.appendChild(ras_2);
        ras_1.appendChild(ras_3);
        parte_1=true;
        ras_1.scrollTo(0,prg+=150);

    },350)


}




//correo y nombre del usuario 
datos_usr=()=>{

  


    setTimeout(()=>{
        let ras_1 = document.getElementById('chat_block');
        let ras_2 = document.createElement("div");
        let ras_3 = document.createElement("div");
        ras_3.className="sep_gl"
        ras_2.className="row_mssg";
        const message_n=`
            <div class="circle_mssg">
                <img  src="imgs/MiddlebyBlancoLOGO.png"  >
            </div> 
            <div class="column_mssg"> 
                <div class="mssg_block_1_1">
                    <i> Para ayudarte mejor, <br>  ¿me puedes proporcionar tu <br> nombre y correo electrónico? </i>
                </div>  
                <div class="mssg_block_2_3"  id= "opc_3"   > 
                    <input class ="inp_N" placeholder="Nombre:" id="nme_d1" >
                    <input class = "inp_C" placeholder="Correo:" id ="eml_d2" >

                    <Button class="save_dta"  id="dta_collect"  onclick="validation()">

                        Guardar
       
                    </Button>
                   
                </div>
                
            
            </div> `;
        ras_2.innerHTML=message_n;
        ras_1.appendChild(ras_2);
        ras_1.appendChild(ras_3);
        parte_1=true;
        ras_1.scrollTo(0,prg+=250);

    },250)
  

}


Save_answ=()=>{

    if(answ_check_f==true){

        let value_ans = document.getElementById('updsend');
        let ras_p =  value_ans.value;
        answ_rsplist.push(ras_p);
        console.log("\n");
        
        answ_check_f=false;
        final_resp_fp();
    
       
       

    }

    if(answ_check==true){

        let value_ans = document.getElementById('updsend');
        let ras_p =  value_ans.value;
        answ_rsplist.push(ras_p);
        answ_check=false;
        datos_usr();
        parte_3=true;
       
       

    }
}



//Selector de respuesta (repetida)- [1]

Rptd_selector=()=>{

    if(parte_1==false){


        try{
            let elemn = document.getElementById("opc_1");
            Close_pop(elemn);
            setTimeout(()=>{
        
                elemn.remove();
        
        
            },250)
    
            setTimeout(()=>{
    
    
    
                main_selector(" Te puedo ayudar con lo Siguiente: " ," rptd_1 ");
    
    
    
            },250);


        }
        catch{

        }

    }
    
}

//selector de respuesta (repetida)-[2] en Progreso
//------------------------------------------------//
Rptd_answ=()=>{

    if(parte_1 ==true && parte_2 ==true){
        
       

        setTimeout(()=>{
            let ras_1 = document.getElementById('chat_block');
            let ras_2 = document.createElement("div");
            ras_2.className="row_mssg_2";
            const message_n=`
                <div class="circle_mssg">
                    <img  src="imgs/MiddlebyBlancoLOGO.png"  >
                </div> 
                <div class="column_mssg_1">  
                    <div class="mssg_block_1" id="obj" >
                        <i>Selecciona una Opcion.</i>
                    </div>  
                </div> `;
            ras_2.innerHTML=message_n;
            ras_1.appendChild(ras_2);
            parte_1=true
            ras_1.scrollTo(0,prg+=150);



        },250);



    }

    if(  parte_3 ==true){
        
        setTimeout(()=>{
            let ras_1 = document.getElementById('chat_block');
            let ras_2 = document.createElement("div");
            ras_2.className="row_mssg_2";
            const message_n=`
                <div class="circle_mssg">
                    <img  src="imgs/MiddlebyBlancoLOGO.png"  >
                </div> 
                <div class="column_mssg_1">  
                    <div class="mssg_block_1" id="obj" >
                        <i>Guarda tus datos.</i>
                    </div>  
                </div> `;
            ras_2.innerHTML=message_n;
            ras_1.appendChild(ras_2);
            parte_1=true
            ras_1.scrollTo(0,prg+=150);



        },250);



    }



    if(parte_4 ==true){
        setTimeout(()=>{
            let ras_1 = document.getElementById('chat_block');
            let ras_2 = document.createElement("div");
            let ras_3 = document.createElement("div");
            ras_2.className="row_mssg_2";
            ras_3.className = "sep_gl"
            const message_n=`
                <div class="circle_mssg">
                    <img  src="imgs/MiddlebyBlancoLOGO.png"  >
                </div> 
                <div class="column_mssg_fn_k">  
                    <div class="mssg_block_fn" id="obj" >
                        <i>Si necesitas algo en especifico,<br> Selecciona-> <br> ( Me gustaría conocer más <br> sobre una oferta específica.) </i>
                    </div>  
                </div> `;
            ras_2.innerHTML=message_n;
            ras_1.appendChild(ras_2);
            ras_1.appendChild(ras_3);
            parte_1=true
            ras_1.scrollTo(0,prg+=150);



        },250);



    }


}



//Carga del primer selector 

window.onload=()=>{
    main_selector("¿EN QUE PUEDO ASISTIRTE HOY?" ,"opc_1" );
    const myInput = document.getElementById('updsend');
    myInput.onpaste = e => e.preventDefault();
   
}



//Message Input

update_chat=(a, chat )=>{

    let ras_1 = document.getElementById(a);
    let ras_2= document.getElementById(chat);
    let ras_3 = document.getElementsByClassName("upload_let");

    if((ras_1.value).trim().length !== 0){
        let block_r = document.createElement("div");
        block_r.className= "answ_row";
        block_r.innerHTML= `<div class="answ_t"> `+ String(ras_1.value)+ `  </div>  
                            <div class ="circle_answ">  
                                <img  src="imgs/MiddlebyBlancoLOGO.png"  > 
                            </div> `;
        ras_2.appendChild(block_r);
        ras_2.scrollTo(0,prg+=100);

    }
    else{
        ras_3.onclick =null;



    }
    

 

    //implementacion cambio de forma del iput()

}




//funcionalidad de Arrastre

scroll_k=(a)=>{

    // Variables de control
    let isDragging = false;
    let startY, scrollTop;

    // Elementos del DOM
    const scrollContainer = document.getElementById(a);
    const inputHeight = document.getElementById(a);

    // Evento de mousedown: cuando el usuario comienza a "deslizar"
    scrollContainer.addEventListener('mousedown', (e) => {
    isDragging = true;
    startY = e.pageY - scrollContainer.offsetTop;  // Guardamos la posición inicial en el eje Y
    scrollTop = scrollContainer.scrollTop;  // Guardamos la posición de scroll inicial
     
    });

    // Evento de mousemove: cuando el usuario mueve el ratón mientras mantiene presionado
    scrollContainer.addEventListener('mousemove', (e) => {
    if (!isDragging) return;  // Solo ejecuta si el usuario mantiene presionado el mouse
    e.preventDefault();  // Evita el comportamiento por defecto
    const y = e.pageY - scrollContainer.offsetTop;  // Calcula la nueva posición del ratón en Y
    const moveY = (y - startY) * 1.5;  // Multiplicamos por 1.5 para darle un poco más de velocidad al movimiento
    scrollContainer.scrollTop = scrollTop - moveY;  // Mueve el contenido solo verticalmente
    });

    // Evento de mouseup: cuando el usuario suelta el botón del mouse
    scrollContainer.addEventListener('mouseup', () => {
    isDragging = false;
     
    });

    // Evento de mouseleave: cuando el mouse sale del contenedor mientras se arrastra
    scrollContainer.addEventListener('mouseleave', () => {
    isDragging = false;

    });

    // Control de tamaño del contenedor mediante input
    inputHeight.addEventListener('input', (e) => {
    scrollContainer.style.height = `${e.target.value}px`;  // Cambiar la altura del contenedor
    });


}



