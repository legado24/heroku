/*
UPDATE BY JQ ON 31/03/2020
ADD: Notifications
*/
//moment.locale('es')
//TODO: para las peticiones ajax
let xhr = null
let basePath = $('#hid_basePath').val()

keyup_input_general_3 = (elemento, form, modal) => {
	$.each($(elemento), function () {
		$(this).on('keyup', function () {
			estilo_error(false, this)
		})
	})
}

estilo_error = (estilo, elemento) => {
	if (estilo === true) {
		$(elemento).closest('.form-group').addClass('has-error')
		$(elemento).addClass('error-input')
	} else {
		$(elemento).closest('.form-group').removeClass('has-error')
		$(elemento).removeClass('error-input')
	}
}

var Redondear2 = function (numero) {
	var num = parseFloat(numero)
	return num.toFixed(2)
}

var Redondear7 = function (numero) {
	var num = parseFloat(numero)
	return num.toFixed(7)
}

var Redondear1 = function (numero) {
	var num = parseFloat(numero)
	return num.toFixed(0)
}

var Redondear3 = function (numero) {
	var num = parseFloat(numero)
	return num.toFixed(3)
}

var Redondear4 = function (numero) {
	var num = parseFloat(numero)
	if ((num = numero + '%')) {
		return numero
	}
	return num.toFixed(2)
}
var formatearNumero = function (nStr) {
	nStr += ''
	x = nStr.split('.')
	x1 = x[0]
	x2 = x.length > 1 ? '.' + x[1] : ''
	var rgx = /(\d+)(\d{3})/
	while (rgx.test(x1)) {
		x1 = x1.replace(rgx, '$1' + ',' + '$2')
	}
	return x1 + x2
}

var sombrearRow = function (elem, cantidad) {
	$(elem).css(
		'background-color',
		$(elem).css('background-color') === 'rgb(176, 190, 217)'
			? '#FFFFFF'
			: '#B0BED9'
	)
	var arreglo = $(elem).children()
	for (var i = 0; i < cantidad; i++) {
		$(arreglo[i]).css('background-color', '#FFFFFF')
	}
}
var sombrearSingleRow = function (a) {
	if ($.fn.DataTable.isDataTable('#tblAvance')) {
		$('#tblAvance tbody tr').each(function () {
			$(this).css('background-color', '#FFFFFF')
		})
		$(a).css(
			'background-color',
			$(a).css('background-color') === 'rgb(176, 190, 217)'
				? '#FFFFFF'
				: '#B0BED9'
		)
		$(a)
			.children()
			.each(function () {
				console.log($(this).text())
			})
	}
}
var FormatoFechaSinRestriccion = function (inFecha, format) {
	$(inFecha).datepicker({
		todayBtn: 'linked',
		keyboardNavigation: false,
		forceParse: false,
		calendarWeeks: true,
		todayHighlight: true,
		autoclose: true,
		format: format,
		language: 'es',
	})
}

var FormatoFecha = function (inFecha, format) {
	$(inFecha).datepicker({
		todayBtn: 'linked',
		keyboardNavigation: false,
		forceParse: false,
		calendarWeeks: true,
		todayHighlight: true,
		autoclose: true,
		format: format,
		endDate: new Date(),
		language: 'es',
	})
}

var FormatoStartFecha = function (inFecha, format, fecha) {
	$(inFecha).datepicker({
		todayBtn: 'linked',
		keyboardNavigation: false,
		forceParse: false,
		calendarWeeks: true,
		todayHighlight: true,
		autoclose: true,
		format: format,
		startDate: new Date(fecha),
		language: 'es',
	})
}
var FormatoFechaIniciaHoy = function (inFecha, format) {
	$(inFecha).datepicker({
		todayBtn: 'linked',
		keyboardNavigation: false,
		forceParse: false,
		calendarWeeks: true,
		todayHighlight: true,
		autoclose: true,
		format: format,
		startDate: new Date(),
	})
}
let collapseDiv = function (divClass, iconPrev, iconNext) {
	$('.collapse.show').each(function () {
		$(this)
			.prev(divClass)
			.find('.fa')
			.addClass(iconNext)
			.removeClass(iconPrev)
	})
	$('.collapse')
		.on('show.bs.collapse', function () {
			$(this)
				.prev(divClass)
				.find('.fa')
				.removeClass(iconPrev)
				.addClass(iconNext)
		})
		.on('hide.bs.collapse', function () {
			$(this)
				.prev('.panel-heading')
				.find('.fa')
				.removeClass(iconNext)
				.addClass(iconPrev)
		})
}

