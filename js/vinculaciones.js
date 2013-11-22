/**
 * 
 */

var vinculado = null;

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
		
		if(vinculado == null){
			vinculado = {};
			
			vinculado.tipo_documento = $('#tipoDocumento').val();
			vinculado.numero_documento = $('#numeroDocumento').val();
		}
		
		vinculado.llaveSAP = $('#llaveCRM').val();
		vinculado.rol_negocio = $('#rolNegocio').val();
		vinculado.primer_nombre = $('#primerNombre').val();
		vinculado.primer_apellido = $('#primerApellido').val();
		vinculado.segundo_nombre = $('#segundoNombre').val();
		vinculado.segundo_apellido = $('#segundoApellido').val();
		vinculado.canal_contacto = $('#canalContacto').val();
		vinculado.fecha_contacto = $('#fechaContacto').val();
		vinculado.lugar_contacto = $('#lugarContacto').val();
		vinculado.hora_contacto = $('#horaContacto').val();
		vinculado.concepto_comercial = $("#conceptoComercial").val();
		vinculado.pais_nacimiento = $('#paisNacimientoSelect').val();
		vinculado.ciudad_nacimiento = $('#ciudadNacimientoSelect').val();
		vinculado.depto_nacimiento = $('#deptoNacimientoSelect').val();
		vinculado.nacionalidad = $('#nacionalidadSelect').val();
		vinculado.fecha_nacimiento = $('#fechaNacimiento').val();
		vinculado.nro_hijos = $('#hijos').val();
		
		if( $("#generom").checked ){
			vinculado.genero = 1;
		} 
		if( $("#generof").checked ){
			vinculado.genero = 0;
		}
		
		vinculado.profesion = $('#profesionSelect').val();
		vinculado.estrato = $('#estratoSelect').val();
		vinculado.cargo = $('#cargoSelect').val();
		vinculado.empresa_labora = $('#empresa').val();
		vinculado.tipo_contrato = $('#tipoContratoSelect').val();
		vinculado.fecha_ingreso = $('#fechaIngreso').val();
		vinculado.segmento = $('#segmento').val();
		vinculado.tamano_comercial = $('#tamanoComercial').val();
		vinculado.subsegmento = $('#subsegmento').val();
		vinculado.pais = $('#paisSelect').val();
		vinculado.ciudad = $('#ciudadSelect').val();
		vinculado.direccion = $('#direccion').val();
		vinculado.depto = $('#deptoSelect').val();
		vinculado.barrio = $('#barrio').val();
		vinculado.codigo_postal = $('#codigoPostal').val();
		vinculado.fecha_ini_vigencia = $('#fechaInicioVigencia').val();
		vinculado.fecha_fin_vigencia = $('#fechaFinVigencia').val();
		vinculado.tel_fijo = $('#telefonoFijo').val();
		vinculado.email = $('#email').val();
		vinculado.tel_movil = $('#celular').val();
		vinculado.sitio_web = $('#sitioWeb').val();
		vinculado.fecha_financieros = $('#mes').val();
		vinculado.tipo_moneda = $('#tipoMonedaSelect').val();
		vinculado.fuente_recursos = $('#fuenteRecursosSelect').val();
		vinculado.declarante = $('#declarante').val(); //- select - slider
		vinculado.fuente_bienes = $('#fuenteBienesSelect').val();
		vinculado.pais_recursos = $('#paisOrigenRecursosSelect').val();
		vinculado.ciudad_recursos = $('#ciudadOrigenRecursosSelect').val();
		vinculado.depto_recursos = $('#deptoOrigenRecursosSelect').val();
		vinculado.ingresos_mensuales = $('#ingresosMensuales').val();
		vinculado.otros_ingresos = $('#otrosIngresos').val();
		vinculado.total_ingresos = $('#totalIngresos').val();
		vinculado.total_egresos = $('#totalEgresos').val();
		vinculado.total_activos = $('#totalActivos').val();
		vinculado.total_pasivos = $('#totalPasivos').val();
		vinculado.total_patrimonio = $('#totalPatrimonio').val();
		vinculado.vol_ventas_anual = $('#volVentasAnuales').val();
		vinculado.fecha_ventas_anual = $('#fechaVentasAnuales').val();
		vinculado.codigo_ciiu = $('#codigoCIIU').val();
		vinculado.codigo_subciiu = $('#codigosubCIIU').val();
		vinculado.desc_ciiu = $('#descCiiu').val();
		vinculado.desc_subciiu = $('#descsubCIIU').val();
		
		vinculado.calificacion_interna = $('#calificacionInterna').val();
		vinculado.fecha_vigencia_calif = $('#fechaVigenciaCalif').val();
		vinculado.persona_bloqueada = $('#personaBloqueada').val();
		vinculado.estado = $('#estado').val();
		
		Kinvey.DataStore.save('VINCULACIONES', vinculado, {
		    success: function(response) {
		    	$('#mensajeVinculacion').addClass('success');
				$('#mensajeVinculacion').show();
				$('#mensajeVinculacion').text( 'La informaci\u00F3n se ha almacenado correctamente.' );
		    },
	        error: function(error){
				console.log(error);
	            alert("No pudo almacenar en la tabla VINCULACIONES..." + error);
				$('#mensajeVinculacion').show();
				$('#mensajeVinculacion').addClass('error');
		        $('#mensajeVinculacion').text( 'No se almaceno correctamente la informaci\u00F3n.' );
		        $.mobile.loading('hide');
			}
		});
		
		
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
	$.mobile.loading('show');
	$('#mensajeVinculacion').hide();
	$('#mensajeVinculacion').text( '' );
	
	
    var tipo_documento = $('#tipoDocumento').val();
	var numero_documento = $('#numeroDocumento').val();
	
	var queryDoc = new Kinvey.Query();
	var queryTipoDoc = new Kinvey.Query();
    queryDoc.equalTo("numero_documento", numero_documento);
	queryTipoDoc.equalTo('tipo_documento', tipo_documento);
	queryDoc.and(queryTipoDoc);
    Kinvey.DataStore.find('VINCULACIONES', queryDoc, {
        success: function(response) {
           
           if(response.length > 0){
               $.each(response, function(index, obj) {
            	   $('#mensajeVinculacion').show();
                   $('#mensajeVinculacion').addClass('success');
                   $('#mensajeVinculacion').text( 'Ahora puede editar la informaci\u00F3n de ' + obj.primer_nombre + ' ' + obj.primer_apellido );
                   editarVinculacion(obj);
               });               
           } else {
        	 $('#mensajeVinculacion').show();
             $('#mensajeVinculacion').addClass('warning');
             $('#mensajeVinculacion').text( 'No se encontr\u00F3 la persona con numero de documento ' + numero_documento );
             limpiarCamposVinculacion();
           }
           $.mobile.loading('hide');
        },
        error: function(error){
			console.log(error);
            alert("No pudo realizar la consulta a la tabla VINCULACIONES..." + error);
			$('#mensajeVinculacion').show();
			$('#mensajeVinculacion').addClass('warning');
	        $('#mensajeVinculacion').text( 'El nombre de usuario o la contrase\u00F1a introducidos no son correctos.' );
	        $.mobile.loading('hide');
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
			} ]
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
	$("#calificacionInterna").attr('readonly', true);
	$("#estado").attr('readonly', true);
}

