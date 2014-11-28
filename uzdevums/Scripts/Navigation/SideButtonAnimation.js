//Скрипт придаёт анимацию кнопкам в боковой панели слева, при наведении мыши на них.

$(document).ready(function () {
    $("#TR_1").hover(function () {
        $("#div_1").animate({ left: '0px' }, { queue: false, duration: 150 });
        $('#TR_1').css('cursor', 'pointer');
    }, function () {
        $("#div_1").animate({ left: '-5px' }, { queue: false, duration: 150 });
    });
    $("#TR_1").hover(function () {
        $("#TD11").css("color", "#0298D1");
    }, function () {
        $("#TD11").css("color", "#CCCCCC");
    });
    ///////////////
    $("#TR_2").hover(function () {
        $("#div_2").animate({ left: '0px' }, { queue: false, duration: 150 });
        $('#TR_2').css('cursor', 'pointer');
    }, function () {
        $("#div_2").animate({ left: '-5px' }, { queue: false, duration: 150 });
    });
    $("#TR_2").hover(function () {
        $("#TD22").css("color", "#0298D1");
    }, function () {
        $("#TD22").css("color", "#CCCCCC");
    });
    ////////////////////
    $("#TR_3").hover(function () {
        $("#div_3").animate({ left: '0px' }, { queue: false, duration: 150 });
        $('#TR_3').css('cursor', 'pointer');
    }, function () {
        $("#div_3").animate({ left: '-5px' }, { queue: false, duration: 150 });
    });
    $("#TR_3").hover(function () {
        $("#TD33").css("color", "#0298D1");
    }, function () {
        $("#TD33").css("color", "#CCCCCC");
    });
    //////////////////////////////
    $("#TR_4").hover(function () {
        $("#div_4").animate({ left: '0px' }, { queue: false, duration: 150 });
        $('#TR_4').css('cursor', 'pointer');
    }, function () {
        $("#div_4").animate({ left: '-5px' }, { queue: false, duration: 150 });
    });
    $("#TR_4").hover(function () {
        $("#TD44").css("color", "#0298D1");
    }, function () {
        $("#TD44").css("color", "#CCCCCC");
    });
    ///////////////////////
    $("#TD5").hover(function () {
        $("#div_5").animate({ left: '0px' }, { queue: false, duration: 150 });
        $('#TD5').css('cursor', 'pointer');
    }, function () {
        $("#div_5").animate({ left: '-5px' }, { queue: false, duration: 150 });
    });
    $("#TD5").hover(function () {
        $("#TD55").css("color", "#0298D1");
    }, function () {
        $("#TD55").css("color", "#CCCCCC");
    });

    $("#TD55").hover(function () {
        $("#TD55").css("color", "#0298D1");
        $('#TD55').css('cursor', 'pointer');
    }, function () {
        $("#TD55").css("color", "#CCCCCC");
    });
    ///////////////////////
    $("#TD6").hover(function () {
        $("#div_6").animate({ left: '0px' }, { queue: false, duration: 150 });
        $('#TD6').css('cursor', 'pointer');
    }, function () {
        $("#div_6").animate({ left: '-5px' }, { queue: false, duration: 150 });
    });
    /////////////////////////
    $("#TD7").hover(function () {
        $("#div_7").animate({ left: '0px' }, { queue: false, duration: 150 });
        $('#TD7').css('cursor', 'pointer');
    }, function () {
        $("#div_7").animate({ left: '-5px' }, { queue: false, duration: 150 });
    });
    ///////////////////////
    $("#TD70").hover(function () {
        $("#div_8").animate({ left: '0px' }, { queue: false, duration: 150 });
    }, function () {
        $("#div_8").animate({ left: '-5px' }, { queue: false, duration: 150 });
    });
    /////////////////////////
    $("#TD71").hover(function () {
        $("#div_9").animate({ left: '0px' }, { queue: false, duration: 150 });
    }, function () {
        $("#div_9").animate({ left: '-5px' }, { queue: false, duration: 150 });
    });
    ///////////////////////
    $("#TD72").hover(function () {
        $("#div_10").animate({ left: '0px' }, { queue: false, duration: 150 });
    }, function () {
        $("#div_10").animate({ left: '-5px' }, { queue: false, duration: 150 });
    });
    /////////////////////////
    $("#TD73").hover(function () {
        $("#div_11").animate({ left: '0px' }, { queue: false, duration: 150 });
    }, function () {
        $("#div_11").animate({ left: '-5px' }, { queue: false, duration: 150 });
    });
    ///////////////
    $("#TD105").hover(function () {
        $("#div_15").animate({ left: '0px' }, { queue: false, duration: 150 });
    }, function () {
        $("#div_15").animate({ left: '-5px' }, { queue: false, duration: 150 });
    });
    ///////////////
    $("#TD106").hover(function () {
        $("#div_16").animate({ left: '0px' }, { queue: false, duration: 150 });
    }, function () {
        $("#div_16").animate({ left: '-5px' }, { queue: false, duration: 150 });
    });
}); 