var NumeroDosDecimales = function (inNumero) {
	$(inNumero).inputmask('decimal', {
		min: 0.0,
		integerDigits: 7,
		allowMinus: false,
		digits: 2,
	})
	$(inNumero).on('blur', function () {
		if ($(this).val() !== '') {
			if ($(this).val() !== '0.00') {
				$(this).val(Redondear2($(this).val()))
			}
		}
	})
}
var NumeroDosDecimalesConBlur = function (inNumero) {
	$(inNumero).inputmask('decimal', {
		min: 0.0,
		integerDigits: 7,
		allowMinus: false,
		digits: 2,
	})
	$(inNumero).on('blur', function () {
		if ($(this).val() !== '') {
			if ($(this).val() !== '0.00') {
				$(this).val(Redondear2($(this).val()))
			}
		}
	})
}

var NumeroDosDecimalesCero = function (inNumero) {
	$(inNumero).inputmask('decimal', {
		min: 0.0,
		integerDigits: 7,
		allowMinus: false,
		digits: 2,
	})
	$(inNumero).on('blur', function () {
		if ($(this).val() !== '') {
			$(this).val(Redondear2($(this).val()))
		} else {
			$(this).val('0.00')
		}
	})
}

var NumeroPorcentajeDosDecimales = function (
	inNumero,
	totDigitos,
	numMin,
	numMax
) {
	$(inNumero).inputmask('decimal', {
		min: numMin,
		max: numMax,
		integerDigits: totDigitos,
		allowMinus: false,
		digits: 2,
	})
}
var NumeroEntero = function (inNumero) {
	$(inNumero).inputmask('integer', {
		min: 0,
		integerDigits: 7,
		allowMinus: false,
	})
}

var NumeroEntero = function (inNumero, totDigitos) {
	$(inNumero).inputmask('integer', {
		min: 0,
		integerDigits: totDigitos,
		allowMinus: false,
	})
}

var uploadMsnFullWidth = function () {
	toastr.options = {
		closeButton: true,
		debug: true,
		progressBar: true,
		preventDuplicates: false,
		positionClass: 'toast-top-full-width',
		onclick: null,
		showDuration: '5000',
		hideDuration: '5000',
		timeOut: '10000',
		extendedTimeOut: '1000',
		showEasing: 'swing',
		hideEasing: 'linear',
		showMethod: 'fadeIn',
		hideMethod: 'fadeOut',
	}
	toastr.error('Su Session ha expirado', 'Mensaje del Sistema')
}

var uploadMsn = function (mensaje, tipo) {
	toastr.options = {
		closeButton: true,
		progressBar: true,
		positionClass: 'toast-top-full-width',
		showMethod: 'slideDown',
		hideMethod: 'fadeOut',
		timeOut: 8000,
	}
	if (tipo === 'OK') {
		toastr.success(mensaje, 'Exito')
	} else if (tipo === 'ERROR') {
		toastr.error(mensaje, 'ERROR')
	}
}

const uploadMsnSmallNotDuplicate = (mensaje, tipo) => {
	toastr.options = {
		closeButton: true,
		preventDuplicates: true,
		showMethod: 'slideDown',
		hideMethod: 'fadeOut',
		timeOut: 6000,
	}
	if (tipo === 'OK') {
		toastr.success(mensaje, 'Exito')
	} else if (tipo === 'ERROR') {
		toastr.error(mensaje, 'ERROR')
	} else if (tipo === 'ALERTA') {
		toastr.warning(mensaje, 'Alerta del Sistema')
	}
}

let uploadMsnSmall = (mensaje = '', tipo = 'INFORMACIÓN') => {
	toastr.options = {
		closeButton: true,
		showMethod: 'slideDown',
		hideMethod: 'fadeOut',
		timeOut: 6000,
	}

	switch (tipo) {
		case 'OK':
			toastr.success(mensaje, 'Exito')
			break
		case 'ERROR':
			toastr.error(mensaje, 'ERROR')
			break
		case 'ALERTA':
			toastr.warning(mensaje, 'Alerta del Sistema')
			break
		default:
			toastr.info(mensaje, tipo)
			break
	}
}

var uploadMsnSmallLeft = function (mensaje, tipo) {
	toastr.options = {
		closeButton: true,
		showMethod: 'slideDown',
		positionClass: 'toast-top-left',
		hideMethod: 'fadeOut',
		timeOut: 6000,
	}
	if (tipo === 'OK') {
		toastr.success(mensaje, 'Exito')
	} else if (tipo === 'ERROR') {
		toastr.error(mensaje, 'ERROR')
	} else if (tipo === 'ALERTA') {
		toastr.warning(mensaje, 'Alerta del Sistema')
	}
}

var CerrarSession = function () {
	$('#form_logout').submit()
}

/* Para las Notificaciones by JQ */

