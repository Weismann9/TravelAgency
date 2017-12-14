//tabs
$(function () {
    $("#tabs").tabs();
});

$(function () {
    $(".datepicker").each(function () {
        $(this).datepicker({});
    });
    $(".spinner").each(function () {
        $(this).spinner({
            classes: {
                "ui-spinner": "form-control"
            }
        });
    });
    $(".checkbox-radio").checkboxradio({
        icon: false
    });

    $(".slider-range-price").slider({
        range: true,
        min: 0,
        max: 5000,
        values: [0, 0],
        slide: function (event, ui) {
            $("#price").val("$" + ui.values[0] + " - $" + ui.values[1]);
        }
    });

    $(".slider-range-rating").slider({
        range: true,
        min: 0,
        max: 5,
        values: [0, 0],
        slide: function (event, ui) {
            $("#rating").val("Зірок " + ui.values[0] + " - " + ui.values[1]);
        }
    });
    $(".accordion").accordion({
        heightStyle: "content"
    });
});


//form
$(function () {
    $('#searchForm').validate({
        rules: {
            city: {valueNotEquals: "default"},
            dataFrom: 'required',
            nights: {
                required: true,
                min: 1
            }
        },
        submitHandler: function (form, e) {
            $('#result').fadeIn();
            $("html, body").animate({scrollTop: $(document).height() + 100}, 1000);
            e.preventDefault(e);
            return false;
        }
    });
});

$.validator.addMethod("valueNotEquals", function (value, element, arg) {
    return arg !== $(element).find('option:selected').val();
}, "Це поле є обов'язковим.");

$.extend(jQuery.validator.messages, {
    required: "Це поле є обов'язковим.",
    min: jQuery.validator.format("Будь ласка, введіть значення більше або рівне {0}"),
});


$('.checkout').on('click', function () {
    $('#modal').modal()
});