//pendiente no mostrar cancelada y 
//variables.
var agenda=[];
var similitudHoraCita=0;
var similitudHoraCitaUsuario=0;


function agendarCita(hawel)
{   
    var estado =(hawel.id);
               //alert(estado);
                if(estado=="agnCita"){
                document.getElementById("listaDeCita").style.display="none";
                document.getElementById("Buscar").style.display="none";
                document.getElementById("agendar").style.display="";
                document.getElementById("botonAgenBusc").value="Agendar";
                document.getElementById("botonAgenBusc").setAttribute("onclick","agendar()");
                }
                else if (estado=="busCita"){
                    document.getElementById("listaDeCita").style.display="none";
                    document.getElementById("agendar").style.display="none";
                    document.getElementById("Buscar").style.display="";
                    //document.getElementById("botonAgenBusc").value="Buscar";
                   // document.getElementById("botonAgenBusc").setAttribute("onclick","Buscar()");
                }
                
    }

function listaCita()
{
    document.getElementById("agendar").style.display="none";
    document.getElementById("Buscar").style.display="none";
    document.getElementById("listaDeCita").style.display="";
    document.getElementById("lista").innerHTML="";
    var ListaDeCitas="";
    //variable tiempo.
    var fechaHoy=new Date();
    var year=fechaHoy.getFullYear();
    var mes=fechaHoy.getMonth()+1;
    var dia=fechaHoy.getDate();
    if(dia<10){dia=("0"+dia);}
    var fechaActual=(year+"-"+mes+"-"+dia);
    var hora12=(fechaHoy.getHours());
    if(hora12<10){hora12=("0"+hora12);}
    var horaActual=(hora12+":"+"00");
    
    
    //validar estado expirado
    
    if(agenda.length!=0)
      {
        /*for(var i=0; i<agenda.length; i++)
        { 
                var mostrar=agenda[i].estadoCita;
                switch(mostrar)
                {
                    case "Atendido": 
                        agenda.splice(i,1);
                        break;
                    case "Cancelada": 
                        agenda.splice(i,1);
                        break;
                }
          
        }*/
        for(var i=0; i<agenda.length; i++)
            { var mostrar=agenda[i].estadoCita;
               if (mostrar!="Atendido"||"Cancelada")
               {
               var idEstadoCita="estadoCita"+i;
              
                ListaDeCitas=`<div style="border:solid 6px " id="div${i}"><li>Nombre: ${agenda[i].nombre} <br>
                        Identificacion: ${agenda[i].identificacion} Telefono: ${agenda[i].telefono}<br>
                        Fecha Cita: ${agenda[i].fecha} Hora: ${agenda[i].hora}<br>
                        Comentario: ${agenda[i].comentario}</li>
                        <label for="estadoCita">Estado:</label>
                        <select "name="" id="${idEstadoCita}" value="" onchange="estadoCita(this)">
                        <option value="Agendada">Agendada</option>
                        <option value="Expirada">Expirada</option>
                        <option value="Atendido">Atendido</option>
                        <option value="Cancelada">Cancelada</option>
                        </select>
                        </div><br> `;
            document.getElementById("lista").innerHTML+=ListaDeCitas;
            }
        }
            for(var i=0; i<agenda.length; i++)
            {
            var mostrar=agenda[i].estadoCita;
            switch(mostrar)
            {
                
                case "Agendada": 
                    var divi=("div"+i)
                    var colorBorde=document.getElementById(divi);
                    var idEstadoCita="estadoCita"+i;
   
                    if(fechaActual>agenda[i].fecha)
                       {
                          agenda[i].estadoCita="Expirada";
                          document.getElementById("estadoCita"+i).value="Expirada";
                          document.getElementById(idEstadoCita).value="Expirada";
                          colorBorde.style.border="solid 6px red";

                       }
                    else if(fechaActual==agenda[i].fecha)
                       {
                         if(horaActual>agenda[i].hora)
                            {
                              agenda[i].estadoCita="Expirada";
                              document.getElementById(idEstadoCita).value="Expirada";
                              colorBorde.style.border="solid 6px red";
                            }
                        //else {document.getElementById(idEstadoCit).value="Agendada";}

                       } 
                    
                  
                break;
                case "Expirada":
                var divi=("div"+i)
                var colorBorde=document.getElementById(divi);
                var idEstadoCita="estadoCita"+i;

                        document.getElementById(idEstadoCita).value="Expirada";
                        colorBorde.style.border="solid 6px red";
                break;
               /* case "Atendido":
                            var divi=("div"+i)
                    var colorBorde=document.getElementById(divi);
                    var idEstadoCita="estadoCita"+i;
      
                            document.getElementById(idEstadoCita).value="Atendido";
                            colorBorde.style.display="none";
                break;
                case "Cancelada":
                    var divi=("div"+i)
                    var colorBorde=document.getElementById(divi);
                    var idEstadoCita="estadoCita"+i;
   
                          document.getElementById(idEstadoCita).value="Cancelada";
                          colorBorde.style.display="none";
                break;*/
            }
                           
        
                        }//cierre for
                    }//cierre if agenda con valor
    
                }//cierre function listaCitA
                