//TODO 1. Consulta cantidad nuevas notificaciones.
let countNotify = 0
let searchNotifyEnable = true
let listNotify = [
	/*{
        id: 0,
        type: 'ALERT',
        title: 'ARTÍCULOS VENCEN PRONTO',
        message: 'Algunos artículos van a vencer y aún tenemos stock.',
        link: 'mantDescuentos',
        dateSend: new Date(),
        userSend: {
            codigo: 'DSIS',
            nombre: 'Área de T.I.'
        },
        userReci: {
            codigo: 'JPSQ',
            nombre: 'Juan Piero Santisteban Quiroz'
        },
        flagRead: 0,
        flagArrived: 0,
        dateArrived: new Date(),
        dateRead: new Date()
    }*/
]
//let searchNotify = false;
let openNotify = false
let notifySpan = $('#notifySpan')
let notifyUl = $('#notifyUl')
let pageNumberNotify = 0
const URL_NOTIFY = `${basePath}/notification`

var estilo_error_busqueda = function (estilo, elemento) {
	if (estilo === true) {
		$(elemento).addClass('has-error')
		$(elemento).addClass('error-input')
	} else {
		$(elemento).removeClass('has-error')
		$(elemento).removeClass('error-input')
	}
}

var style_error_cbo_final = function (id_cbo, condition) {
	if (condition === true) {
		$(id_cbo).closest('.form-group').addClass('has-error')
	} else {
		$(id_cbo).closest('.form-group').removeClass('has-error')
	}
	var style_remove = condition ? 'style_cbo' : 'red error-input'
	var style_add = condition ? 'red error-input' : 'style_cbo'
	$(id_cbo).selectpicker('setStyle', style_remove, 'remove')
	$(id_cbo).selectpicker({
		style: style_add,
		size: 5,
	})
	$(id_cbo).selectpicker('refresh')
}

var style_error_cbo_final_busqueda = function (id_cbo, condition) {
	if (condition === true) {
		$(id_cbo).addClass('has-error')
	} else {
		$(id_cbo).removeClass('has-error')
	}
	var style_remove = condition ? 'style_cbo' : 'red error-input'
	var style_add = condition ? 'red error-input' : 'style_cbo'
	$(id_cbo).selectpicker('setStyle', style_remove, 'remove')
	$(id_cbo).selectpicker({
		style: style_add,
		size: 5,
	})
	$(id_cbo).selectpicker('refresh')
}

var validarPerfil = function () {
	var sevalido = '1'
	if ($('#claveanterior').val() === '') {
		estilo_error(true, '#claveanterior')
		sevalido = '0'
	}
	if ($('#clavenueva').val() === '') {
		estilo_error(true, '#clavenueva')
		sevalido = '0'
	}
	if ($('#reclavenueva').val() === '') {
		estilo_error(true, '#reclavenueva')
		sevalido = '0'
	}
	if ($('#clavenueva').val() !== '' && $('#reclavenueva').val() !== '') {
		if ($('#clavenueva').val() !== $('#reclavenueva').val()) {
			estilo_error(true, '#reclavenueva')
			uploadMsnSmall('Las Claves deben de ser Iguales.', 'ERROR')
			sevalido = '0'
		}
	}
	return sevalido === '1'
}

var RetornarNombreDia = function (diaSemana) {
	var valor_dia = ''
	if (diaSemana === 0) {
		valor_dia = 'Domingo'
	} else if (diaSemana === 1) {
		valor_dia = 'Lunes'
	} else if (diaSemana === 2) {
		valor_dia = 'Martes'
	} else if (diaSemana === 3) {
		valor_dia = 'Miercoles'
	} else if (diaSemana === 4) {
		valor_dia = 'Jueves'
	} else if (diaSemana === 5) {
		valor_dia = 'Viernes'
	} else if (diaSemana === 6) {
		valor_dia = 'Sabado'
	}
	return valor_dia
}

var RetornarNombreMes = function (mes) {
	var valor_mes = ''
	if (mes == 0) {
		valor_mes = 'Enero'
	} else if (mes == 1) {
		valor_mes = 'Febrero'
	} else if (mes == 2) {
		valor_mes = 'Marzo'
	} else if (mes == 3) {
		valor_mes = 'Abril'
	} else if (mes == 4) {
		valor_mes = 'Mayo'
	} else if (mes == 5) {
		valor_mes = 'Junio'
	} else if (mes == 6) {
		valor_mes = 'Julio'
	} else if (mes == 7) {
		valor_mes = 'Agosto'
	} else if (mes == 8) {
		valor_mes = 'Septiembre'
	} else if (mes == 9) {
		valor_mes = 'Octubre'
	} else if (mes == 10) {
		valor_mes = 'Noviembre'
	} else if (mes == 11) {
		valor_mes = 'Diciembre'
	}
	return valor_mes
}

