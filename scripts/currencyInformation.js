/**
 * Created by Ela on 2016-06-09.
 */
'use strict';

$(document).ready(function () {
    $.ajax({
        type: 'GET',
        url: 'http://api.nbp.pl/api/exchangerates/tables/A/?format=json',
        dataType: 'json',
        success: function (data) {

            var exchangeRate = data[0].rates;
            var table = $('<table class="table table-hover">');
            var row = $('<tr>');
            row.append($('<td class="bg-primary">').text("Symbol"));
            row.append($('<td class="bg-primary">').text("Nazwa waluty"));
            row.append($('<td class="bg-primary">').text("Kurs"));
            table.append(row);
            $('#currencytable').append(table);

            var money = [{code: 'USD'}, {code: 'EUR'}, {code: 'CAD'},
                {code: 'CHF'}, {code: 'JPY'}, {code: 'TRY'}, {code: 'SEK'},
                {code: 'GBP'}, {code: 'CZK'}, {code: 'DKK'}, {code: 'HUF'},
                {code: 'UAH'}, {code: 'ISK'}, {code: 'NOK'}, {code: 'HRK'},
                {code: 'BRL'}, {code: 'MXN'}, {code: 'INR'}, {code: 'BGN'}];

            exchangeRate.forEach(function (value) {
                money.forEach(function (cur) {
                    if (value.code === cur.code) {
                        row = $('<tr class="info">');
                        row.append($('<td>').text(value.code));
                        row.append($('<td>').text(value.currency));
                        row.append($('<td>').text(value.mid));
                        table.append(row);
                    }
                })
            });
            $('#currencytable').append(table);

            var option = $('<option>');
            option.text('PLN - zloty(Polska)');
            option.attr('selected', 'selected');
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
            option.attr('selected', 'selected');
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
            var option = $('<option>');
            option.text('PLN - zloty(Polska)');
            option.attr('selected', 'selected');
            option.attr('value', 1);
            option.attr('label', 'PLN - zloty(Polska)');
            $('#TheCurrency').append(option);
            exchangeRate.forEach(function (item) {
                option = $('<option>');
                option.text(item.code + item.currency);
                option.attr('label', item.code + " " + "-" + " " + item.currency);
                option.attr('value', item.mid);
                $('#TheCurrency').append(option);
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
        },

        error: function(data) {
            $('#currencytable').append($('<span id="ProblemWithApp">').html( 'Przepraszamy. Nie możemy pobrać danych, proszę spróbować później!' ));
            $('#ProblemWithApp').css({ 'color' :"white"});
            console.error(data);
        },
        fail: function () {
            console.log('fail')
        }
    });


    //The way to change the main containers
    $('.pages > div').hide();

    // Show chosen div, and hide all others
    $(".menu div").click(function () {
        $('.pages > div').hide();
        $('#' + $(this).attr('id') + "Container").show();
        google.maps.event.trigger(MapInstance, 'resize');
        $('.intro').hide();
    });
});