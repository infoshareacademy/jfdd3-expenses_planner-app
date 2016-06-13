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
            var row = $('<tr>');
            row.append($('<td>').text("Symbol"));
            row.append($('<td>').text("Nazwa waluty"));
            row.append($('<td>').text("Kurs"));
            table.append(row);
            $('#currencytable').append(table);


            exchangeRate.forEach(function (value) {
                row = $('<tr>');
                row.append($('<td>').text(value.code));
                row.append($('<td>').text(value.currency));
                row.append($('<td>').text(value.mid));
                table.append(row);
                $('#currencytable').append(table);

            });

            exchangeRate.forEach(function (item) {
                var option = $('<option>');
                $('#selectname').append(option.text(item.code + item.currency));
                $('#selectname').append(option.attr('label', item.code + " " + "-" + " " + item.currency));
                $('#selectname').append(option.attr('value', item.mid));
            });
            exchangeRate.forEach(function (items) {
                var option = $('<option>');
                $('#selectSecondname').append(option.text(items.code + items.currency));
                $('#selectSecondname').append(option.attr('label', items.code + " " + "-" + " " + items.currency));
                $('#selectSecondname').append(option.attr('value', items.mid));

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

