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

            var money = [{code: 'USD'}, {code: 'EUR'}, {code: 'CAD'},
                {code: 'CHF'}, {code: 'JPY'}, {code: 'TRY'}, {code: 'SEK'},
                {code: 'GBP'}, {code: 'CZK'}, {code: 'DKK'}];

            exchangeRate.forEach(function (value) {
                money.forEach(function(cur){
                    console.log(value.code, cur.code);
                    if(value.code === cur.code){
                        row = $('<tr>');
                        row.append($('<td>').text(value.code));
                        row.append($('<td>').text(value.currency));
                        row.append($('<td>').text(value.mid));
                        table.append(row);
                    }
                })
            });
            $('#currencytable').append(table);
            // exchangeRate.slice(0,10).forEach(function (value) {
            //     row = $('<tr>');
            //     row.append($('<td>').text(value.code));
            //     row.append($('<td>').text(value.currency));
            //     row.append($('<td>').text(value.mid));
            //     table.append(row);
            //     $('#currencytable').append(table);

            // });
            var option = $('<option>');
            option.text('PLN - zloty(Polska)');
            option.attr('value', 1);
            option.attr('label', 'PLN - zloty(Polska)');
            $('#selectname').append(option);
            exchangeRate.forEach(function (item) {
                option = $('<option>');
                option.text(item.code + item.currency);
                option.attr('label', item.code + " " + "-" + " " + item.currency);
                option.attr('value', item.mid);
                $('#selectname').append(option);
            });

            option = $('<option>');
            option.text('PLN - zloty(Polska)');
            option.attr('value', 1);
            option.attr('label', 'PLN - zloty(Polska)');
            $('#selectSecondname').append(option);
            exchangeRate.forEach(function (items) {
                option = $('<option>');
                option.text(items.code + items.currency);
                option.attr('label', items.code + " " + "-" + " " + items.currency);
                option.attr('value', items.mid);
                $('#selectSecondname').append(option);
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
        google.maps.event.trigger(MapInstance, 'resize');
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

