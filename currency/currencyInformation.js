/**
 * Created by Ela on 2016-06-09.
 */
'use strict'


$(document).ready(function () {
    $.ajax({
        type: 'GET',
        url: 'http://api.nbp.pl/api/exchangerates/tables/A/2016-06-10/?format=json',
        dataType: 'json',
        success: function (data) {
            var exchangeRate = data[0].rates;
            var table = $('<table>');
            exchangeRate.forEach(function (value) {
                var row = $('<tr>');
                row.append($('<td>').text(value.code));
                row.append($('<td>').text(value.currency));
                row.append($('<td>').text(value.mid));

                // var kod = $('<div>').text(value.code + value.currency + value.mid);
                table.append(row);
            });
            // $('#currencyContainer').append(table);
            // $('table').hide();
            // $('#value2').click(function () {
            //     $('table').show()

            // });
            // $('#currencyContainer').append($('<div class="calculatorTitle  col-sm-12">'));
            // $('.calculatorTitle').text('Kalkulator walutowy');
            

            // exchangeRate.forEach(function(value){
            //
            // })


        }
    });


    $('.pages > div').hide();
// Show chosen div, and hide all others
    $(".menu div").click(function () {
        $('.pages > div').hide();
        $('#' + $(this).attr('id') + "Container").show();
        $('.intro').hide();
    });


    // $('#currencyContainer').append($('<input id="value1" class="valuePlace">'));
    // $('#currencyContainer').append($('<input id="value2" class="valuePlace">'));
    // $('#currencyContainer').append($('<span id="valueScore">'));
    //
    // $('.valuePlace').on('change', (function myCounting() {
    //     var score = parseFloat($('#value1').val()) * parseFloat($('#value2').val());
    //     if (isNaN(score)) {
    //         $('#valueScore').text();
    //     }
    //     else {
    //         $('#valueScore').text(score);
    //     }
    // }));


});

