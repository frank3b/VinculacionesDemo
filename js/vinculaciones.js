/**
 * 
 */

function validarIngreso(){	
	$.mobile.loading('show');
	$('#mensaje').hide();
	$('#mensaje').text( '' );
	
	var usuario = $('#usuario').val();
    var password = $('#password').val();
    
    if(usuario != null && password != null && usuario != '' && password != ''){
        
        var query = new Kinvey.Query();
        query.equalTo('login', usuario);
        Kinvey.DataStore.find('USUARIOS', query, {
            success: function(response) {
                
                if(password == response[0].password){
                    $.mobile.changePage("#vinculacion", {
                            transition: "pop",
                            reverse: false,
                	        changeHash: false
                	});
                    
                    var txtBienv = "Bienvenido: " + response[0].nombre;
    				$('#bienvenidaText').text(txtBienv);
    				
    				$( "#resetButton" ).click();
                } else {
                    $('#mensaje').show();
                    $('#mensaje').text( 'El nombre de usuario o la contrase\u00F1a introducidos no son correctos.' );
                }                
                $.mobile.loading('hide');
            },
            error: function(error){
    			console.log(error);
				$('#mensaje').show();
    	        $('#mensaje').text( 'El nombre de usuario o la contrase\u00F1a introducidos no son correctos.' );
    	        $.mobile.loading('hide');
			}
        });
       
        
	} else {
		$('#mensaje').show();
		$('#mensaje').text( 'Debe ingresar el nombre de usuario y la contrase\u00F1a.' );
		$.mobile.loading('hide');
	}  
	
}

function salir(){
	$("#mensaje").hide();
	$("#mensajeVinculacion").hide();
	
	$('#mensaje').text("");
	$('#mensajeVinculacion').text("");
	
	$('#usuario').val("");
	$('#password').val("");
	
}

function guardar(){
	
	$.mobile.loading('show');
	$("#mensajeVinculacion").removeClass("error");
	$('#mensajeVinculacion').hide();
	$('#mensajeVinculacion').text( ' ' );
	
	var tipo_documento = $('#tipoDocumento').val();
	var numero_documento = $('#numeroDocumento').val();
	
	if(tipo_documento == null || tipo_documento == ''){
		$('#mensajeVinculacion').addClass('error');
		$('#mensajeVinculacion').show();
		$('#mensajeVinculacion').text('El tipo de documento es requerido.');
	} else if(numero_documento == null || numero_documento == ''){
		$('#mensajeVinculacion').addClass('error');
		$('#mensajeVinculacion').show();
		$('#mensajeVinculacion').text('El numero de documento es requerido.');
	} else {
		$('#mensajeVinculacion').addClass('success');
		$('#mensajeVinculacion').show();
		$('#mensajeVinculacion').text( 'La informaci\u00F3n se ha almacenado correctamente.' );
	}
	
	$.mobile.loading('hide');
}

function segmentar(){
	$('#mensajeVinculacion').show();
	$('#mensajeVinculacion').addClass('success');
	$('#mensajeVinculacion').text('El proceso de segmentaci\u00F3n termino exitosamente.');
	
	$('#segmento').val("PERSONAL PLUS");
	$('#subsegmento').val("Basico");
	$('#tamanoComercial').val("0.00");
	
	$('#identificacionDiv').trigger('collapse');
	$('#ubicacion').trigger('collapse');
	$('#datosFinancieros').trigger('collapse');
	$('#determinarCiiuButton').trigger('collapse');
	$('#datosGenerales').trigger('expand');
	$('#segmento').trigger("focus");
}

function validarListasControl(){
	$('#mensajeVinculacion').show();
	$('#mensajeVinculacion').addClass('info');
	$('#mensajeVinculacion').text('No se encuentra en listas de control.');
}



function consultarVinculados() {
	
	var data = getViculados();
	
	if(data != null){
		
		var clientes = data.respuesta.clientes;
		
		$.each(clientes, function(index, obj) {
			console.log("iterando cliente: " + obj.cliente.nombre);
			var item = "<li><a href=\"#vinculacion\"> "+
			"<h3>" + obj.cliente.nombre +"</h3>" +
			"<p><strong>Cedula:</strong> "+ obj.cliente.cedula +"</p>" +
			"<p class=\"ui-li-aside\"><strong>"+ obj.cliente.estado +"</strong></p>" +
			"</a></li>";
			
			
			$("#customerList").append(item);
            //$("#customerList").listview("refresh");
		});
		
	}
	
	
}


function consultarVinculado(){
	var tipo_documento = $('#tipoDocumento').val();
	var numero_documento = $('#numeroDocumento').val();
	
	var queryDoc = new Kinvey.Query();
	var queryTipoDoc = new Kinvey.Query();
    queryDoc.equalTo('numero_documento', numero_documento);
	queryTipoDoc.equalTo('tipo_documento', tipo_documento);
	queryDoc.and(queryTipoDoc);
	alert("consultarVinculado...");
    Kinvey.DataStore.find('VINCULACIONES', queryDoc, {
        success: function(response) {                
           $('#mensajeVinculacion').show();
           $('#mensajeVinculacion').addClass('warning');
	       $('#mensajeVinculacion').text( 'Encontro el vinculado...' + response[0].primer_nombre );
        },
        error: function(error){
			console.log(error);
			$('#mensajeVinculacion').show();
			$('#mensajeVinculacion').addClass('warning');
	        $('#mensajeVinculacion').text( 'El nombre de usuario o la contrase\u00F1a introducidos no son correctos.' );
	        
		}
    });
}

function getViculados() {
	var json = {
		"respuesta" : {
			"clientes" : [ {
				"cliente" : {
					"nombre" : "Frank Bedoya",
					"estado" : "Pendiente",
					"cedula" : "66576512"
				}
			}/*, {
				"cliente" : {
					"nombre" : "Avery Walke",
					"estado" : "Activo",
					"cedula" : "98798234"
				}
			}, {
				"cliente" : {
					"nombre" : "Walter White",
					"estado" : "Pendiente",
					"cedula" : "76009384"
				}
			}, {
				"cliente" : {
					"nombre" : "Dexter Morgan",
					"estado" : "Rechazado",
					"cedula" : "1235463"
				}
			}, {
				"cliente" : {
					"nombre" : "Stephen Weber",
					"estado" : "Activo",
					"cedula" : "872348398"
				}
			}*/ ]
		}

	};
	
	return json;

}

function iniciarCampos(){
	
	$("#mensaje").hide();
	$("#mensajeVinculacion").hide();
	
	$("#segmento").attr('readonly', true);
	$("#subsegmento").attr('readonly', true);
	$("#tamanoComercial").attr('readonly', true);
	$("#llaveCRM").attr('readonly', true);
	
}