var RetornarMesxNumero = function (mes) {
	var valor_mes = ''
	if (mes == 1) {
		valor_mes = 'Enero'
	} else if (mes == 2) {
		valor_mes = 'Febrero'
	} else if (mes == 3) {
		valor_mes = 'Marzo'
	} else if (mes == 4) {
		valor_mes = 'Abril'
	} else if (mes == 5) {
		valor_mes = 'Mayo'
	} else if (mes == 6) {
		valor_mes = 'Junio'
	} else if (mes == 7) {
		valor_mes = 'Julio'
	} else if (mes == 8) {
		valor_mes = 'Agosto'
	} else if (mes == 9) {
		valor_mes = 'Septiembre'
	} else if (mes == 10) {
		valor_mes = 'Octubre'
	} else if (mes == 11) {
		valor_mes = 'Noviembre'
	} else if (mes == 12) {
		valor_mes = 'Diciembre'
	}
	return valor_mes
}

keyup_input_general_3('#frmMyPerfil input', '#frmMyPerfil', '#modalMyPerfil')

var reloadSession = function () {
	//console.log("reloadSession");
	$.ajax({
		type: 'post',
		url: `${basePath}/reload_session`,
		dataType: 'json',
		success: function (data) {
			if (data !== null) {
				if (data.dato === 'OK') {
					//console.log("Session activa.");
				} else if (data.dato === 'ERROR') {
					uploadMsnSmall(data.msj, 'ERROR')
				}
			} else {
				uploadMsnSmall('Problemas con el sistema', 'ERROR')
			}
		},
		error: function (jqXHR, status, error) {
			uploadMsnSmall(jqXHR.responseText, 'ERROR')
		},
	})
}

var validarUndefinied = function (param) {
	var variable = null
	if (typeof param !== 'undefined') {
		variable = param
	}
	return variable
}
var fun_RestringirCampoDocumentoIdentidad = function (Valor, TamanPermi) {
	var Salid = ''
	var Filtr = 'ABCDNIabcdni1234567890'
	for (var i = 0; i < Valor.length; i++) {
		if (Filtr.indexOf(Valor.charAt(i)) != -1 && Salid.length < TamanPermi) {
			Salid += Valor.charAt(i).toUpperCase()
		}
	}
	return Salid
}

const fun_RestringirCampoNumericoSinDecimales = (valor, tamanPermi) => {
	let salid = ''
	let filtr = '1234567890'
	for (let i = 0; i < valor.length; i++) {
		if (filtr.indexOf(valor.charAt(i)) != -1 && salid.length < tamanPermi) {
			salid += valor.charAt(i)
		}
	}
	return salid
}

var fun_RestringirCampoNumericoSinDecimales2 = function (
	Valor,
	TamanPermi,
	NombrEleme
) {
	var Salid = ''
	var Filtr = '1234567890'
	for (var i = 0; i < Valor.length; i++) {
		if (Filtr.indexOf(Valor.charAt(i)) != -1 && Salid.length < TamanPermi) {
			Salid += Valor.charAt(i)
		}
	}
	$(NombrEleme).val(Salid)
}

var fun_RestringirCampoNumericoConPuntoDecimal = function (Valor, TamanPermi) {
	var Salid = ''
	var Filtr = '1234567890.'
	var NumerPunto = 0
	for (var i = 0; i < Valor.length; i++) {
		if (Valor.charAt(i) === '.') {
			NumerPunto++
		}
		if (
			Filtr.indexOf(Valor.charAt(i)) != -1 &&
			Salid.length < TamanPermi &&
			NumerPunto < 2
		) {
			Salid += Valor.charAt(i)
		}
	}
	return Salid
}
const fun_RestringirCampoCorreoElectronico = (Valor) => {
	let Salid = ''
	let Filtr =
		'@ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz_-1234567890.'
	let NumerSimbo = 0
	for (let i = 0; i < Valor.length; i++) {
		if (Valor.charAt(i) === '@') {
			NumerSimbo++
		}
		if (Filtr.indexOf(Valor.charAt(i)) != -1 && NumerSimbo < 2) {
			Salid += Valor.charAt(i)
		}
	}
	return Salid
}

var fun_ValidarRangoHoras = function (ElemeInici, ElemeFinal) {
	var FechaInici = $(ElemeInici).val().split(':')
	var FechaFinal = $(ElemeFinal).val().split(':')
	if (
		(Number(FechaInici[0]) == Number(FechaFinal[0]) &&
			Number(FechaInici[1]) <= Number(FechaFinal[1])) ||
		Number(FechaInici[0]) < Number(FechaFinal[0])
	) {
		return true
	} else {
		return false
	}
}