function agendar()
{
    alert("estas Agendando")
    //Variabels Datos ingresados:
    var nombre=document.getElementById("nombre").value;
    //var apellido=document.getElementById("apellido").value;
    var identificacion=document.getElementById("identificacion").value;
    var telefono=document.getElementById("telefono").value;
    var fecha=document.getElementById("fecha").value;
    var hora=document.getElementById("hora").value;
    var comentario=document.getElementById("comentario").value;
    
    regreso_agendar_form(null);
    //Validacion campos requerido:
    function regreso_agendar_form(){
    if(nombre==""){alert("Nombre Requerido"); }
    else if(apellido==""){alert("Apellido Requerido"); }
    else if(identificacion==""){alert("Identificacion Requerido"); }
    else if(telefono==""){alert("Telefono Requerido"); }
    else if(fecha==""){alert("Fecha Requerido"); }
    else if(hora=="none"){alert("Hora Requerido"); }
    /*else if(agenda.length==0)
        {
            var confirmacion = confirm("Su Cita se Agendara para: "+fecha+" a Las: "+hora);
            if (confirmacion==true)
                {
                    agenda.push({"nombre":nombre, "identificacion":identificacion, "telefono":telefono, "fecha":fecha, "hora":hora, "comentario":comentario, "estadoCita":"Agendada"});
                }
        }
    else{*/
        
        validarHoraFechaId(nombre, hora, fecha, identificacion, telefono, comentario);  
        var confirmacion = confirm("Su Cita se Agendara para: "+fecha+" a Las: "+hora);
            if (confirmacion==true)
                {
        
                    agenda.push({"nombre":nombre, "identificacion":identificacion, "telefono":telefono, "fecha":fecha, "hora":hora, "comentario":comentario, "estadoCita":"Agendada"});
                    regresar();
                }
                else if(confirmacion==false)
                {
                    agendarCita();
                }      
     
        
    
  }
}

