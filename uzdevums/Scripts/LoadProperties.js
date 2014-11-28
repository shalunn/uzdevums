//Скрипт загружает данные, которые находяться в кнопках.

function GetCompanies5() {
    $.ajax({
        type: "POST",
        url: "Main.aspx/GetCompanies2",
        data: "{}",
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        success: OnSuccess5,
        error: OnError4
    });
}
function OnSuccess5(data) {
    var dataCount = []
    var countNumber = 0;

    for (var i = 0; i < data.d.length; i++) {
        if (newEmail == $.trim(data.d[i].username))
        {
            if (SubButtonID == $.trim(data.d[i].buttonID)) {
                dataCount[countNumber] = i;
                countNumber++;
            }
        }
    }

    if ($.trim(data.d[dataCount[0]].buttonNotes) != "")
    {
        $("#TextBox9").val($.trim(data.d[dataCount[0]].buttonNotes));
    }

    //////

    if ($.trim(data.d[dataCount[0]].parameter1) == 0) {
        $("#Image14").attr("src", "images/icon_1.PNG");
    } else if ($.trim(data.d[dataCount[0]].parameter1) == 1) {
        $("#Image14").attr("src", "images/icon_11.PNG");
    }

    if ($.trim(data.d[dataCount[0]].parameter2) == 0) {
        $("#Image15").attr("src", "images/icon_2.PNG");
    } else if ($.trim(data.d[dataCount[0]].parameter2) == 1) {
        $("#Image15").attr("src", "images/icon_22.PNG");
    }

    typeName = 0;

    if (data.d[dataCount[0]].buttonGroup == 1)
    {
        typeName = "PERSONAL";
        $("#TD_Personal").css({ 'border-left-style': 'solid', 'border-left-width': '5px', 'border-left-color': '#26A3D2' });
    }
    else if (data.d[dataCount[0]].buttonGroup == 2)
    {
        typeName = "WORK";
        $("#TD_Work").css({ 'border-left-style': 'solid', 'border-left-width': '5px', 'border-left-color': '#26A3D2' });
    }
    else if (data.d[dataCount[0]].buttonGroup == 3)
    {
        typeName = "NEW FOLDER";
    }
    
    $("#SwitchType").empty();
    
    $("#SwitchType").append(typeName);

    $("#Properties_1").show();

    //////

    for (var i = 0; i < countNumber; i++) {
        if ($.trim(data.d[dataCount[i]].buttonSubtasks) != "")
        {
            var $ctrl = $('<input/>').attr({ type: 'button', id: 'btnST' + i, value: $.trim(data.d[dataCount[i]].buttonSubtasks) }).addClass("SubTasksClass");
            $($ctrl).css({ "height": "50px", "width": '1150px', "text-align": "left", "background-color": "White", "border-style": "none", "border-bottom-style": "solid", "border-bottom-weight": "1px", "border-bottom-color": "#C0C0C0", 'margin-bottom': "0px", "font-size": "medium", "padding-left": "30px",  });
                
            $("#SubTasksPanel_1").append($ctrl);
        }
    }

    SubTasks = countNumber;
}
function OnError5(data) {

}