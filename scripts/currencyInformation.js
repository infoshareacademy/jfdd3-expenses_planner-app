/**
 * Created by Ela on 2016-06-09.
 */
'use strict';

$(document).ready(function () {
    $.ajax({
        type: 'GET',
        url: 'http://api.nbp.pl/api/exchangerates/tables/A/2016-06-10/?format=json',
        dataType: 'json',
        success: function (data) {
            var exchangeRate = data[0].rates;
            var table = $('<table class="table table-hover">');
            var row = $('<tr>');
            row.append($('<td class="success">').text("Symbol"));
            row.append($('<td class="warning">').text("Nazwa waluty"));
            row.append($('<td class="danger">').text("Kurs"));
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

            $('#currencyResult').on('change', (function myCounting() {
                var score = parseFloat($('#quantity').val()) * parseFloat($('#selectname').val()) * parseFloat($('#selectSecondname').val());
                if (isNaN(score)) {
                    $('#currencyResult').text();
                }
                else {
                    $('#currencyResult').text(score);
                }

            } ));
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
        google.maps.event.trigger(MapInstance,'resize');
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

