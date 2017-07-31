require('purecss');
require('../css/style.css');
import oFunctions from './functions.js';
import $ from 'jquery';

$(function () {

    var $inputNumber  = $("#inputNumber")
        , $buttonAdd  = $("#buttonAdd")
        , $listItems  = $("#listItems")
        , $buttonSort = $("#buttonSort")
        , $formAdd    = $('#formAdd')
    ;

    // Verificando que se escribio un numero para ingresar
    $inputNumber.on('keyup', function () {
        var sThisVal = $.trim($(this).val())
            , iThisNumber = sThisVal ? parseInt(sThisVal) : 0
        ;
        $buttonAdd.prop('disabled', !iThisNumber);
    });

    // Adicionando numero a la lista y al array asociado al boton sort
    $formAdd.on('submit', function (e) {

        e.preventDefault();

        var sNumVal = $.trim($inputNumber.val())
            , iNumber = sNumVal ? parseInt(sNumVal) : 0
        ;

        // Si se trata de ingresar un Cero
        if(!inputNumber){ return ; }

        // Si aun no se creo el array List asociado al boton sort
        if(!$buttonSort.data('arrList')){ $buttonSort.data('arrList', []); }

        $buttonSort.data('arrList').push(iNumber);
        console.log("arrList:", $buttonSort.data('arrList'));

        // Adicionando item html a la lista
        $listItems.append("<li><a href='javascript:;'>" + iNumber + "</a></li>");
        $inputNumber.val('');
        $buttonAdd.prop('disabled', true);
    });

    // Ordenando la lista
    $buttonSort.on('click', function () {
        var aList = $(this).data('arrList') // Lista hasta el momento
            , sHtmlListItem = '' // html string de todos los items
        ;
        if( aList.hasOwnProperty('length') ){
            // Ordenando el Array
            oFunctions.sortArray(aList);
            for(var i=0; i<aList.length; i++){
                sHtmlListItem += "<li><a href='javascript:;'>" + aList[i] + "</a></li>";
            }
            $listItems.html(sHtmlListItem);
        }
    });


});
