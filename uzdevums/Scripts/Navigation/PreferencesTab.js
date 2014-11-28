//Скрипт управляет разделом Preferences, давая возможность менять параметры при нажатии мыши на них. Сами параметры в данный момент не меняют функционал сайта.

$(document).ready(function () {
    $("#Label3").click(function () {
        if ($(this).text() === "OFF") {
            $(this).text("ON");
        }
        else {
            $(this).text("OFF");
        }
    });
    $("#Label4").click(function () {
        if ($(this).text() === "12 HOUR") {
            $(this).text("24 HOUR");
        }
        else {
            $(this).text("12 HOUR");
        }
    });
    $("#Label5").click(function () {
        if ($(this).text() === "MM/DD/YY") {
            $(this).text("DD/MM/YY");
        }
        else {
            $(this).text("MM/DD/YY");
        }
    });
    $("#Label6").click(function () {
        if ($(this).text() === "SUN") {
            $(this).text("MON");
        }
        else if ($(this).text() === "SAT") {
            $(this).text("SUN");
        }
        else if ($(this).text() === "MON") {
            $(this).text("SAT");
        }
    });
    $('#Label3').css('cursor', 'pointer');
    $('#Label4').css('cursor', 'pointer');
    $('#Label5').css('cursor', 'pointer');
    $('#Label6').css('cursor', 'pointer');
});