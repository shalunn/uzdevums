//Скрипт реализует функцию авторизации на сайте.

var newEmail = 0;

$(document).ready(function () {
    $('#Button4').click(function () {
        newEmail = $("#TextBox1").val();
        newPassword = $("#TextBox2").val();
        var testEmail = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;
        if (testEmail.test(newEmail)) {

            if ($("#TextBox2").val().length > 5) {
                $("#div4").fadeTo(50, 0.0, function () { $("#div4").hide(); });
                console.log(GetCompanies2());
                $("#LoadingScreen").fadeTo(100, 0.0);
                $("#LoadingScreen").show();
                $("#LoadingScreen").fadeTo(100, 1.0);
                $("#Label1").text(newEmail);
                $("#Label2").text(newEmail);
            }
            else {
                $("#SignInAnswer").text("Wrong Password");
                return false;
            }
        }
        else {
            $("#SignInAnswer").text("Wrong Email");
            return false;
        }
    });

    $('#TextBox2').keydown(function (event) {
        if (event.keyCode == 13) {
            newEmail = $("#TextBox1").val();
            newPassword = $("#TextBox2").val();
            var testEmail = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;
            if (testEmail.test(newEmail)) {

                if ($("#TextBox2").val().length > 5) {
                    console.log(GetCompanies2());
                    $("#LoadingScreen").fadeTo(100, 0.0);
                    $("#LoadingScreen").show();
                    $("#LoadingScreen").fadeTo(100, 1.0);
                    $("#Label1").text(newEmail);
                    $("#Label2").text(newEmail);
                }
                else {
                    $("#SignInAnswer").text("Wrong Password");
                    return false;
                }
            }
            else {
                $("#SignInAnswer").text("Wrong Email");
                return false;
            }
            event.preventDefault();
            return false;
        }
    });
});

function GetCompanies2() {
    $.ajax({
        type: "POST",
        url: "Main.aspx/GetCompanies",
        data: "{}",
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        success: OnSuccess2,
        error: OnError2
    });
}
function OnSuccess2(data) {

    result = 0;

    if (newEmail == "E-mail") {
        result = 0;
    }

    if (newPassword == "Password") {
        result = 0;
    }

    for (var i = 0; i < data.d.length; i++) {
        if (newEmail == $.trim(data.d[i].email) && newPassword == $.trim(data.d[i].password)) {
            //alert("Correct");
            activeUser = $.trim(data.d[i].email);
            i = data.d.length;
            result = 1;
        }
    }

    $("#SignInAnswer").text("Wrong Email or Password");

    if (result == 1) {
//        $("#div1").hide();
//        $("#div2").show();
//        $("#table1").animate({ left: '-355px' });
        $("#SignInAnswer").text("");

//        $("#TextBox1").val("");
//        $("#TextBox2").val("");
    }
    $(".Button11").remove();
    $(".fo1").remove();
//    $("#TextBox1").val("E-mail");
//    $("#TextBox2").val("Password");
    console.log(GetCompanies4());
    //console.log(GetCompanies11());

    b1_position = 1;
    b2_position = 1;
    b3_position = 1;
    b4_position = 1;

    b1_positionFW = 1;
    b2_positionFW = 1;
    b3_positionFW = 1;
}
function OnError2(data) {

}