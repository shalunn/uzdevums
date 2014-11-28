//Скрипт сохранает данные "Notes" и параметры, указанные двумя рисунками, в базе данных, а так же меняет вид кнопок, в зависимости от значений этих параметров.

function SaveNotes() {
    $.ajax({
        type: "POST",
        url: "Main.aspx/GetCompanies2",
        data: "{}",
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        success: OnSuccess8,
        error: OnError8
    });
}

var notes = 0;

function OnSuccess8(data) {

    var RowID = 0;

    //var notes = 0;

    for (var i = 0; i < data.d.length; i++) {
        if (newEmail == $.trim(data.d[i].username))
        {
            if (ButtonToRemove == $.trim(data.d[i].buttonID)) {

                RowID = $.trim(data.d[i].id);

                var parameter1 = 0;

                var parameter2 = 0;

                var src1 = $('#Image14').attr('src');

                if (src1 == 'images/icon_1.PNG') {
                    parameter1 = 0;
                } else if (src1 == "images/icon_11.PNG") {
                    parameter1 = 1;
                }

                var src2 = $('#Image15').attr('src');

                if (src2 == 'images/icon_2.PNG') {
                    parameter2 = 0;
                } else if (src2 == "images/icon_22.PNG") {
                    parameter2 = 1;
                }

                //////////

                var w = data.d[i].buttonNumber;

                if (parameter1 == 1)
                {                
                    var $img = '<img id="ImgR" class="ImgR" src="images/icon_parameter_1.PNG"  weight="12">';


                    //////////////////////////////////
                    var Left = $("#btn" + w).position().left;
                    var Top = $("#btn" + w).position().top;

                    $("#fo1" + w).append($img);

                    $("#ImgR").css({ 'position': 'absolute', 'z-index': '100', left: Left + 397, top: Top + 15 });
                    $("#ImgR").show();
                    $("#ImgR").attr({ id: "ImR" + w });
                    ////////////////////////////////
                    var Left = $("#btnFM" + w).position().left;
                    var Top = $("#btnFM" + w).position().top;

                    $("#fo1FM" + w).append($img);

                    $("#ImgR").css({ 'position': 'absolute', 'z-index': '100', left: Left + 1737, top: Top + 15 });
                    $("#ImgR").show();
                    $("#ImgR").attr({ id: "ImRFM" + w });
                    ////////////////////////////////
                    var Left = $("#btnFW" + w).position().left;
                    var Top = $("#btnFW" + w).position().top;

                    $("#fo1FW" + w).append($img);

                    $("#ImgR").css({ 'position': 'absolute', 'z-index': '100', left: Left + 547, top: Top + 15 });
                    $("#ImgR").show();
                    $("#ImgR").attr({ id: "ImRFW" + w });
                    ////////////////////////////////
                    var Left = $("#btnFWFM" + w).position().left;
                    var Top = $("#btnFWFM" + w).position().top;

                    $("#fo1FWFM" + w).append($img);

                    $("#ImgR").css({ 'position': 'absolute', 'z-index': '100', left: Left + 1737, top: Top + 15 });
                    $("#ImgR").show();
                    $("#ImgR").attr({ id: "ImRFWFM" + w });
                    ////////////////////////////////
                }
                else if (parameter1 == 0)
                {
                    $("#ImR" + w).remove();
                    $("#ImRFM" + w).remove();
                    $("#ImRFW" + w).remove();
                    $("#ImRFWFM" + w).remove();
                }

                if (parameter2 == 1)
                {
                    $("#btn" + data.d[i].buttonNumber).css({ 'border-left-style': 'solid', 'border-left-width': '3px', 'border-left-color': 'Red' });
                    $("#btnFM" + data.d[i].buttonNumber).css({ 'border-left-style': 'solid', 'border-left-width': '3px', 'border-left-color': 'Red' });
                    $("#btnFW" + data.d[i].buttonNumber).css({ 'border-left-style': 'solid', 'border-left-width': '3px', 'border-left-color': 'Red' });
                    $("#btnFWFM" + data.d[i].buttonNumber).css({ 'border-left-style': 'solid', 'border-left-width': '3px', 'border-left-color': 'Red' });
                }
                else if (parameter2 == 0)
                {
                    $("#btn" + data.d[i].buttonNumber).css({ 'border-left-style': 'solid', 'border-left-width': '2px', 'border-left-color': 'Silver' });
                    $("#btnFM" + data.d[i].buttonNumber).css({ 'border-left-style': 'solid', 'border-left-width': '2px', 'border-left-color': 'Silver' });
                    $("#btnFW" + data.d[i].buttonNumber).css({ 'border-left-style': 'solid', 'border-left-width': '2px', 'border-left-color': 'Silver' });
                    $("#btnFWFM" + data.d[i].buttonNumber).css({ 'border-left-style': 'solid', 'border-left-width': '2px', 'border-left-color': 'Silver' });
                }

                //////////

                var startButtonGroup = data.d[i].buttonGroup;

                var buttonGroup = 0;

                if (typeName == "PERSONAL")
                {
                    buttonGroup = 1;
                }
                else if (typeName == "WORK")
                {
                    buttonGroup = 2;
                }
                else if (typeName == "NEW FOLDER")
                {
                    buttonGroup = 3;
                }
                else if (typeName == "0")
                {
                    buttonGroup = 1;
                }

                $("#TD_Personal").css({ 'border-left-style': 'solid', 'border-left-width': '0px', 'border-left-color': '#26A3D2' });
                $("#TD_Work").css({ 'border-left-style': 'solid', 'border-left-width': '0px', 'border-left-color': '#26A3D2' });

                if (startButtonGroup != buttonGroup)
                {
                    $("#fo1FW" + data.d[i].buttonNumber).remove();

                    var $ctrl = $('<input/>').attr({ type: 'button', id: 'btnFW' + data.d[i].buttonNumber, value: $.trim(data.d[i].buttonName) }).addClass("Button11");
                    $($ctrl).css({ "height": "50px", "width": '590px', "text-align": "left", "background-color": "White", "border-style": "solid", "border-weight": "1px", "border-color": "Silver", 'margin-bottom': "21px" });
        
                    jQuery('<div/>', {
                        id: 'fo1FW' + data.d[i].buttonNumber,
                        class: "fo1",
                    }).appendTo('#Panel' + (buttonGroup + 4));
            
                    $("#fo1FW" + data.d[i].buttonNumber).append($ctrl);

                    /////////////////////////////////////
                
                    $("#fo1FWFM" + data.d[i].buttonNumber).remove();

                    var $ctrl = $('<input/>').attr({ type: 'button', id: 'btnFWFM' + data.d[i].buttonNumber, value: $.trim(data.d[i].buttonName) }).addClass("Button11");
                    $($ctrl).css({ "height": "50px", "width": '1780px', "text-align": "left", "background-color": "White", "border-style": "solid", "border-weight": "1px", "border-color": "Silver", 'margin-bottom': "21px" });
        
                    jQuery('<div/>', {
                        id: 'fo1FWFM' + data.d[i].buttonNumber,
                        class: "fo1",
                    }).appendTo('#Panel' + (buttonGroup + 11));
            
                    $("#fo1FWFM" + data.d[i].buttonNumber).append($ctrl);
                }

                $.ajax({
                    url: "Main.aspx/SaveNotes",
                    type: "POST",
                    dataType: "json",
                    contentType: "application/json; charset=utf-8",
                    data: JSON.stringify({
                        "ID": RowID,
                        "notes": notes,
                        "parameter1": parameter1,
                        "parameter2": parameter2,
                        "buttonGroup": buttonGroup,
                    }),
                    success: function (data) {
                        if (data.d == "success") {
                            //alert("Data removed successfully");
                        }
                    },
                    error: function (xhr, ajaxOptions, thrownError) {
                        alert(thrownError);
                    }
                }).done(function () {
                });

                i = data.d.length;
            }
        }
    }
}
function OnError8(data) {

}