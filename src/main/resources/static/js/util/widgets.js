MessageSuccess = function(message) {
    toastr.success(message, 'Success');
};
MessageWarning = function(message) {
    toastr.warning(message, 'Warning');
};
MessageError = function(message) {
    toastr.error(message, 'Error');
};
$(document).ajaxError(function(e, jqXHR, ajaxSettings, thrownError) {
    var r = {
        url: ajaxSettings.url,
        method: ajaxSettings.type,
        data: ajaxSettings.data,
        httpStatus: jqXHR.status,
        error: thrownError || jqXHR.statusText,
        message: jqXHR.responseJSON ? jqXHR.responseJSON.message : null
    };
    var mensaje= r.message;
    switch (r.httpStatus) {
        case 0:
            if(r.error=='abort') {
                $('#loading-container').addClass('loading-inactive');
            }else if(r.error=='error') {
                mensaje = 'Por favor, revise su conexión a Internet.';
            }else if(r.error=='timeout') {
                mensaje = 'Tiempo de espera agotado. Por favor, revise su conexión a Internet.';
            }
            break;
        case 200 : mensaje= mensaje?mensaje:'Error de sintaxis. Comuníquese con Soporte Técnico.';  break;
        case 400 : mensaje= mensaje?mensaje:'Solicitud incorrecta';  break;
        case 401 : mensaje= mensaje?mensaje:'Acceso no autorizado.';break;
        case 403 : mensaje= 'Recurso prohibido.';break;
        case 404 : mensaje= 'Recurso no encontrado. La solicitud no pudo ser procesada.';  break;
        case 408 : mensaje= 'Tiempo de espera agotado, intente nuevamente';  break;
        case 503 : mensaje= 'Servicio no disponible, intente nuevamente';  break;
        default:
            break;
    }
    if(mensaje){
        MessageError(mensaje);
    }
});