//Скрипт, после перемещения кнопок с данными, обновляет их позиции в базе данных.

function ChangeButtonType() {
    $.ajax({
        type: "POST",
        url: "Main.aspx/GetCompanies2",
        data: "{}",
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        success: OnSuccess10,
        error: OnError10
    });
}

var btnType = 0;

var startPos = 0;

var stopPos = 0;

function OnSuccess10(data) {

    var RowID = 0;

    for (var i = 0; i < data.d.length; i++) {
        if (newEmail == $.trim(data.d[i].username))
        {
            var stopPos = $("#btn" + data.d[i].buttonNumber).position().left;
            if (stopPos == 0) {
                btnType = 1; 
            }
            else if (stopPos == 455) {
                btnType = 2; 
            }
            else if (stopPos == 910) {
                btnType = 3; 
            }
            else if (stopPos == 1365) {
                btnType = 4; 
            }

            var buttonPosition = (($("#btn" + data.d[i].buttonNumber).position().top) / 71) + 1;

            ////////////////////////////

            var stopPos2 = $("#btnFW" + data.d[i].buttonNumber).position().left;
            if (stopPos2 == 0) {
                buttonGroup = 1; 
            }
            else if (stopPos2 == 607) {
                buttonGroup = 2; 
            }
            else if (stopPos2 == 1214) {
                buttonGroup = 3; 
            }

            var buttonGroupPosition = (($("#btnFW" + data.d[i].buttonNumber).position().top) / 71) + 1;

            RowID = $.trim(data.d[i].id);

            /////////////
            if (data.d[i].parameter1 == 1)
            {
                var w = data.d[i].buttonNumber;

                $("#ImR" + w).remove();
                $("#ImRFM" + w).remove();
                $("#ImRFW" + w).remove();
                $("#ImRFWFM" + w).remove();

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
            }
            /////////////

            $.ajax({
                url: "Main.aspx/ChangeButtonType",
                type: "POST",
                dataType: "json",
                contentType: "application/json; charset=utf-8",
                data: JSON.stringify({
                    "ID": RowID,
                    "type": btnType,
                    "buttonPosition": buttonPosition,
                    "buttonGroup": buttonGroup,
                    "buttonGroupPosition": buttonGroupPosition,
                }),
                success: function (data) {
                    if (data.d == "success") {
                        //alert("Data removed successfully");
                    }
                },
                error: function (xhr, ajaxOptions, thrownError) {
                    /*alert(thrownError);*/
                }
            }).done(function () {
            });
        }
    }
}
function OnError10(data) {

}