var Redondear = function (n) {
	var nd8 = ''
	var ndi = parseFloat(n).toFixed(4)
	var nd2 = ndi.split('.')[0]
	var nd3 = ndi.split('.')[1]
	var nd4 = nd3.substring(0, 1)
	var nd9 = nd3.substring(1, 2)
	var nd5 = nd3.substring(2, 3)
	var nd6 = nd9 + '.' + nd5
	var nd7 = Math.round(nd6).toString()
	if (nd9 == 9 && nd7 == 10) {
		nd4 = parseFloat(nd4) + 1
		if (nd4 == 10) {
			nd8 = parseFloat(nd2) + 1
			nd8 = nd8 + '.00'
		} else {
			nd8 = nd2 + '.' + nd4 + '0'
		}
	} else {
		nd8 = nd2 + '.' + nd4 + '' + nd7
	}
	return nd8
}

var FormatoFechaAnio = function (inFecha, format) {
	$(inFecha).datepicker({
		autoclose: true,
		keyboardNavigation: true,
		endDate: new Date(),
		todayHighlight: true,
		format: 'mm-yyyy',
		startView: 'months',
		minViewMode: 'months',
		language: 'es',
	})
}

let methods = (function () {
	let Iniciando = function () {
		setInterval(reloadSession, 240000)
		setInterval(countNotifyAjax, 60000)
		//console.log("Consultando Notifications");
		countNotifyAjax()
	}
	return {
		init: function () {
			Iniciando()
		},
	}
})()

$('#btnSalir').on('click', function () {
	bootbox.confirm({
		message: '<strong>¿Esta Seguro que desea Salir del Sistema?</strong>',
		buttons: {
			confirm: {
				label: "<i class='fa fa-check'></i> Si",
				className: 'btn-primary btn-sm sbold',
			},
			cancel: {
				label: "<i class='fa fa-times'></i> No",
				className: 'btn-sm sbold',
			},
		},
		callback: function (result) {
			if (result) {
				CerrarSession()
			}
		},
	})
})

$('#btnGuardarMyPerfil').on('click', function () {
	if (validarPerfil()) {
		var cargando = Ladda.create(
			document.querySelector('#btnGuardarMyPerfil')
		)
		var anterior = $('#claveanterior').val()
		var nueva = $('#clavenueva').val()
		var renueva = $('#reclavenueva').val()
		cargando.start()
		$.ajax({
			type: 'post',
			url: `${basePath}/save_myperfil`,
			data: {
				anterior: anterior,
				nueva: nueva,
				renueva: renueva,
			},
			dataType: 'json',
			success: function (data) {
				if (data !== null) {
					if (data.dato === 'OK') {
						$('#modalMyPerfil').modal('hide')
						cargando.stop()
						uploadMsnSmall(data.msj, 'OK')
					} else if (data.dato === 'ERROR') {
						if (data.listado.length > 0) {
							for (var i = 0; i < data.listado.length; i++) {
								if (data.listado[i] === 'E1') {
									estilo_error(true, '#claveanterior')
								}
								if (data.listado[i] === 'E2') {
									estilo_error(true, '#clavenueva')
								}
								if (data.listado[i] === 'E3') {
									estilo_error(true, '#reclavenueva')
								}
								if (data.listado[i] === 'E4') {
									estilo_error(true, '#reclavenueva')
									uploadMsnSmall(
										'Las Claves deben de ser iguales.',
										'OK'
									)
								}
							}
						} else {
							uploadMsnSmall(data.msj, 'ERROR')
						}
						cargando.stop()
					}
				} else {
					cargando.stop()
					uploadMsnSmall('Problemas con el sistema', 'ERROR')
				}
			},
			error: function (jqXHR, status, error) {
				cargando.stop()
				uploadMsnSmall(jqXHR.responseText, 'ERROR')
			},
		})
	}
})

$('#myperfil').on('click', function () {
	$('#frmMyPerfil')[0].reset()
	estilo_error(false, '#claveanterior')
	estilo_error(false, '#clavenueva')
	estilo_error(false, '#reclavenueva')
	$('#modalMyPerfil').modal('show')
})

$('#btnCollapse').on('click', function () {
	if ($('#demo').hasClass('in')) {
		$(this)
			.children()
			.removeClass('fa fa-chevron-up')
			.addClass('fa fa-chevron-down')
	} else {
		$(this)
			.children()
			.removeClass('fa fa-chevron-down')
			.addClass('fa fa-chevron-up')
	}
})

const countNotifyAjax = () => {
	// console.log("CONSULTANDO NOTIFICACIONES COUNT");
	$.ajax({
		type: 'GET',
		url: `${URL_NOTIFY}`,
		data: {},
		dataType: 'JSON',
		success: function (Datos) {
			if (Datos != null) {
				let Respu = Datos.dato
				if (Respu === 'OK') {
					let Resultado = Datos.data
					if (parseInt(Resultado) >= 0) {
						//console.log("--- NOTIFICACIONES OK ---");
						//console.log("Resultado", Resultado);
						countNotify = parseInt(Resultado)
						countNotifyShow()
					} else {
						console.log('--- :( notificaciones ERROR ---')
						uploadMsnSmall(Resultado, 'ERROR')
						console.log(Resultado)
					}
				} else {
					console.log('Respu ERROR: ', Datos.msj)
					uploadMsnSmall(Datos.msj, 'ERROR')
				}
			}
		},
		error: function (jqXHR, status, error) {
			console.log('ERROR EN AJAX')
			uploadMsnSmall(jqXHR.responseText, 'ERROR')
		},
	})
}