function determinarCiiu(){
	$('#mensajeVinculacion').show();
	$('#mensajeVinculacion').addClass('success');
	$('#mensajeVinculacion').text('Se ha determinado el CIIU correctamente.');
}

function editarVinculacion(data){
	
	try{
		vinculado = data;
		
		//$('#tipoDocumento').val(data.tipo_documento).selectmenu('refresh');
		//$('#numeroDocumento').val(data.numero_documento);
		$('#llaveCRM').val(data.llaveSAP);
		$('#rolNegocio').val(data.rol_negocio);
		$('#primerNombre').val(data.primer_nombre);
		$('#primerApellido').val(data.primer_apellido);
		$('#segundoNombre').val(data.segundo_nombre);
		$('#segundoApellido').val(data.segundo_apellido);
		$('#canalContacto').val(data.canal_contacto);
		$('#fechaContacto').val(data.fecha_contacto);
		$('#lugarContacto').val(data.lugar_contacto);
		$('#horaContacto').val(data.hora_contacto);
		$("#conceptoComercial").val(data.concepto_comercial).slider('refresh');
		$('#paisNacimientoSelect').val(data.pais_nacimiento).selectmenu('refresh');
		$('#ciudadNacimientoSelect').val(data.ciudad_nacimiento).selectmenu('refresh');
		$('#deptoNacimientoSelect').val(data.depto_nacimiento).selectmenu('refresh');
		$('#nacionalidadSelect').val(data.nacionalidad).selectmenu('refresh');
		$('#fechaNacimiento').val(data.fecha_nacimiento);
		$('#hijos').val(data.nro_hijos);
		
		if(data.genero == 1){
			$("#generom").attr("checked", true).checkboxradio("refresh");
		} else {
			$("#generof").attr("checked", true).checkboxradio("refresh");
		}
		
		$('#profesionSelect').val(data.profesion).selectmenu('refresh');
		$('#estratoSelect').val(data.estrato).selectmenu('refresh');
		$('#cargoSelect').val(data.cargo).selectmenu('refresh');
		$('#empresa').val(data.empresa_labora);
		$('#tipoContratoSelect').val(data.tipo_contrato).selectmenu('refresh');
		$('#fechaIngreso').val(data.fecha_ingreso);
		$('#segmento').val(data.segmento);
		$('#tamanoComercial').val(data.tamano_comercial);
		$('#subsegmento').val(data.subsegmento);
		$('#paisSelect').val(data.pais).selectmenu('refresh');
		$('#ciudadSelect').val(data.ciudad).selectmenu('refresh');
		$('#direccion').val(data.direccion);
		$('#deptoSelect').val(data.depto).selectmenu('refresh');
		$('#barrio').val(data.barrio);
		$('#codigoPostal').val(data.codigo_postal);
		$('#fechaInicioVigencia').val(data.fecha_ini_vigencia);
		$('#fechaFinVigencia').val(data.fecha_fin_vigencia);
		$('#telefonoFijo').val(data.tel_fijo);
		$('#email').val(data.email);
		$('#celular').val(data.tel_movil);
		$('#sitioWeb').val(data.sitio_web);
		$('#mes').val(data.fecha_financieros);
		$('#tipoMonedaSelect').val(data.tipo_moneda).selectmenu('refresh');
		$('#fuenteRecursosSelect').val(data.fuente_recursos).selectmenu('refresh');
		$('#declarante').val(data.declarante).slider('refresh'); //- select - slider
		$('#fuenteBienesSelect').val(data.fuente_bienes).selectmenu('refresh');
		$('#paisOrigenRecursosSelect').val(data.pais_recursos).selectmenu('refresh');
		$('#ciudadOrigenRecursosSelect').val(data.ciudad_recursos).selectmenu('refresh');
		$('#deptoOrigenRecursosSelect').val(data.depto_recursos).selectmenu('refresh');
		$('#ingresosMensuales').val(data.ingresos_mensuales);
		$('#otrosIngresos').val(data.otros_ingresos);
		$('#totalIngresos').val(data.total_ingresos);
		$('#totalEgresos').val(data.total_egresos);
		$('#totalActivos').val(data.total_activos);
		$('#totalPasivos').val(data.total_pasivos);
		$('#totalPatrimonio').val(data.total_patrimonio);
		$('#volVentasAnuales').val(data.vol_ventas_anual);
		$('#fechaVentasAnuales').val(data.fecha_ventas_anual);
		$('#codigoCIIU').val(data.codigo_ciiu);
		$('#codigosubCIIU').val(data.codigo_subciiu);
		$('#descCiiu').val(data.desc_ciiu);
		$('#descsubCIIU').val(data.desc_subciiu);
		
		$('#calificacionInterna').val(data.calificacion_interna);
		$('#fechaVigenciaCalif').val(data.fecha_vigencia_calif);
		$('#personaBloqueada').val(data.persona_bloqueada).slider('refresh');
		$('#estado').val(data.estado);
		
	} catch (e) {
		alert(e);
	}
	
}


