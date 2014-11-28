//Скрипт удаляет кнопки с данными из базы данных, указав их ID.

function RemoveButton() {
    $.ajax({
        type: "POST",
        url: "Main.aspx/GetCompanies2",
        data: "{}",
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        success: OnSuccess6,
        error: OnError6
    });
}

var ButtonToRemove = 0;

function OnSuccess6(data) {

    //var dataCount = []
    //var countNumber = 0;
    var RowID = 0;

    for (var i = 0; i < data.d.length; i++) {
        if (newEmail == $.trim(data.d[i].username))
        {
            if (ButtonToRemove == $.trim(data.d[i].buttonID)) {
                //dataCount[countNumber] = i;
                //countNumber++;
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
                    console.log(ChangeButtonType());
                });
            }
        }
    }
}
function OnError6(data) {

}