countNotifyShow = () => {
	//console.log("countNotifyShow", countNotify);
	if (countNotify > 0) {
		searchNotifyEnable = true
		notifyUl.html('')
		pageNumberNotify = 0
		$('#notifyI').removeClass('fa-bell-o').addClass('fa-bell')
		notifySpan.removeClass('force-hide')
		if (countNotify > 9) {
			notifySpan.text('9+')
		} else {
			notifySpan.text(countNotify.toString())
		}
	} else {
		$('#notifyI').removeClass('fa-bell').addClass('fa-bell-o')
		notifySpan.addClass('force-hide')
	}
}

//TODO notifyA On click, scrollable de 5 en 5.
$('#notifyA').click(function () {
	console.log('#notifyA click')
	openNotify = $('#notifyA').attr('aria-expanded') !== 'true'
	console.log('Is open ?: ', openNotify)
	if (openNotify && searchNotifyEnable) {
		searchNotifyAjax()
		recivedNotify()
	}
})

recivedNotify = () => {
	console.log('recivedNotify')
	$.ajax({
		type: 'POST',
		url: `${URL_NOTIFY}/recivedNotify`,
		data: {},
		dataType: 'JSON',
		success: function (Datos) {
			if (Datos != null) {
				let Respu = Datos.dato
				if (Respu === 'OK') {
					if (Datos.data === 'OK') {
						//CUANDO SE ACTUALIZÓ A RECIBIDAS TODAS LAS NOTIFICACIONES
						countNotify = 0
						countNotifyShow()
					}
				} else {
					console.log('Respu: ', Respu)
					uploadMsnSmall(Datos.msj, 'ERROR')
				}
			}
		},
		error: function (jqXHR, status, error) {
			console.log('ERROR EN AJAX')
			uploadMsnSmall(jqXHR.responseText, 'ERROR')
		},
	})
}

searchNotifyAjax = () => {
	console.log('searchNotifyAjax: page ', pageNumberNotify)
	searchingNotify()
	$.ajax({
		type: 'POST',
		url: `${URL_NOTIFY}`,
		data: {
			_pageNumber: pageNumberNotify,
		},
		dataType: 'JSON',
		success: function (Datos) {
			if (Datos != null) {
				let Respu = Datos.dato
				if (Respu === 'OK') {
					let Resultado = Datos.data
					console.log('Resultado: ', Resultado)
					//listNotify = listNotify.concat(Resultado);
					listNotify = Resultado
					pageNumberNotify = pageNumberNotify + 1
					searchNotifyEnable = !(listNotify.length < 8)
					showNotify()
				} else {
					console.log('Respu: ', Respu)
					uploadMsnSmall(Datos.msj, 'ERROR')
				}
			}
		},
		error: function (jqXHR, status, error) {
			console.log('ERROR EN AJAX')
			uploadMsnSmall(jqXHR.responseText, 'ERROR')
		},
	})
}

profileImage = (user) => {
	console.log('user: ', user)
	let imageURL = ''
	switch (user) {
		case 'DSIS':
			imageURL = `${basePath}/resources/assets/images/profiles/DSIS.svg`
			break
		default:
			imageURL = `${basePath}/resources/assets/images/profiles/${Math.floor(
				Math.random() * (7 - 1 + 1) + 1
			)}.svg`
	}
	return imageURL
}

$('#notifyUl').on('scroll', function () {
	if ($(this).scrollTop() + $(this).innerHeight() >= this.scrollHeight) {
		console.log('End of List')
		if (searchNotifyEnable) {
			searchNotifyAjax()
		}
	}
})

