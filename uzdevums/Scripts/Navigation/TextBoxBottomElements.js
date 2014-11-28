//Скрипт добавляет нижнюю панель с её функционалом в разделе ввода названия новой кнопки.

$(document).ready(function () {
    $('#SwitchType1').css('cursor', 'pointer');

});

$(document).on('click', '#SwitchType1', function (e) {
    //$("#TD_Personal").css({ 'border-left-style': 'solid', 'border-left-width': '5px', 'border-left-color': '#26A3D2' });
    //typeNumber = 1;
    $("#Types_1").show();
});

$(document).ready(function () {
    $("#Image33").click(function () {

        var src = $('#Image33').attr('src');

        //if the current image is picture1.png, change it to picture2.png
        if (src == 'images/icon_1.PNG') {
            $("#Image33").attr("src", "images/icon_11.PNG");
            parameter1 = 1;

            //if the current image is picture2.png, change it to picture3.png 
        } else if (src == "images/icon_11.PNG") {
            $("#Image33").attr("src", "images/icon_1.PNG");
            parameter1 = 0;

            //if the current image is anything else, change it back to picture1.png
        }
    });

    $("#Image33").hover(function () {
        $(this).css('cursor', 'pointer');
    });
});

$(document).ready(function () {
    $("#Image34").click(function () {

        var src = $('#Image34').attr('src');

        //if the current image is picture1.png, change it to picture2.png
        if (src == 'images/icon_2.PNG') {
            $("#Image34").attr("src", "images/icon_22.PNG");
            parameter2 = 1;

            //if the current image is picture2.png, change it to picture3.png 
        } else if (src == "images/icon_22.PNG") {
            $("#Image34").attr("src", "images/icon_2.PNG");
            parameter2 = 0;

            //if the current image is anything else, change it back to picture1.png
        }
    });

    $("#Image34").hover(function () {
        $(this).css('cursor', 'pointer');
    });
});

$(document).ready(function () {
    $("#TextBox3").focus(function () {
        if ($("#TextBox3").val() == "") {
            $("#TD_Personal").css({ 'border-left-style': 'solid', 'border-left-width': '5px', 'border-left-color': '#26A3D2' });
            $("#TD_Work").css({ 'border-left-style': 'solid', 'border-left-width': '0px', 'border-left-color': '#26A3D2' });
            $("#Image33").attr("src", "images/icon_1.PNG");
            $("#Image34").attr("src", "images/icon_2.PNG");
            $("#SwitchType1").empty();
            $("#SwitchType1").append("PERSONAL");
            $("#TextBoxBottomElements").css('visibility', 'visible');
            typeName = "PERSONAL";
            typeNumber = 1;
            parameter1 = 0;
            parameter2 = 0;
        }
    });
    $("#TextBox3").focusout(function () {
        if ($("#TextBox3").val() == "") {
            $("#TextBoxBottomElements").css('visibility', 'hidden');
        }
    });
});

$(document).ready(function () {
    $('#TextSubmitButton').css('cursor', 'pointer');

});

$(document).on('click', '#TextSubmitButton', function (e) {
    $("#Button11").click();
});

$(document).ready(function () {
    $('#Image35').css('cursor', 'pointer');

});

var OpenPropertiesParameter = 0;

$(document).on('click', '#Image35', function () {
    OpenPropertiesParameter = 1;
    $("#Button11").click();
});

/////////////////
$(document).on('click', '.Button11', function (e) {
    var val = this.id;
    var newVal = val.substring(3, val.length);

    if (n == 1) {
        $(".RemoveButtons").remove();
        n = 0;
        $("#ImR" + newVal).show();
        $("#ImRFM" + newVal).show();
        $("#ImRFW" + newVal).show();
        $("#ImRFWFM" + newVal).show();
    }
    else if (n == 0) {
        console.log(OpenProperties(val));
        $("#ImR" + newVal).show();
        $("#ImRFM" + newVal).show();
        $("#ImRFW" + newVal).show();
        $("#ImRFWFM" + newVal).show();
    }
});


function OpenProperties(val) {

    if (ViewParameter == 2 && ModeParameter == 2) {
        //var val = e.target.id;
        var newVal = val.substring(7, val.length);
    }
    else if (ViewParameter == 2 && ModeParameter == 1) {
        //var val = e.target.id;
        var newVal = val.substring(5, val.length);
    }
    else if (ViewParameter == 1 && ModeParameter == 2) {
        //var val = e.target.id;
        var newVal = val.substring(5, val.length);
    }
    else if (ViewParameter == 1 && ModeParameter == 1) {
        //var val = e.target.id;
        var newVal = val.substring(3, val.length);
    }

    SubButtonID = "btn" + newVal;
    TextBox4Element = newVal;
    buttonSub = newVal;
    $("#TextBox4").val($("#btn" + newVal).val());

    console.log(GetCompanies5());

    //$("#Properties_1").show();

    var el = $("#TextBox4").get(0);
    var elemLen = el.value.length;

    el.selectionStart = elemLen;
    el.selectionEnd = elemLen;
    el.focus();
}