function regresar()
{
    document.getElementById("agendar").style.display="none";
    document.getElementById("listaDeCita").style.display="none";
    document.getElementById("nombre").value="";
    //document.getElementById("apellido").value="";
    document.getElementById("identificacion").value="";
    document.getElementById("telefono").value="";
    document.getElementById("fecha").value="";
    document.getElementById("hora").value="none";
    document.getElementById("comentario").value="";

}
function validarHoraFechaId(nombre, hora, fecha, identificacion, telefono, comentario)
{   
   
    //var fechaintro=fecha.getDay();
    var fechaHoy=new Date();
    var year=fechaHoy.getFullYear();
    var mes=fechaHoy.getMonth()+1;
    var dia=fechaHoy.getDate();
    if(dia<10){dia=("0"+dia);}
    var fechaActual=(year+"-"+mes+"-"+dia);
    var hora12=(fechaHoy.getHours());
    if(hora12<10){hora12=("0"+hora12);}
    //var horaActual=(hora12+":"+fechaHoy.getMinutes());
    var horavalida=((fechaHoy.getHours()+3)+":"+"00");
    //else {horaActual=(hora12+":"+fechaHoy.getMinutes());}
    
    //validar hora digitada
    if(fecha>fechaActual){
        switch(hora)
            {
                case "08:00":break;  case "09:00":break;
                case "10:00":break; case "11:00":break;
                case "13:00":break; case "14:00":break;
                case "15:00":break; case "16:00":break;
                default: alert("La hora Digitada no esta Disponible");
                regreso_agendar_form();
            }
    }
    else if(fecha<fechaActual){alert("Fecha no valida"); regreso_agendar_form();}
    else
    {
        if (hora<horavalida)
        {alert("La hora Digitada no Disponible"); regreso_agendar_form();}

    }
    
//validar que no sean mas de 2 citas en el mismo horario

for(var i=0; i<agenda.length; i++)
        {
        var horaguardada=agenda[i].hora;
        if(horaguardada==hora){
       
            var fechaguardada=agenda[i].fecha;
            
            if(fechaguardada==fecha)
                {
                  similitudHoraCita=similitudHoraCita+1;
             var idguardada=agenda[i].identificacion;
                
             if(idguardada==identificacion)
                   {
                        similitudHoraCitaUsuario=1;
                      
                 }
                    
               
        }
      }
    }
        if (similitudHoraCitaUsuario==1){
            similitudHoraCitaUsuario==0;
            alert("Ya tiene una cita agendada en esta fecha y horario");
            
        
        }
    else if(similitudHoraCita==2){
        
        alert ("Para el "+fecha+": el horario de : "+hora+" !Se encuentra lleno!");
        //alert(JSON.stringify(agenda));
        
    }
    
        
    
    
        similitudHoraCitaUsuario=0;
        similitudHoraCita=0;
        
    





}
function estadoCita(estado)
{
   var estadoDeCita=estado.id; 
   var estadoActual=document.getElementById(estadoDeCita).value;
   var estado=estadoDeCita.substr(estadoDeCita.length-1);
   agenda[estado].estadoCita=estadoActual;
   var colorBorde=document.getElementById("div"+estado);
   alert(estadoDeCita);
    switch(estadoActual)
    {
        case "Agendada": colorBorde.style.border="solid 6px black";
        break;
        case "Expirada": colorBorde.style.border="solid 6px red";
        break;
        case "Atendido": 

        var confirmacion= confirm("Se !Eliminara esta cita de la agenda!");
                if(confirmacion==true){
                         colorBorde.style.display="none";
                         agenda.splice(estado,1);
                }
                else {agenda[estado].estadoCita="Agendado"; listaCita();}//document.getElementById(estado).value="Agendado"}
        break;
        case "Cancelada": 
        var confirmacion= confirm("Se !Eliminara esta cita de la agenda!");
                if(confirmacion==true){
                         colorBorde.style.display="none";
                        agenda.splice(estado,1);
                }
                else if (confirmacion==false) {agenda[estado].estadoCita="Agendado"; listaCita();}
        break;
    }


    //alert(JSON.stringify( agenda));
    //agenda[JSON.parse( coral)].estadoCita="lop";
    //alert(JSON.stringify( agenda));
}
function Buscar()
{

//Variabels Datos ingresados:
var buscarNombre=document.getElementById("buscarNombre").value;
var buscarIdentificacion=document.getElementById("buscarIdentificacion").value;
var fechaInicio=document.getElementById("fechaInicial").value;
var fechaFinal=document.getElementById("fechaFinal").value;
var buscarEstado=document.getElementById("selecBusqueda").value;
document.getElementById("Buscarlista").innerHTML="";

//var estadoCita=document.getElementById("estadoCita").value;
if (buscarIdentificacion!=""){
    for(var i=0; i<agenda.length; i++)
            { var buscarId=agenda[i].identificacion;
                
                if(buscarIdentificacion==buscarId)
                {
               var idEstadoCita="estadoCita"+i;             
                ListaDeCitas=`<div style="border:solid 6px " id="div${i}"><li>Nombre: ${agenda[i].nombre} <br>
                        Identificacion: ${agenda[i].identificacion} Telefono: ${agenda[i].telefono}<br>
                        Fecha Cita: ${agenda[i].fecha} Hora: ${agenda[i].hora}<br>
                        Comentario: ${agenda[i].comentario}</li>
                        <label for="selectBusqueda">Estado:</label>
                        <select id="selectBusqueda">
                        <option value=""></option>
                        <option value="Agendada">Agendada</option>
                        <option value="Expirada">Expirada</option>
                        <option value="Atendido">Atendido</option>
                        <option value="Cancelada">Cancelada</option>
                       </select>
                        </div><br> `;
            document.getElementById("Buscarlista").innerHTML+=ListaDeCitas;
                }
        }
    }
    else if (buscarNombre!=""){
        
        for(var i=0; i<agenda.length; i++)
            { var buscarNom=agenda[i].nombre;
                alert(fechaInicio+"/"+agenda[i].fecha+"/"+fechaFinal);
                if(buscarNombre==buscarNom)
                {
               //var idEstadoCita="estadoCita"+i;
              
                ListaDeCitas=`<div style="border:solid 6px " id="div${i}"><li>Nombre: ${agenda[i].nombre} <br>
                        Identificacion: ${agenda[i].identificacion} Telefono: ${agenda[i].telefono}<br>
                        Fecha Cita: ${agenda[i].fecha} Hora: ${agenda[i].hora}<br>
                        Comentario: ${agenda[i].comentario}</li>
                        <label for="selectBusqueda">Estado:</label>
                        <select id="selectBusqueda">
                        <option value=""></option>
                        <option value="Agendada">Agendada</option>
                        <option value="Expirada">Expirada</option>
                        <option value="Atendido">Atendido</option>
                        <option value="Cancelada">Cancelada</option>
                       </select>
                        </div><br> `;
            document.getElementById("Buscarlista").innerHTML+=ListaDeCitas;
                }
        }
    }
    else if (buscarEstado!="none"){
        for(var i=0; i<agenda.length; i++)
            { var buscarEst=agenda[i].estadoCita;
                
                if(buscarEstado==buscarEst)
                {
               //var idEstadoCita="estadoCita"+i;
              
                ListaDeCitas=`<div style="border:solid 6px " id="div${i}"><li>Nombre: ${agenda[i].nombre} <br>
                        Identificacion: ${agenda[i].identificacion} Telefono: ${agenda[i].telefono}<br>
                        Fecha Cita: ${agenda[i].fecha} Hora: ${agenda[i].hora}<br>
                        Comentario: ${agenda[i].comentario}</li>
                        <label for="selectBusqueda">Estado:</label>
                        <select id="selectBusqueda">
                        <option value=""></option>
                        <option value="Agendada">Agendada</option>
                        <option value="Expirada">Expirada</option>
                        <option value="Atendido">Atendido</option>
                        <option value="Cancelada">Cancelada</option>
                       </select>
                        </div><br> `;
            document.getElementById("Buscarlista").innerHTML+=ListaDeCitas;
                }
        }
    }
    else if (fechaInicio!=""){
        
        for(var i=0; i<agenda.length; i++)
            { alert(fechaInicio+"/"+agenda[i].fecha+"/"+fechaFinal);
                var buscarFec=agenda[i].fecha;
                
                if(buscarFec>fechaInicio)
                {
                    if(buscarFec<fechaFinal)
                    {
               //var idEstadoCita="estadoCita"+i;
              
                ListaDeCitas=`<div style="border:solid 6px " id="div${i}"><li>Nombre: ${agenda[i].nombre} <br>
                        Identificacion: ${agenda[i].identificacion} Telefono: ${agenda[i].telefono}<br>
                        Fecha Cita: ${agenda[i].fecha} Hora: ${agenda[i].hora}<br>
                        Comentario: ${agenda[i].comentario}</li>
                        <label for="selectBusqueda">Estado:</label>
                        <select id="selectBusqueda">
                        <option value=""></option>
                        <option value="Agendada">Agendada</option>
                        <option value="Expirada">Expirada</option>
                        <option value="Atendido">Atendido</option>
                        <option value="Cancelada">Cancelada</option>
                       </select>
                        </div><br> `;
            document.getElementById("Buscarlista").innerHTML+=ListaDeCitas;
                }
            }
        }
    }
        document.getElementById("burcarCita").style.display="";

}
						