function limpiarCamposVinculacion(){
	$('#tipoDocumento').val("CC").selectmenu('refresh');
	$('#numeroDocumento').val("");
	$('#llaveCRM').val("");
	$('#rolNegocio').val("");
	$('#primerNombre').val("");
	$('#primerApellido').val("");
	$('#segundoNombre').val("");
	$('#segundoApellido').val("");
	$('#canalContacto').val("");
	$('#fechaContacto').val("");
	$('#lugarContacto').val("");
	$('#horaContacto').val("");
	$("#conceptoComercial").val("si").slider('refresh');
	$('#paisNacimientoSelect').val("1").selectmenu('refresh');
	$('#ciudadNacimientoSelect').val("1").selectmenu('refresh');
	$('#deptoNacimientoSelect').val("1").selectmenu('refresh');
	$('#nacionalidadSelect').val("1").selectmenu('refresh');
	$('#fechaNacimiento').val("");
	$('#hijos').val("0");
	
	$("#generof").attr("checked", false).checkboxradio("refresh");//radio
	$("#generom").attr("checked", false).checkboxradio("refresh");
	
	$('#profesionSelect').val("1").selectmenu('refresh');
	$('#estratoSelect').val("1").selectmenu('refresh');
	$('#cargoSelect').val("1").selectmenu('refresh');
	$('#empresa').val("");
	$('#tipoContratoSelect').val("1").selectmenu('refresh');
	$('#fechaIngreso').val("");
	$('#segmento').val("");
	$('#tamanoComercial').val("");
	$('#subsegmento').val("");
	$('#paisSelect').val("1").selectmenu('refresh');
	$('#ciudadSelect').val("1").selectmenu('refresh');
	$('#direccion').val("");
	$('#deptoSelect').val("1").selectmenu('refresh');
	$('#barrio').val("");
	$('#codigoPostal').val("");
	$('#fechaInicioVigencia').val("");
	$('#fechaFinVigencia').val("");
	$('#telefonoFijo').val("");
	$('#email').val("");
	$('#celular').val("");
	$('#sitioWeb').val("");
	$('#mes').val("");
	$('#tipoMonedaSelect').val("1").selectmenu('refresh');
	$('#fuenteRecursosSelect').val("1").selectmenu('refresh');
	$('#declarante').val("no").slider('refresh'); //- select - slider
	$('#fuenteBienesSelect').val("1").selectmenu('refresh');
	$('#paisOrigenRecursosSelect').val("1").selectmenu('refresh');
	$('#ciudadOrigenRecursosSelect').val("1").selectmenu('refresh');
	$('#deptoOrigenRecursosSelect').val("1").selectmenu('refresh');
	$('#ingresosMensuales').val("");
	$('#otrosIngresos').val("");
	$('#totalIngresos').val("");
	$('#totalEgresos').val("");
	$('#totalActivos').val("");
	$('#totalPasivos').val("");
	$('#totalPatrimonio').val("");
	$('#volVentasAnuales').val("");
	$('#fechaVentasAnuales').val("");
	$('#codigoCIIU').val("");
	$('#codigosubCIIU').val("");
	$('#descCiiu').val("");
	$('#descsubCIIU').val("");
	
	$('#calificacionInterna').val("SIN CALIF");
	$('#fechaVigenciaCalif').val("");
	$('#personaBloqueada').val("no").slider('refresh');
	$('#estado').val("PENDIENTE");
	
}