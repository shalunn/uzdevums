//Скрипт управляет боковой панелью слева, придавая ей необходимый функционал.

$(document).ready(function () {
    $("#SignInWithEmail").click(function () {
        $("#table1").animate({ left: '0px' });
        //$("#TextBox1").val("admin@admin.ru");
        //$("#TextBox2").val("adminadmin");
        //$("#TextBox2").attr("Type", "Password");
    });
});


$(document).ready(function () {
    $("#TableSideBar").click(function () {
        $("#div2").animate({ left: '355px' });
        $("#div4").animate({ left: '355px' });
        $("#div5").animate({ left: '0px' });
        $("#div4").show();
        $("#div4").fadeTo(300, 0.5);
        //$("#div4").show();
        $("#Premium_1").animate({ left: '355px' });
        $("#Premium_1").fadeTo(50, 0.0, function () { $("#Premium_1").hide(); });
        console.log(CloseTabs());
    });
});


$(document).ready(function () {
    $("#div4").click(function () {
        $("#div2").animate({ left: '0px' });
        $("#div4").animate({ left: '56px' });
        $("#div5").animate({ left: '-350px' });
        $("#Profile_1").animate({ left: '-350px' });
        $("#Preferences_1").animate({ left: '-350px' });
        $("#Feedback_1").animate({ left: '-350px' });
        $("#div4").fadeTo(50, 0.0, function () { $("#div4").hide(); });
    });
});


$(document).ready(function () {
    $("#TR_1").click(function () {
        $("#Profile_1").animate({ left: '0px' });
    });
});
$(document).ready(function () {
    $("#Image6").click(function () {
        $("#Profile_1").animate({ left: '-350px' });
    });
    $('#Image6').css('cursor', 'pointer');
});
$(document).ready(function () {
    $("#TR_2").click(function () {
        $("#Profile_1").animate({ left: '-350px' });
        $("#div2").animate({ left: '0px' });
        $("#div5").animate({ left: '-350px' });
        $("#div4").animate({ left: '56px' });
        $("#div4").fadeTo(300, 0.0, function () { $("#div4").hide(); });
        $("#Premium_1").animate({ left: '56px' });
        $("#Premium_1").fadeTo(50, 1.0);
        $("#Premium_1").show();
        premium = 0;
        $("#Image27").attr("src", "images/Premium/Premium_1.PNG");
        $("#Image28").attr("src", "images/Premium/PremiumImg_1.PNG");
    });
    $("#TD5").click(function () {
        $("#Profile_1").animate({ left: '-350px' });
        $("#div2").animate({ left: '0px' });
        $("#div5").animate({ left: '-350px' });
        $("#div4").animate({ left: '56px' });
        $("#div4").fadeTo(300, 0.0, function () { $("#div4").hide(); });
        $("#Premium_1").animate({ left: '56px' });
        $("#Premium_1").fadeTo(50, 1.0);
        $("#Premium_1").show();
        premium = 0;
        $("#Image27").attr("src", "images/Premium/Premium_1.PNG");
        $("#Image28").attr("src", "images/Premium/PremiumImg_1.PNG");
    });

});
$(document).ready(function () {
    $("#TR_3").click(function () {
        $("#Preferences_1").animate({ left: '0px' });
    });

    $("#Image7").click(function () {
        $("#Preferences_1").animate({ left: '-350px' });
    });
    $('#Image7').css('cursor', 'pointer');
    ////////////////
    $("#TR_4").click(function () {
        $("#Feedback_1").animate({ left: '0px' });
    });
    $('#TD105').css('cursor', 'pointer');
    $('#TD106').css('cursor', 'pointer');
    $("#Image8").click(function () {
        $("#Feedback_1").animate({ left: '-350px' });
    });
    $('#Image8').css('cursor', 'pointer');
});
