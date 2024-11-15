
let prg = 0;
let answ_n=0;
let parte_1 = false;
let parte_2=true;
let answ_check= false;
let answ_rsplist = [];
let click_bt = false; 





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
    let ras = document.createElement("div");
    ras.className="row_mssg";
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
    cht.scrollTo(0,prg+=250);
    



}





//respuestas Persoanlizada

Resp_Selector=(a,b)=>{


    
    let elemn = document.getElementById(b);
    elemn.style.transition=" height 0.1s ease 0s";
    elemn.style.height= "0px";

    setTimeout(()=>{

        elemn.remove();


    },250)

    
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
        answ_check=true;
        ras_1.scrollTo(0,prg+=150);
        parte_2=false;





    },250);
    



}










// Segundo Selector

Selector_Equipos=(a)=>{

    let element = document.getElementById(a);
    element.style.transition=" height 0.1s ease 0s"
    element.style.height= "0px";

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
                    <i>ENTENDIDO,<br> ¿QUE SOLUCION TE INTERESA?</i>
                </div>  
                <div class="mssg_block_2" id="opc_2" > 
                    <div class="rsp_1"   onclick="Resp_Selector('¿Que equipo tienes en mente?','opc_2' )" >
                        FOOD SERVICE
                    </div> 
                    <div class="rsp_2"  onclick="Resp_Selector('¿Que equipo tienes en mente?','opc_2' )">
                        RESIDENCIAL
                    </div> 
                    <div class="rsp_3"   onclick="Resp_Selector('¿Que equipo tienes en mente?','opc_2' )">
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

    let element = document.getElementById(a);
    element.style.transition=" height 0.1s ease 0s"
    element.style.height= "0px";

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
                    <div class="rsp_1"      onclick="Resp_Selector('Comprendo ¿Cual es el equipo?','opc_3')" >
                        Uso de equipos.
                    </div> 
                    <div class="rsp_2"    onclick="Resp_Selector('¿Que marcas requieren capacitacion tecnica?','opc_3')" ">
                        Servicio tecnico.
                    </div> 
                   
                </div>
            </div> `;
        ras_2.innerHTML=message_n;
        ras_1.appendChild(ras_2);
        parte_1=true
        ras_1.scrollTo(0,prg+=150);

    },250)
   

}


//Cuarto selector

Selector_Servicios=(a)=>{

    let element = document.getElementById(a);
    element.style.transition=" height 0.1s ease 0s"
    element.style.height= "0px";

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
                    <div class="rsp_1"    " onclick="Resp_Selector('¿Que equipo requiere asesoria o mantenimiento?','opc_4')"  >
                        Mantenimiento y asesoria tecnica
                    </div> 
                    <div class="rsp_2"  onclick="Resp_Selector('¿Podrías compartirnos tu interes sobre nuestras marcas?','opc_4')">
                        Consultoria de proyecto.
                    </div> 
                    <div class="rsp_3"   onclick="Resp_Selector('¿De qué equipo o marca necesitas asistencia post-venta?','opc_4')">
                        Post-Venta
                    </div> 
                </div>
            </div> `;
        ras_2.innerHTML=message_n;
        ras_1.appendChild(ras_2);
        parte_1=true
        ras_1.scrollTo(0,prg+=150);

    },250)
   

}


Save_answ=()=>{

    if(answ_check==true){

        let value_ans = document.getElementById('updsend');
        let ras_p =  value_ans.value;

        answ_rsplist.push(ras_p);


        answ_rsplist.forEach((e) => console.log(e) );
        answ_check=false;





    }





}



//Selector de respuesta (repetida)- [1]

Rptd_selector=()=>{

    if(parte_1==false){



        let elemn = document.getElementById("opc_1");
        elemn.style.transition=" height 0.1s ease 0s";
        elemn.style.height= "0px";
    
        setTimeout(()=>{
    
            elemn.remove();
    
    
        },250)

        setTimeout(()=>{



            main_selector(" Te puedo ayudar con lo Siguiente: " ," rptd_1 ");



        },250);
    

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

    let block_r = document.createElement("div");
    block_r.className= "answ_row";
    block_r.innerHTML= `<div class="answ_t"> `+ String(ras_1.value)+ `  </div>  
                        <div class ="circle_answ">  
                            <img  src="imgs/MiddlebyBlancoLOGO.png"  > 
                        </div> `;
    ras_2.appendChild(block_r);
    ras_2.scrollTo(0,prg+=100);

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



