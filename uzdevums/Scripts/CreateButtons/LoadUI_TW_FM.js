//Скрипты позволяют делать запрос в базу данных, что бы получить данные и потом обрабатывают эти данные, для создания кнопок, при успешной авторизации на сайт.
//В данном случае заполняеться кнопками раздел Time View Focus Mode.

function OnSuccess12(data) {
    
    var dataCount = []
    var countNumber = 0;

    b1_position = 1;
    b2_position = 1;
    b3_position = 1;
    b4_position = 1;

    var b1_max = 0;
    var b2_max = 0;
    var b3_max = 0;
    var b4_max = 0;

    var stopLoading = 0;

    for (var i = 0; i < data.d.length; i++) {
        if (newEmail == $.trim(data.d[i].username)) {
            dataCount[countNumber] = i;
            countNumber++;

            if (i == 0)
            {
                if (data.d[i].buttonType == 1)
                {
                    b1_max = data.d[i].buttonPosition;
                }

                else if (data.d[i].buttonType == 2)
                {
                    b2_max = data.d[i].buttonPosition;
                }

                else if (data.d[i].buttonType == 3)
                {
                    b3_max = data.d[i].buttonPosition;
                }

                else if (data.d[i].buttonType == 4)
                {
                    b4_max = data.d[i].buttonPosition;
                }
            }
            else if (i > 0)
            {
                if (data.d[i].buttonType == 1)
                {
                    if (data.d[i].buttonPosition > b1_max)
                    {b1_max = data.d[i].buttonPosition;}
                }

                else if (data.d[i].buttonType == 2)
                {
                    if (data.d[i].buttonPosition > b2_max)
                    {b2_max = data.d[i].buttonPosition;}
                }

                else if (data.d[i].buttonType == 3)
                {
                    if (data.d[i].buttonPosition > b3_max)
                    {b3_max = data.d[i].buttonPosition;}
                }

                else if (data.d[i].buttonType == 4)
                {
                    if (data.d[i].buttonPosition > b4_max)
                    {b4_max = data.d[i].buttonPosition;}
                }
            }
        }
    }

    b1_position = 1;
    b2_position = 1;
    b3_position = 1;
    b4_position = 1;

    var check2 = countNumber - 1;

    for (var i = 0; i < countNumber; i++) {   
            var r = data.d[dataCount[i]].buttonNumber;
            
            if($("#btnFM" + data.d[dataCount[i]].buttonNumber).length)
            {                                        
            }
            else 
            {                            
                if (b1_position == data.d[dataCount[i]].buttonPosition && data.d[dataCount[i]].buttonType == 1)
                {
                    var $ctrl = $('<input/>').attr({ type: 'button', id: "btnFM" + data.d[dataCount[i]].buttonNumber, value: $.trim(data.d[dataCount[i]].buttonName) }).addClass("Button11");
                    $($ctrl).css({ "height": "50px", "width": '1780px', "text-align": "left", "background-color": "White", "border-style": "solid", "border-weight": "1px", "border-color": "Silver", 'margin-bottom': "21px" });
                
                    jQuery('<div/>', {
                        id: 'fo1FM' + data.d[dataCount[i]].buttonNumber,
                        class: "fo1",
                    }).appendTo('#Panel' + 8);

                    if (data.d[dataCount[i]].parameter2 == 1)
                    {
                        $($ctrl).css({ 'border-left-style': 'solid', 'border-left-width': '3px', 'border-left-color': 'Red' });
                    }

                    $("#fo1FM" + $.trim(data.d[dataCount[i]].buttonNumber)).append($ctrl);
                    
                    if (data.d[dataCount[i]].parameter1 == 1)
                    {
                        var $img = '<img id="ImgR" class="ImgR" src="images/icon_parameter_1.PNG"  weight="12">';

                        var Left = $("#btnFM" + r).position().left;
                        var Top = $("#btnFM" + r).position().top;

                        $("#fo1FM" + r).append($img);

                        $("#ImgR").css({ 'position': 'absolute', 'z-index': '100', left: Left + 1737, top: Top + 15 });
                        $("#ImgR").show();
                        $("#ImgR").attr({ id: "ImRFM" + r });
                    }

                    if (data.d[dataCount[i]].parameter1 == 1)
                    {
                        var $img = '<img id="ImgR" class="ImgR" src="images/icon_parameter_1.PNG"  weight="12">';

                        var Left = $("#btn" + r).position().left;
                        var Top = $("#btn" + r).position().top;

                        $("#fo1" + r).append($img);

                        $("#ImgR").css({ 'position': 'absolute', 'z-index': '100', left: Left + 397, top: Top + 15 });
                        $("#ImgR").show();
                        $("#ImgR").attr({ id: "ImR" + r });
                    }

                    b1_position++;
                }

                else if (b2_position == data.d[dataCount[i]].buttonPosition && data.d[dataCount[i]].buttonType == 2)
                {
                    var $ctrl = $('<input/>').attr({ type: 'button', id: "btnFM" + data.d[dataCount[i]].buttonNumber, value: $.trim(data.d[dataCount[i]].buttonName) }).addClass("Button11");
                    $($ctrl).css({ "height": "50px", "width": '1780px', "text-align": "left", "background-color": "White", "border-style": "solid", "border-weight": "1px", "border-color": "Silver", 'margin-bottom': "21px" });
                
                    jQuery('<div/>', {
                        id: 'fo1FM' + data.d[dataCount[i]].buttonNumber,
                        class: "fo1",
                    }).appendTo('#Panel' + 9);

                    if (data.d[dataCount[i]].parameter2 == 1)
                    {
                        $($ctrl).css({ 'border-left-style': 'solid', 'border-left-width': '3px', 'border-left-color': 'Red' });
                    }

                    $("#fo1FM" + $.trim(data.d[dataCount[i]].buttonNumber)).append($ctrl);

                    if (data.d[dataCount[i]].parameter1 == 1)
                    {
                        var $img = '<img id="ImgR" class="ImgR" src="images/icon_parameter_1.PNG"  weight="12">';

                        var Left = $("#btnFM" + r).position().left;
                        var Top = $("#btnFM" + r).position().top;

                        $("#fo1FM" + r).append($img);

                        $("#ImgR").css({ 'position': 'absolute', 'z-index': '100', left: Left + 1737, top: Top + 15 });
                        $("#ImgR").show();
                        $("#ImgR").attr({ id: "ImRFM" + r });
                    }
                    
                    if (data.d[dataCount[i]].parameter1 == 1)
                    {
                        var $img = '<img id="ImgR" class="ImgR" src="images/icon_parameter_1.PNG"  weight="12">';

                        var Left = $("#btn" + r).position().left;
                        var Top = $("#btn" + r).position().top;

                        $("#fo1" + r).append($img);

                        $("#ImgR").css({ 'position': 'absolute', 'z-index': '100', left: Left + 397, top: Top + 15 });
                        $("#ImgR").show();
                        $("#ImgR").attr({ id: "ImR" + r });
                    } 

                    b2_position++;
                }

                else if (b3_position == data.d[dataCount[i]].buttonPosition && data.d[dataCount[i]].buttonType == 3)
                {
                    var $ctrl = $('<input/>').attr({ type: 'button', id: "btnFM" + data.d[dataCount[i]].buttonNumber, value: $.trim(data.d[dataCount[i]].buttonName) }).addClass("Button11");
                    $($ctrl).css({ "height": "50px", "width": '1780px', "text-align": "left", "background-color": "White", "border-style": "solid", "border-weight": "1px", "border-color": "Silver", 'margin-bottom': "21px" });
                
                    jQuery('<div/>', {
                        id: 'fo1FM' + data.d[dataCount[i]].buttonNumber,
                        class: "fo1",
                    }).appendTo('#Panel' + 10);

                    if (data.d[dataCount[i]].parameter2 == 1)
                    {
                        $($ctrl).css({ 'border-left-style': 'solid', 'border-left-width': '3px', 'border-left-color': 'Red' });
                    }

                    $("#fo1FM" + $.trim(data.d[dataCount[i]].buttonNumber)).append($ctrl);

                    if (data.d[dataCount[i]].parameter1 == 1)
                    {
                        var $img = '<img id="ImgR" class="ImgR" src="images/icon_parameter_1.PNG"  weight="12">';

                        var Left = $("#btnFM" + r).position().left;
                        var Top = $("#btnFM" + r).position().top;

                        $("#fo1FM" + r).append($img);

                        $("#ImgR").css({ 'position': 'absolute', 'z-index': '100', left: Left + 1737, top: Top + 15 });
                        $("#ImgR").show();
                        $("#ImgR").attr({ id: "ImRFM" + r });
                    }
                    
                    if (data.d[dataCount[i]].parameter1 == 1)
                    {
                        var $img = '<img id="ImgR" class="ImgR" src="images/icon_parameter_1.PNG"  weight="12">';

                        var Left = $("#btn" + r).position().left;
                        var Top = $("#btn" + r).position().top;

                        $("#fo1" + r).append($img);

                        $("#ImgR").css({ 'position': 'absolute', 'z-index': '100', left: Left + 397, top: Top + 15 });
                        $("#ImgR").show();
                        $("#ImgR").attr({ id: "ImR" + r });
                    } 

                    b3_position++;
                }

                else if (b4_position == data.d[dataCount[i]].buttonPosition && data.d[dataCount[i]].buttonType == 4)
                {
                    var $ctrl = $('<input/>').attr({ type: 'button', id: "btnFM" + data.d[dataCount[i]].buttonNumber, value: $.trim(data.d[dataCount[i]].buttonName) }).addClass("Button11");
                    $($ctrl).css({ "height": "50px", "width": '1780px', "text-align": "left", "background-color": "White", "border-style": "solid", "border-weight": "1px", "border-color": "Silver", 'margin-bottom': "21px" });
                
                    jQuery('<div/>', {
                        id: 'fo1FM' + data.d[dataCount[i]].buttonNumber,
                        class: "fo1",
                    }).appendTo('#Panel' + 11);

                    if (data.d[dataCount[i]].parameter2 == 1)
                    {
                        $($ctrl).css({ 'border-left-style': 'solid', 'border-left-width': '3px', 'border-left-color': 'Red' });
                    }

                    $("#fo1FM" + $.trim(data.d[dataCount[i]].buttonNumber)).append($ctrl);
                    
                    if (data.d[dataCount[i]].parameter1 == 1)
                    {
                        var $img = '<img id="ImgR" class="ImgR" src="images/icon_parameter_1.PNG"  weight="12">';

                        var Left = $("#btnFM" + r).position().left;
                        var Top = $("#btnFM" + r).position().top;

                        $("#fo1FM" + r).append($img);

                        $("#ImgR").css({ 'position': 'absolute', 'z-index': '100', left: Left + 1737, top: Top + 15 });
                        $("#ImgR").show();
                        $("#ImgR").attr({ id: "ImRFM" + r });
                    }
                    
                    if (data.d[dataCount[i]].parameter1 == 1)
                    {
                        var $img = '<img id="ImgR" class="ImgR" src="images/icon_parameter_1.PNG"  weight="12">';

                        var Left = $("#btn" + r).position().left;
                        var Top = $("#btn" + r).position().top;

                        $("#fo1" + r).append($img);

                        $("#ImgR").css({ 'position': 'absolute', 'z-index': '100', left: Left + 397, top: Top + 15 });
                        $("#ImgR").show();
                        $("#ImgR").attr({ id: "ImR" + r });
                    }  

                    b4_position++;
                }
            }
            if (i == check2)
            {
                stopLoading++;
                if (stopLoading > 1000)
                {
                    i = countNumber;
                }
                else
                {
                    i = -1;
                }
            }
            if (b1_position == b1_max + 1 && b2_position == b2_max + 1 && b3_position == b3_max + 1 && b4_position == b4_max + 1)
            {
                i = countNumber;                       
            }
    }

    $("#div1").hide();
    $("#table1").animate({ left: '-355px' });
    $("#TextBox1").val("E-mail");
    $("#TextBox2").val("Password");
    $("#TextBox2").attr("Type", "Text")

    console.log(OnSuccess14(data));
}
function OnError12(data) {

}