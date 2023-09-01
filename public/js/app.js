

/* ---------------------------------- MENU ---------------------------------- */
$('#btn_menu').click(function () {
    $('.menu').slideToggle();
})
/**aside**/
$('#btn_aside').click(function () {
    $('.content_aside_main').toggleClass('show_cp');
})




/* --------------------------------- TABLES --------------------------------- */
$(document).ready(function () {
    $('#table').DataTable({
        paging: true,
        pageLength: 10,
        lengthMenu: [[10, 25, 50, -1], [10, 25, 50, "Todos"]], // opciones de longitud de página
        language: {
            //url: "//cdn.datatables.net/plug-ins/1.10.25/i18n/Spanish.json",
            "sProcessing": "Procesando...",
            "sLengthMenu": "Registros: _MENU_",
            "sZeroRecords": "Sin resultados",
            "sEmptyTable": "No hay datos",
            "sInfo": "Registros del _START_ al _END_ de _TOTAL_",
            "sInfoEmpty": "0 registros",
            "sInfoFiltered": "",
            "sInfoPostFix": "",
            "sSearch": "<i class='fa-light fa-magnifying-glass'></i>",
            "sUrl": "",
            "sInfoThousands": ",",
            "sLoadingRecords": "Cargando...",
            "oPaginate": {
                "sFirst": "Primero",
                "sLast": "Último",
                "sNext": ">",
                "sPrevious": "<"
            },
            "oAria": {
                "sSortAscending": ": Activar para ordenar la columna de manera ascendente",
                "sSortDescending": ": Activar para ordenar la columna de manera descendente"
            }
        }
    });
});