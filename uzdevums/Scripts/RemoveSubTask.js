//Скрипт удаляет подзадания кнопок из базы данных, указав их ID.

function RemoveSubTask() {
    $.ajax({
        type: "POST",
        url: "Main.aspx/GetCompanies2",
        data: "{}",
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        success: OnSuccess7,
        error: OnError7
    });
}

var SubTaskToRemove = 0;

function OnSuccess7(data) {

    var RowID = 0;

    for (var i = 0; i < data.d.length; i++) {
        if (newEmail == $.trim(data.d[i].username))
        {
            if (SubTaskToRemove == $.trim(data.d[i].buttonSubtasks) && ButtonToRemove == $.trim(data.d[i].buttonID)) {

                RowID = $.trim(data.d[i].id);

                $.ajax({
                    url: "Main.aspx/RemoveButton",
                    type: "POST",
                    dataType: "json",
                    contentType: "application/json; charset=utf-8",
                    data: JSON.stringify({
                        "ID": RowID,
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
            }
        }
    }
}
function OnError7(data) {

}