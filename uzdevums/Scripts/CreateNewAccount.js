//Скрипт позволяет создавать новый аккаунт в разделе Create New Account и вносить его в базу данных.

$(document).ready(function () {
    $('#Button1').click(function () {
        newName = $("#TextBox11").val();
        newEmail = $("#TextBox12").val();
        newPassword = $("#TextBox13").val();
        var testEmail = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;

        if ($("#TextBox11").val().length > 5) {
            if (testEmail.test(newEmail)) {

                if ($("#TextBox13").val().length > 5) {
                    console.log(GetCompanies());
                }
                else {
                    $("#CreateNewAccountAnswer").text("Wrong Password");
                    return false;
                }
            }
            else {
                $("#CreateNewAccountAnswer").text("Wrong Email");
                return false;
            }
        }
        else {
            $("#CreateNewAccountAnswer").text("Wrong Name");
            return false;
        }
    });
});

function GetCompanies() {
    $.ajax({
        type: "POST",
        url: "Main.aspx/GetCompanies",
        data: "{}",
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        success: OnSuccess,
        error: OnError
    });
}
function OnSuccess(data) {

    result = 0;

    if (newEmail == "E-mail") {
        result = 1;
    }

    if (newPassword == "Password") {
        result = 1;
    }

    for (var i = 0; i < data.d.length; i++) {
        if (newEmail == $.trim(data.d[i].email) || newPassword == $.trim(data.d[i].password)) {
            //alert("Email already exists");
            i = data.d.length;
            result = 1;
            $("#CreateNewAccountAnswer").text("Email or Password already exists");
        }
    }

    if (result == 0) {
        var Name = $("#TextBox11").val();
        var email = $("#TextBox12").val();
        var userPassword = $("#TextBox13").val();
        $.ajax({
            url: "Main.aspx/SaveData",
            type: "POST",
            dataType: "json",
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify({
                "Name": Name,
                "email": email,
                "userPassword": userPassword
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
            $("#CreateNewAccount").animate({ left: '-355px' });
        });
    }
}
function OnError(data) {

}