const showNotify = () => {
	//notifyUl.html('');
	$('#searchNotifyDiv').remove()
	$('#noneNotifyDiv').remove()

	if (listNotify.length > 0) {
		$.each(listNotify, function (i, item) {
			console.log('item: ', item, 'i: ', i)
			notifyUl.append(`
            <li> 
                <div onclick="${
					item.flagRead === 1
						? `location.href='${basePath}/${item.link}'`
						: `notifyOpen('${item.id}', '${item.link}')`
				}" class="dropdown-messages-box" style="display: flex; border-bottom: 1px solid #e9ecef; padding-top: 5px; padding-bottom: 5px; margin-bottom: 3px; cursor: pointer; border-left-width: 5px; border-left-color: ${item.flagRead === 1 ? '#fff' : '#16a085'}; border-left-style: solid; ">                    <a class="dropdown-item float-left" href=${item.link} style="padding-right: 16px; padding-left: 6px;">
                        <img alt="image" class="rounded-circle" src=${profileImage(
							item.userSend.codigo
						)} style="width: 38px; height: 38px;">
                    </a>
                    <div class="media-body">
                        <strong>${item.userSend.nombre}</strong><br>
                        ${item.title}.<br>
                        <small class="text-muted">${moment(
							item.dateSend
						).fromNow()} ${moment(item.dateSend).format('[el] LLL')}</small>
                    </div>
                </div>
            </li>
            `)
		})
	} else {
		notifyUl.append(`
        <li> 
            <div id="noneNotifyDiv" class="dropdown-messages-box" style="display: flex; padding: 15px; justify-content: space-evenly; align-items: center;">
                <i class="fa fa-comments fa-3x text-primary"/><br>
                <strong>No tiene notificaciones.</strong>
            </div>
        </li>
        `)
	}
}

searchingNotify = () =>
	notifyUl.append(`
        <li> 
            <div id="searchNotifyDiv" class="dropdown-messages-box" style="display: flex; padding: 15px; justify-content: space-evenly;">
                <i class="fa fa-pulse fa-spinner fa-2x text-primary"/>
            </div>
        </li>
        `)
//TODO notifyUl On bottom, search more notifications
//TODO notifyItem On click, redirect to link
const notifyOpen = (id, link) => {
	console.log('notifyOpen:')
	console.log('id: ', id)
	console.log('link: ', link)
	$.ajax({
		type: 'POST',
		url: `${URL_NOTIFY}/readedNotify`,
		data: {
			_id: id,
		},
		dataType: 'JSON',
		success: function (Datos) {
			if (Datos != null) {
				let Respu = Datos.dato
				if (Respu === 'OK') {
					if (Datos.data === 'OK') {
						// SE ACTUALIZÓ CORRECTAMENTE
						window.location.href = `${basePath}/${link}` // aqui se envia por el link como si fuera get
						//window.location.href = "vw_alerta_vencimiento_comp.html"; // aqui se envia por el link como si fuera get
					}
				} else {
					console.log('Respu ERROR: ', Datos.msj)
					uploadMsnSmall(Datos.msj, 'ERROR')
				}
			}
		},
		error: function (jqXHR, status, error) {
			console.log('ERROR EN AJAX')
			uploadMsnSmall(jqXHR.responseText, 'ERROR')
		},
	})
}
/* End Notifications */

//TODO USADO EN MANT. DESCUENTOS Y GESTIÓN DE PEDIDOS
/**
 * @param {String} id - ID del Input
 * @param {number} min - valor minimo de 9's
 * @param {number} max - valor maximo de 9's con los que se reemplaza
 */
replaceMaxValue = (id, min = 5, max = 6) => {
	let number = $(id).val()
	let onlyNines = new RegExp(`9{${min},}`)
	//console.log('Evaluando: ', number);
	//console.log('Contiene solo nueves: ', onlyNines.test(number));

	if (onlyNines.test(number)) {
		$(id).val('9'.repeat(max))
	}
}

/**
 * Ocultar la Barra de Desplazamiento Vertical padre, cuando se abre un modal.
 * @param {String} id - ID del Modal con #
 * @param {boolean} estado - true o false
 */
overflowY = (id, estado) => {
	if (estado) {
		let original = $(id).attr('style')
		$(id).attr(
			'style',
			original + '; padding-left: 0 ; overflow-y: hidden !important;'
		)
	} else {
		let original = $(id).attr('style')
		original = original.replace('; overflow-y: hidden !important', '')
		$(id).attr('style', original)
	}
}

/**
 * Destruye la Tabla, sin generar error en JS.
 * @param {String} id - ID de la Tabla con #
 */
const clearTable = async (id) => {
	if ($.fn.DataTable.isDataTable(id)) {
		$(id).DataTable().clear().draw()
		$(id).DataTable().destroy()
	}
	$(id).html('')
}

/**
 * Cancela toda interacción Ajax registrara en la variable xhr.
 */
const cancelarAjax = () => {
	if (xhr && xhr.readyState !== 4) {
		xhr.abort()
	}
}

/**
 * Cuando cancelamos intencionalmente y AJAX, ocultamos el mensaje de error.
 * @param {String} status - del xhr
 * @param {String} error - del xhr
 * @param {boolean} estado - true es mostrar
 */
const mensajeAjax = (status, error, estado = true) => {
	//TODO: ESTADO INDICA SI MOSTRAR EL MENSAJE O NO.
	let mostrar = estado != null ? estado : true
	if (mostrar) {
		if (status === 'abort') {
			uploadMsnSmall('Se canceló la operación.', 'ERROR')
		} else {
			uploadMsnSmall(error, 'ERROR')
		}
	}
}

