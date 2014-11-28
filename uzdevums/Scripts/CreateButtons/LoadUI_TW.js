//Скрипты позволяют делать запрос в базу данных, что бы получить данные и потом обрабатывают эти данные, для создания кнопок, при успешной авторизации на сайт.
//В данном случае заполняеться кнопками раздел Time View Planning Mode.

function GetCompanies4() {
    $.ajax({
        type: "POST",
        url: "Main.aspx/GetCompanies2",
        data: "{}",
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        success: OnSuccess4,
        error: OnError4
    });
}

var b1_position = 1;
var b2_position = 1;
var b3_position = 1;
var b4_position = 1;

function OnSuccess4(data) {
    
    var dataCount = []
    var countNumber = 0;

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
            if($("#" + $.trim(data.d[dataCount[i]].buttonID)).length)
            {                                        
            }
            else 
            {                            
                if (b1_position == data.d[dataCount[i]].buttonPosition && data.d[dataCount[i]].buttonType == 1)
                {
                    var $ctrl = $('<input/>').attr({ type: 'button', id: $.trim(data.d[dataCount[i]].buttonID), value: $.trim(data.d[dataCount[i]].buttonName) }).addClass("Button11");
                    $($ctrl).css({ "height": "50px", "width": '440px', "text-align": "left", "background-color": "White", "border-style": "solid", "border-weight": "1px", "border-color": "Silver", 'margin-bottom': "21px" });
                
                    jQuery('<div/>', {
                        id: 'fo1' + data.d[dataCount[i]].buttonNumber,
                        class: "fo1",
                    }).appendTo('#Panel' + data.d[dataCount[i]].buttonType);

                    if (data.d[dataCount[i]].parameter2 == 1)
                    {
                        $($ctrl).css({ 'border-left-style': 'solid', 'border-left-width': '3px', 'border-left-color': 'Red' });
                    }

                    $("#fo1" + $.trim(data.d[dataCount[i]].buttonNumber)).append($ctrl);

                    b1_position++;
                }

                else if (b2_position == data.d[dataCount[i]].buttonPosition && data.d[dataCount[i]].buttonType == 2)
                {
                    var $ctrl = $('<input/>').attr({ type: 'button', id: $.trim(data.d[dataCount[i]].buttonID), value: $.trim(data.d[dataCount[i]].buttonName) }).addClass("Button11");
                    $($ctrl).css({ "height": "50px", "width": '440px', "text-align": "left", "background-color": "White", "border-style": "solid", "border-weight": "1px", "border-color": "Silver", 'margin-bottom': "21px" });
                
                    jQuery('<div/>', {
                        id: 'fo1' + data.d[dataCount[i]].buttonNumber,
                        class: "fo1",
                    }).appendTo('#Panel' + data.d[dataCount[i]].buttonType);

                    if (data.d[dataCount[i]].parameter2 == 1)
                    {
                        $($ctrl).css({ 'border-left-style': 'solid', 'border-left-width': '3px', 'border-left-color': 'Red' });
                    }

                    $("#fo1" + $.trim(data.d[dataCount[i]].buttonNumber)).append($ctrl);

                    b2_position++;
                }

                else if (b3_position == data.d[dataCount[i]].buttonPosition && data.d[dataCount[i]].buttonType == 3)
                {
                        var $ctrl = $('<input/>').attr({ type: 'button', id: $.trim(data.d[dataCount[i]].buttonID), value: $.trim(data.d[dataCount[i]].buttonName) }).addClass("Button11");
                    $($ctrl).css({ "height": "50px", "width": '440px', "text-align": "left", "background-color": "White", "border-style": "solid", "border-weight": "1px", "border-color": "Silver", 'margin-bottom': "21px" });
                
                    jQuery('<div/>', {
                        id: 'fo1' + data.d[dataCount[i]].buttonNumber,
                        class: "fo1",
                    }).appendTo('#Panel' + data.d[dataCount[i]].buttonType);

                    if (data.d[dataCount[i]].parameter2 == 1)
                    {
                        $($ctrl).css({ 'border-left-style': 'solid', 'border-left-width': '3px', 'border-left-color': 'Red' });
                    }

                    $("#fo1" + $.trim(data.d[dataCount[i]].buttonNumber)).append($ctrl);

                    b3_position++;
                }

                else if (b4_position == data.d[dataCount[i]].buttonPosition && data.d[dataCount[i]].buttonType == 4)
                {
                    var $ctrl = $('<input/>').attr({ type: 'button', id: $.trim(data.d[dataCount[i]].buttonID), value: $.trim(data.d[dataCount[i]].buttonName) }).addClass("Button11");
                    $($ctrl).css({ "height": "50px", "width": '440px', "text-align": "left", "background-color": "White", "border-style": "solid", "border-weight": "1px", "border-color": "Silver", 'margin-bottom': "21px" });
                
                    jQuery('<div/>', {
                        id: 'fo1' + data.d[dataCount[i]].buttonNumber,
                        class: "fo1",
                    }).appendTo('#Panel' + data.d[dataCount[i]].buttonType);

                    if (data.d[dataCount[i]].parameter2 == 1)
                    {
                        $($ctrl).css({ 'border-left-style': 'solid', 'border-left-width': '3px', 'border-left-color': 'Red' });
                    }

                    $("#fo1" + $.trim(data.d[dataCount[i]].buttonNumber)).append($ctrl);

                    b4_position++;
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
            if (b1_position == b1_max + 1 && b2_position == b2_max + 1 && b3_position == b3_max + 1 && b4_position == b4_max + 1)
            {
                i = countNumber;                        
            }
    }

    $("#FolderViewTop").show();
    $("#FolderViewTable").show();
    $("#FocusModeTable").show();
    $("#FocusModeTableFM").show();

    $("#FolderViewTop").css('visibility', 'hidden');
    $("#FolderViewTable").css('visibility', 'hidden');
    $("#TimeViewTop").css('visibility', 'visible');
    $("#TimeViewTable").css('visibility', 'visible');

    $("#FocusModeTable").css('visibility', 'hidden');
    $("#FocusModeTableFM").css('visibility', 'hidden');

    $("#TopButton1").attr("src", "images/top_icons/1_on.jpg");
    $("#TopButton2").attr("src", "images/top_icons/2_off.jpg");

    FolderViewParameter = 0;
    
    $("#div2").show();

    console.log(OnSuccess11(data));
}
function OnError4(data) {

}