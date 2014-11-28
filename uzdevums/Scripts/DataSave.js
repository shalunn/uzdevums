//Скрипт сохранает новые кнопки с данными в базу данных при их создании, или при создании в них подзаданий "Sub tasks".

var buttonSub = 0;

var typeNumber = 1;

function DataSave() {
    var username = activeUser;
    var buttonID = ("btn" + r);
    var buttonName = $("#btn" + r).val()
    var buttonNumber = r;
    var buttonTime = "none";
    var buttonType = 1;
    var buttonPosition = 1;
    var buttonGroup = typeNumber;
    var buttonGroupPosition = 1;
        
    if ($("#TextBox9").val() == "Add a note here...") {
        var buttonNotes = "";
    }
    else {
        var buttonNotes = $("#TextBox9").val();
    }

    if ($("#TextBox10").val() == "+ Add a sub task") {
        var buttonSubtasks = "";
    }
    else {
        var buttonSubtasks = $("#TextBox10").val();
    }
    $.ajax({
        url: "Main.aspx/SaveData2",
        type: "POST",
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({
            "username": username,
            "buttonID": buttonID,
            "buttonName": buttonName,
            "buttonNumber": buttonNumber,
            "buttonTime": buttonTime,
            "buttonType": buttonType,
            "buttonGroup": buttonGroup,
            "buttonPosition": buttonPosition,
            "buttonGroupPosition": buttonGroupPosition,
            "buttonNotes": buttonNotes,
            "buttonSubtasks": buttonSubtasks,
            "parameter1": parameter1,
            "parameter2": parameter2
        }),
        success: function (data) {
            if (data.d == "success") {
                //alert("Data saved successfully");
            }
        },
        error: function (xhr, ajaxOptions, thrownError) {
            alert(thrownError);
        }
    }).done(function () {
        console.log(ChangeButtonType());
    });
}