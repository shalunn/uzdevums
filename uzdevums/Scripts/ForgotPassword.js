//Скрипт позволяет пользователям увидеть пароль от своего аккаунта, введя его эмайл.

$(document).ready(function () {
    $('#Button13').click(function () {
        newEmail = $("#TextBox14").val();
        var testEmail = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;
        if (testEmail.test(newEmail)) {

            console.log(GetCompanies3());
        }
        else {
            $("#ForgotPasswordAnswer").text("Wrong Email");
            return false;
        }
    });
});

function GetCompanies3() {
    $.ajax({
        type: "POST",
        url: "Main.aspx/GetCompanies",
        data: "{}",
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        success: OnSuccess3,
        error: OnError3
    });
}
function OnSuccess3(data) {

    result = 0;
    
    for (var i = 0; i < data.d.length; i++) {
        if (newEmail == $.trim(data.d[i].email)) {
            //alert("Correct");
            $("#TextBox14").val("Your password is " + $.trim(data.d[i].password));
            i = data.d.length;
            $("#ForgotPasswordAnswer").text("");
            result = 1;
        }
    }
    if (result == 0) {
        $("#ForgotPasswordAnswer").text("Wrong Email");
    }
}
function OnError3(data) {

}