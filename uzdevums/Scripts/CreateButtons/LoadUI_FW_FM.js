﻿//Скрипты позволяют делать запрос в базу данных, что бы получить данные и потом обрабатывают эти данные, для создания кнопок, при успешной авторизации на сайт.
//В данном случае заполняеться кнопками раздел Folder View Focus Mode.

function OnSuccess14(data) {
    
    b1_positionFW = 1;
    b2_positionFW = 1;
    b3_positionFW = 1;

    var dataCount = []
    var countNumber = 0;

    var b1_maxFW = 0;
    var b2_maxFW = 0;
    var b3_maxFW = 0;

    var stopLoading = 0;

    for (var i = 0; i < data.d.length; i++) {
        if (newEmail == $.trim(data.d[i].username)) {
            dataCount[countNumber] = i;
            countNumber++;
            
            if (i == 0)
            {
                if (data.d[i].buttonGroup == 1)
                {
                    b1_maxFW = data.d[i].buttonGroupPosition;
                }

                else if (data.d[i].buttonGroup == 2)
                {
                    b2_maxFW = data.d[i].buttonGroupPosition;
                }

                else if (data.d[i].buttonGroup == 3)
                {
                    b3_maxFW = data.d[i].buttonGroupPosition;
                }
            }
            else if (i > 0)
            {
                if (data.d[i].buttonGroup == 1)
                {
                    if (data.d[i].buttonGroupPosition > b1_maxFW)
                    {b1_maxFW = data.d[i].buttonGroupPosition;}
                }

                else if (data.d[i].buttonGroup == 2)
                {
                    if (data.d[i].buttonGroupPosition > b2_maxFW)
                    {b2_maxFW = data.d[i].buttonGroupPosition;}
                }

                else if (data.d[i].buttonGroup == 3)
                {
                    if (data.d[i].buttonGroupPosition > b3_maxFW)
                    {b3_maxFW = data.d[i].buttonGroupPosition;}
                }
            }
        }
    }

    b1_positionFW = 1;
    b2_positionFW = 1;
    b3_positionFW = 1;

    var check2 = countNumber - 1;

    for (var i = 0; i < countNumber; i++) {
            var r = data.d[dataCount[i]].buttonNumber;
            
            if($("#btnFWFM" + data.d[dataCount[i]].buttonNumber).length)
            {                                        
            }
            else 
            {                            
                if (data.d[dataCount[i]].buttonGroup == 0)
                {
                    data.d[dataCount[i]].buttonGroup = 1;
                }
                
                if (b1_positionFW == data.d[dataCount[i]].buttonGroupPosition && data.d[dataCount[i]].buttonGroup == 1)
                {
                    var $ctrl = $('<input/>').attr({ type: 'button', id: "btnFWFM" + data.d[dataCount[i]].buttonNumber, value: $.trim(data.d[dataCount[i]].buttonName) }).addClass("Button11");
                    $($ctrl).css({ "height": "50px", "width": '1780px', "text-align": "left", "background-color": "White", "border-style": "solid", "border-weight": "1px", "border-color": "Silver", 'margin-bottom': "21px" });
                
                    jQuery('<div/>', {
                        id: 'fo1FWFM' + data.d[dataCount[i]].buttonNumber,
                        class: "fo1",
                    }).appendTo('#Panel' + 12);

                    if (data.d[dataCount[i]].parameter2 == 1)
                    {
                        $($ctrl).css({ 'border-left-style': 'solid', 'border-left-width': '3px', 'border-left-color': 'Red' });
                    }

                    $("#fo1FWFM" + data.d[dataCount[i]].buttonNumber).append($ctrl);
                    
                    if (data.d[dataCount[i]].parameter1 == 1)
                    {
                        var $img = '<img id="ImgR" class="ImgR" src="images/icon_parameter_1.PNG"  weight="12">';

                        var Left = $("#btnFWFM" + r).position().left;
                        var Top = $("#btnFWFM" + r).position().top;

                        $("#fo1FWFM" + r).append($img);

                        $("#ImgR").css({ 'position': 'absolute', 'z-index': '100', left: Left + 1737, top: Top + 15 });
                        $("#ImgR").show();
                        $("#ImgR").attr({ id: "ImRFWFM" + r });
                    } 
                    
                    b1_positionFW++;
                }

                else if (b2_positionFW == data.d[dataCount[i]].buttonGroupPosition && data.d[dataCount[i]].buttonGroup == 2)
                {
                    var $ctrl = $('<input/>').attr({ type: 'button', id: "btnFWFM" + data.d[dataCount[i]].buttonNumber, value: $.trim(data.d[dataCount[i]].buttonName) }).addClass("Button11");
                    $($ctrl).css({ "height": "50px", "width": '1780px', "text-align": "left", "background-color": "White", "border-style": "solid", "border-weight": "1px", "border-color": "Silver", 'margin-bottom': "21px" });
                
                    jQuery('<div/>', {
                        id: 'fo1FWFM' + data.d[dataCount[i]].buttonNumber,
                        class: "fo1",
                    }).appendTo('#Panel' + 13);

                    if (data.d[dataCount[i]].parameter2 == 1)
                    {
                        $($ctrl).css({ 'border-left-style': 'solid', 'border-left-width': '3px', 'border-left-color': 'Red' });
                    }

                    $("#fo1FWFM" + data.d[dataCount[i]].buttonNumber).append($ctrl);

                    if (data.d[dataCount[i]].parameter1 == 1)
                    {
                        var $img = '<img id="ImgR" class="ImgR" src="images/icon_parameter_1.PNG"  weight="12">';

                        var Left = $("#btnFWFM" + r).position().left;
                        var Top = $("#btnFWFM" + r).position().top;

                        $("#fo1FWFM" + r).append($img);

                        $("#ImgR").css({ 'position': 'absolute', 'z-index': '100', left: Left + 1737, top: Top + 15 });
                        $("#ImgR").show();
                        $("#ImgR").attr({ id: "ImRFWFM" + r });
                    } 

                    b2_positionFW++;
                }

                else if (b3_positionFW == data.d[dataCount[i]].buttonGroupPosition && data.d[dataCount[i]].buttonGroup == 3)
                {
                    var $ctrl = $('<input/>').attr({ type: 'button', id: "btnFWFM" + data.d[dataCount[i]].buttonNumber, value: $.trim(data.d[dataCount[i]].buttonName) }).addClass("Button11");
                    $($ctrl).css({ "height": "50px", "width": '1780px', "text-align": "left", "background-color": "White", "border-style": "solid", "border-weight": "1px", "border-color": "Silver", 'margin-bottom': "21px" });
                
                    jQuery('<div/>', {
                        id: 'fo1FWFM' + data.d[dataCount[i]].buttonNumber,
                        class: "fo1",
                    }).appendTo('#Panel' + 14);

                    if (data.d[dataCount[i]].parameter2 == 1)
                    {
                        $($ctrl).css({ 'border-left-style': 'solid', 'border-left-width': '3px', 'border-left-color': 'Red' });
                    }

                    $("#fo1FWFM" + data.d[dataCount[i]].buttonNumber).append($ctrl);

                    if (data.d[dataCount[i]].parameter1 == 1)
                    {
                        var $img = '<img id="ImgR" class="ImgR" src="images/icon_parameter_1.PNG"  weight="12">';

                        var Left = $("#btnFWFM" + r).position().left;
                        var Top = $("#btnFWFM" + r).position().top;

                        $("#fo1FWFM" + r).append($img);

                        $("#ImgR").css({ 'position': 'absolute', 'z-index': '100', left: Left + 1737, top: Top + 15 });
                        $("#ImgR").show();
                        $("#ImgR").attr({ id: "ImRFWFM" + r });
                    } 

                    b3_positionFW++;
                }
            }
            if (i == check2)
            {
                stopLoading++;
                if (stopLoading > 100)
                {
                    i = countNumber;
                }
                else
                {
                    i = -1;
                }
            }
            if (b1_positionFW == b1_maxFW + 1 && b2_positionFW == b2_maxFW + 1 && b3_positionFW == b3_maxFW + 1)
            {
                i = countNumber;                        
            }
    }

    $("#LoadingScreen").fadeTo(100, 0.0, function () { $("#LoadingScreen").hide(); });
}
function OnError14(data) {

}