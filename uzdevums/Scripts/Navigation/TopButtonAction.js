//Скрипт добавляет функционал кнопкам сверху. В данном случае позволяет переключаться между разделами кнопок.

$(document).ready(function () {
    $("#TopButton1").click(function () {

        var src = $('#TopButton1').attr('src');

        if (src == 'images/top_icons/1_on.jpg') {
            //$("#TopButton1").attr("src", "images/top_icons/1_off.jpg");

        } else if (src == "images/top_icons/1_off.jpg") {
            $("#TopButton1").attr("src", "images/top_icons/1_on.jpg");
            $("#TopButton2").attr("src", "images/top_icons/2_off.jpg");
        }
        FolderViewParameter = 0;

        ViewParameter = 1;

        if (ModeParameter == 2) {
            $("#FolderViewTop").css('visibility', 'hidden');
            $("#FolderViewTable").css('visibility', 'hidden');
            $("#TimeViewTop").css('visibility', 'hidden');
            $("#TimeViewTable").css('visibility', 'hidden');
            $("#FocusModeTable").css('visibility', 'visible');
            $("#FocusModeTableFM").css('visibility', 'hidden');
            FocusModeParameter = 1340;
            FolderViewParameter = 0;
        }
        else {
            $("#FolderViewTop").css('visibility', 'hidden');
            $("#FolderViewTable").css('visibility', 'hidden');
            $("#TimeViewTop").css('visibility', 'visible');
            $("#TimeViewTable").css('visibility', 'visible');
            $("#FocusModeTable").css('visibility', 'hidden');
            $("#FocusModeTableFM").css('visibility', 'hidden');
            FocusModeParameter = 0;
            FolderViewParameter = 0;
        }

        r = 0;
        console.log(ChangeButtonType());
    });
});

var FolderViewParameter = 0;

var FocusModeParameter = 0;

var ViewParameter = 1;

var ModeParameter = 1;

$(document).ready(function () {
    $("#TopButton2").click(function () {

        var src = $('#TopButton2').attr('src');

        if (src == 'images/top_icons/2_on.jpg') {
            //$("#TopButton2").attr("src", "images/top_icons/2_off.jpg");

        } else if (src == "images/top_icons/2_off.jpg") {
            $("#TopButton2").attr("src", "images/top_icons/2_on.jpg");
            $("#TopButton1").attr("src", "images/top_icons/1_off.jpg");
        }

        //FolderViewParameter = 150;

        ViewParameter = 2;

        if (ModeParameter == 2) {
            $("#FolderViewTop").css('visibility', 'hidden');
            $("#FolderViewTable").css('visibility', 'hidden');
            $("#TimeViewTop").css('visibility', 'hidden');
            $("#TimeViewTable").css('visibility', 'hidden');
            $("#FocusModeTable").css('visibility', 'hidden');
            $("#FocusModeTableFM").css('visibility', 'visible');
            FocusModeParameter = 1340;
            FolderViewParameter = 0;
        }
        else {
            $("#FolderViewTop").css('visibility', 'visible');
            $("#FolderViewTable").css('visibility', 'visible');
            $("#TimeViewTop").css('visibility', 'hidden');
            $("#TimeViewTable").css('visibility', 'hidden');
            $("#FocusModeTable").css('visibility', 'hidden');
            $("#FocusModeTableFM").css('visibility', 'hidden');
            FocusModeParameter = 0;
            FolderViewParameter = 150;
        }

        r = 0;
        console.log(ChangeButtonType());
    });
});

$(document).ready(function () {
    $("#TopButton3").click(function () {

        var src = $('#TopButton3').attr('src');

        if (src == 'images/top_icons/3_on.jpg') {
            //$("#TopButton3").attr("src", "images/top_icons/3_off.jpg");

        } else if (src == "images/top_icons/3_off.jpg") {
            $("#TopButton3").attr("src", "images/top_icons/3_on.jpg");
            $("#TopButton4").attr("src", "images/top_icons/4_off.jpg");
        }

        if (ViewParameter == 2) {
            $("#FolderViewTop").css('visibility', 'hidden');
            $("#FolderViewTable").css('visibility', 'hidden');
            $("#TimeViewTop").css('visibility', 'hidden');
            $("#TimeViewTable").css('visibility', 'hidden');
            $("#FocusModeTable").css('visibility', 'hidden');
            $("#FocusModeTableFM").css('visibility', 'visible');
        }
        else {
            $("#FolderViewTop").css('visibility', 'hidden');
            $("#FolderViewTable").css('visibility', 'hidden');
            $("#TimeViewTop").css('visibility', 'hidden');
            $("#TimeViewTable").css('visibility', 'hidden');
            $("#FocusModeTable").css('visibility', 'visible');
            $("#FocusModeTableFM").css('visibility', 'hidden');
        }

        $("#BackgroundLinesTable").css('visibility', 'hidden');

        FolderViewParameter = 0;
        FocusModeParameter = 1340;

        ModeParameter = 2;

        console.log(ChangeButtonType());
    });
});

$(document).ready(function () {
    $("#TopButton4").click(function () {

        var src = $('#TopButton4').attr('src');

        if (src == 'images/top_icons/4_on.jpg') {
            //$("#TopButton4").attr("src", "images/top_icons/4_off.jpg");

        } else if (src == "images/top_icons/4_off.jpg") {
            $("#TopButton4").attr("src", "images/top_icons/4_on.jpg");
            $("#TopButton3").attr("src", "images/top_icons/3_off.jpg");
        }

        if (ViewParameter == 2) {
            $("#FolderViewTop").css('visibility', 'visible');
            $("#FolderViewTable").css('visibility', 'visible');
            $("#TimeViewTop").css('visibility', 'hidden');
            $("#TimeViewTable").css('visibility', 'hidden');
            $("#FocusModeTable").css('visibility', 'hidden');
            $("#FocusModeTableFM").css('visibility', 'hidden');
            FolderViewParameter = 150;
            FocusModeParameter = 0;
        }
        else {
            $("#FolderViewTop").css('visibility', 'hidden');
            $("#FolderViewTable").css('visibility', 'hidden');
            $("#TimeViewTop").css('visibility', 'visible');
            $("#TimeViewTable").css('visibility', 'visible');
            $("#FocusModeTable").css('visibility', 'hidden');
            $("#FocusModeTableFM").css('visibility', 'hidden');
            FocusModeParameter = 0;
            FolderViewParameter = 0;
        }

        $("#BackgroundLinesTable").css('visibility', 'visible');

        ModeParameter = 1;

        console.log(ChangeButtonType());
    });
});