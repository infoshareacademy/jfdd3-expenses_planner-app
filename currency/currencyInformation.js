/**
 * Created by Ela on 2016-06-09.
 */
'use strict'


$(document).ready(function () {
    $.ajax({
        type: 'GET',
        url: 'http://api.nbp.pl/api/exchangerates/tables/A/today/?format=json',
        dataType: 'json',
        success: function (data) {
            var exchangeRate = data[0].rates;
            exchangeRate.forEach(function (value) {
                var table = $('<table>');
                var row = $('<row>');
                row.append($('<td>').text(value.code));
                row.append($('<td>').text(value.currency));
                row.append($('<td>').text(value.mid));

                // var kod = $('<div>').text(value.code + value.currency + value.mid);
                table.append(row);
                $('#currencyContainer').append(table);
            })
        }
    });


    $('.pages > div').hide();
// Show chosen div, and hide all others
    $(".menu div").click(function () {
        $('.pages > div').hide();
        $('#' + $(this).attr('id') + "Container").show();
        $('.intro').hide();
    });
});