/**
 * Cuando cancelamos intencionalmente y AJAX, ocultamos el mensaje de error.
 * @param {String} id - del input
 * @param {String} tipo - validacion
 * @param {String} id2 - del input 2, para validar rangos
 */
const validarInput = (id, tipo, id2 = '') => {
	let valido = true
	console.log('validando input')
	if (tipo === 'decimal') {
		console.log('onchange input decimal')
		let validar = $(id).val()
		let res = validar.split('.')
		console.log('input : ', id, ' - val', $(id).val())
		console.log('res: ', res)
		console.log('res length: ', res.length)

		if (validar === '' || res[0] === '') {
			$(id).val('')
			valido = false
		}
		if (res.length > 1) {
			$(id).val(res[0].concat('.').concat(res[1].substring(0, 2)))
		}
	} else if (tipo === 'porcentaje') {
		console.log('onchange input porcentaje')
		let validar = $(id).val()
		let res = validar.split('.')
		console.log('input : ', id, ' - val', $(id).val())
		console.log('res: ', res)
		console.log('res length: ', res.length)

		if (validar === '' || res[0] === '') {
			$(id).val('')
			valido = false
		}
		if (res.length > 1) {
			$(id).val(res[0].concat('.').concat(res[1].substring(0, 3)))
		}

		if (valido) {
			let porc = parseFloat($(id).val(), 3)
			if (porc > 100) {
				valido = false
			}
		}
	} else if (tipo === 'fecha') {
		console.log('onchange input fecha')
		let validar = $(id).val()

		if (!moment(validar, 'DD/MM/YYYY').isValid()) {
			valido = false
		}
	} else if (tipo === 'rangos') {
		let rangIni = parseFloat($(id).val(), 2)
		let rangFin = parseFloat($(id2).val(), 2)

		if (rangIni >= rangFin) {
			valido = false
		}
	} else if (tipo === 'fechas') {
		let fechIni = moment($(id).val(), 'DD/MM/YYYY').toDate()
		let fechFin = moment($(id2).val(), 'DD/MM/YYYY').toDate()

		if (fechIni >= fechFin) {
			valido = false
		}
	} else if (tipo === 'Entero') {
		console.log('onchange input decimal')
		let validar = $(id).val()
		let res = validar.split('.')
		console.log('input : ', id, ' - val', $(id).val())
		console.log('res: ', res)
		console.log('res length: ', res.length)

		if (validar === '' || res[0] === '') {
			$(id).val('')
			valido = false
		}
		if (res.length > 1) {
			$(id).val(res[0])
		}
	}
	return valido
}

// FLOAT BUTTONS COLLAPSE
let showFabs = true
let btnCompact = $('#btnCompact')
let fabContent = $('#divFloatContent')

btnCompact.on('click', function () {
	funcCollapseFab()
})

const funcCollapseFab = () => {
	if (showFabs) {
		btnCompact.addClass('btn-rotate-180')
		fabContent.addClass('force-hide')
		// btnCompact.prop('title', 'Mostrar opciones');
		btnCompact.attr('data-original-title', 'Mostrar opciones')
	} else {
		btnCompact.removeClass('btn-rotate-180')
		fabContent.removeClass('force-hide')
		// btnCompact.prop('title', 'Ocultar opciones');
		btnCompact.attr('data-original-title', 'Ocultar opciones')
	}
	showFabs = !showFabs
}

/**
 * Async Ajax 2020 by JP
 * @param {String} url - de la petición
 * @param {String} type - de petición
 * @param {Object} data - para post
 * @param {String} dataType - tipo de respuesta
 * @param {String} contentType - tipo de contenido del data
 */
async function asyncAjax(
	url,
	data = {},
	type = 'POST',
	dataType = 'JSON',
	contentType = null
) {
	let result

	try {
		result = await $.ajax({
			url,
			type,
			data,
			dataType,
			...(contentType
				? {
						contentType,
				  }
				: null),
		})
		return result
	} catch (error) {
		result = {
			data: null,
			success: false,
			dbCode: -1,
			message: error,
		}
		return result
		// console.error(error);
	}
}
/**
 * Clear Select 2020 by JP
 * @param {Array} idElements - para limpiar
 */
const clearListSelect = async (idElements = []) => {
	$.each(idElements, function (i, item) {
		$(item).html('')
		$(item).selectpicker('refresh')
	})
}

/**
 * Hide Overflow 2020 by JP
 * @param {Boolean} hide - para ocultar/mostrar
 * @param {Array} idElements - para limpiar
 */
const hideOverflow = (hide = true, idElements = 'body') => {
	if (hide) {
		$(idElements).addClass('Body-hide-overflow')
	} else {
		$(idElements).removeClass('Body-hide-overflow')
	}
}

$(function () {
	methods.init()
	// document.documentElement.style.setProperty('--sk-color', '#1BB394 !important');
})
