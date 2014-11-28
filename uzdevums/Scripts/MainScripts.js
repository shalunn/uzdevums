//Здесь находяться разные скрипты, которые управляют сменой курсора при наведении мыши, переключение изображений и текста при нажатии на них, и так далее.

$(document).ready(function () {
    $('#SwitchType').css('cursor', 'pointer');

});
var SubButtonID = 0;

$(document).on('click', '#SwitchType', function (e) {
    $("#Types_1").show();
});


$(document).ready(function () {
    $("#TD_Types td").hover(function () {
        $(this).css('background-color', '#F3F3F3');
        $(this).css('cursor', 'pointer');
    }, function () {
        $(this).css('background-color', 'White');
    });
});

var typeName = 0;

$(document).on('click', "#TD_Types td", function (e) {
    $("#SwitchType").empty();
    $("#SwitchType").append(e.target.title);

    $("#SwitchType1").empty();
    $("#SwitchType1").append(e.target.title);

    $("#Types_1").hide();

    $(this).css({ 'border-left-style': 'solid', 'border-left-width': '5px', 'border-left-color': '#26A3D2' });

    if (e.target.title == "PERSONAL")
    {
       $("#TD_Work").css({ 'border-left-style': 'solid', 'border-left-width': '0px', 'border-left-color': '#26A3D2' });
       typeName = "PERSONAL"; 
       typeNumber = 1;
    }
    else if (e.target.title == "WORK")
    {
       $("#TD_Personal").css({ 'border-left-style': 'solid', 'border-left-width': '0px', 'border-left-color': '#26A3D2' });
       typeName = "WORK";  
       typeNumber = 2;
    }
});

$(document).ready(function () {
    $("#Image14").click(function () {

        var src = $('#Image14').attr('src');
        
        if (src == 'images/icon_1.PNG') {
            $("#Image14").attr("src", "images/icon_11.PNG");
            
        } else if (src == "images/icon_11.PNG") {
            $("#Image14").attr("src", "images/icon_1.PNG");            
        }
    });

    $("#Image14").hover(function () {
        $(this).css('cursor', 'pointer');
    });
});

$(document).ready(function () {
    $("#Image15").click(function () {

        var src = $('#Image15').attr('src');
        
        if (src == 'images/icon_2.PNG') {
            $("#Image15").attr("src", "images/icon_22.PNG");
             
        } else if (src == "images/icon_22.PNG") {
            $("#Image15").attr("src", "images/icon_2.PNG");            
        }
    });

    $("#Image15").hover(function () {
        $(this).css('cursor', 'pointer');
    });
});

$(document).ready(function () {
    $("#Image22").click(function () {
        var top = $('#Invite_1').css("top");

        if (top == "422px") {
            $("#Invite_1").animate({ top: '0px' });

        } else if (top == "0px") {
            $("#Invite_1").animate({ top: '422px' });
        }
    });
});

$(document).ready(function () {
    $("#Image22").click(function () {

        var src = $('#Image22').attr('src');
        
        if (src == 'images/new_icon_5.PNG') {
            $("#Image22").attr("src", "images/new_icon_5R.PNG");
            
        } else if (src == "images/new_icon_5R.PNG") {
            $("#Image22").attr("src", "images/new_icon_5.PNG");            
        }
    });

    $("#Image22").hover(function () {
        $(this).css('cursor', 'pointer');
    });
});

$(document).ready(function () {
    $("#ImportContactsText_1").click(function () {
        var display = $('#ImportContacts_1').css("display");

        if (display == "none") {
            $("#ImportContacts_1").css("display", "block");

        } else if (display == "block") {
            $("#ImportContacts_1").css("display", "none");
        }
    });

    $("#ImportContactsText_1").hover(function () {
        $(this).css('cursor', 'pointer');
    });
});

$(document).on('click', '#Image17', function (e) {    
    $("#Notes_1").show();
    $("#SubTasks_1").hide();
    $("#Attachments_1").hide();
    $("#Share_1").hide();

    $("#Image17").attr("src", "images/Notes_2.PNG");
    $("#Image18").attr("src", "images/SubTasks_1.PNG");
    $("#Image19").attr("src", "images/Attachments_1.PNG");
    $("#Image20").attr("src", "images/Share_1.PNG");
});

$(document).on('click', '#Image18', function (e) {    
    $("#Notes_1").hide();
    $("#SubTasks_1").show();
    $("#Attachments_1").hide();
    $("#Share_1").hide();

    $("#Image17").attr("src", "images/Notes_1.PNG");
    $("#Image18").attr("src", "images/SubTasks_2.PNG");
    $("#Image19").attr("src", "images/Attachments_1.PNG");
    $("#Image20").attr("src", "images/Share_1.PNG");
});

$(document).on('click', '#Image19', function (e) {    
    $("#Notes_1").hide();
    $("#SubTasks_1").hide();
    $("#Attachments_1").show();
    $("#Share_1").hide();

    $("#Image17").attr("src", "images/Notes_1.PNG");
    $("#Image18").attr("src", "images/SubTasks_1.PNG");
    $("#Image19").attr("src", "images/Attachments_2.PNG");
    $("#Image20").attr("src", "images/Share_1.PNG");
});

$(document).on('click', '#Image20', function (e) {    
    $("#Notes_1").hide();
    $("#SubTasks_1").hide();
    $("#Attachments_1").hide();
    $("#Share_1").show();

    $("#Image17").attr("src", "images/Notes_1.PNG");
    $("#Image18").attr("src", "images/SubTasks_1.PNG");
    $("#Image19").attr("src", "images/Attachments_1.PNG");
    $("#Image20").attr("src", "images/Share_2.PNG");
});

$(document).ready(function () {
    $("#Image17").hover(function () {
        $(this).css('cursor', 'pointer');
    });
    $("#Image18").hover(function () {
        $(this).css('cursor', 'pointer');
    });
    $("#Image19").hover(function () {
        $(this).css('cursor', 'pointer');
    });
    $("#Image20").hover(function () {
        $(this).css('cursor', 'pointer');
    });
});
var SubTasks = 0;
$(document).ready(function () {
    
    $('#TextBox10').focus(function() {
        $(this).val('')
    });    
    
    $('#TextBox10').keydown(function (event) {

        if (event.keyCode == 13) {

            r = buttonSub;

            typeNumber = 1;

            parameter1 = 0;

            parameter2 = 0;
            
            console.log(DataSave());

            var $ctrl = $('<input/>').attr({ type: 'button', id: 'btnST' + SubTasks, value: $("#TextBox10").val() }).addClass("SubTasksClass");
            $($ctrl).css({ "height": "50px", "width": '1150px', "text-align": "left", "background-color": "White", "border-style": "none", "border-bottom-style": "solid", "border-bottom-weight": "1px", "border-bottom-color": "#C0C0C0", 'margin-bottom': "0px", "font-size": "medium", "padding-left": "30px",  });
            
            $("#SubTasksPanel_1").append($ctrl);

            $("#btnST" + SubTasks).focus();
            SubTasks++;

            $('#TextBox10').val("+ Add a sub task");

            event.preventDefault();
            return false;
        }
    });
});

$(document).on('click', '.SubTasksClass', function (e) {
    var val = e.target.id;
    var newVal = val.substring(5, val.length);
    SubTaskToRemove = $("#btnST" + newVal).val();
    ButtonToRemove = "btn" + buttonSub;
    $(this).remove();
    console.log(RemoveSubTask());
});

$(document).ready(function () {
    $(document).on('mouseenter', '.SubTasksClass', function (e) {
        $(this).animate({ 'background-color': '#F3F3F3' }, { queue: false, duration: 150 });
        $(this).css('cursor', 'pointer');
    }).on('mouseleave', '.SubTasksClass', function (e) {
        $(this).animate({ 'background-color': '#White' }, { queue: false, duration: 150 });
    });
});

function CloseTabs() {
    $("#Properties_1").hide();
    $("#Types_1").hide();
    $("#Notes_1").hide();
    $("#SubTasks_1").hide();
    $("#Attachments_1").hide();
    $("#Share_1").show();
    $("#Invite_1").animate({ top: '422px' });

    $("#Image17").attr("src", "images/Notes_1.PNG");
    $("#Image18").attr("src", "images/SubTasks_1.PNG");
    $("#Image19").attr("src", "images/Attachments_1.PNG");
    $("#Image20").attr("src", "images/Share_2.PNG");

    for (var i = 0; i <= SubTasks; i++) {
        $('#btnST' + i).remove();
    }

    ButtonToRemove = "btn" + buttonSub;
    if ($("#TextBox9").val() == "Add a note here...")
    {
        $("#TextBox9").val("");
    }
    notes = $("#TextBox9").val();

    console.log(SaveNotes());
    $("#TextBox9").val("Add a note here...");
}

$(document).on('click', '#ButtonCloseProperties', function (e) {
    console.log(CloseTabs());
});

$(document).ready(function () {
    $("#ButtonCloseProperties").hover(function () {
        $(this).css('cursor', 'pointer');
    });
});

$(document).ready(function () {
    $(document).on('mouseenter', '.MainButtons', function (e) {
        $(this).animate({ 'background-color': 'Silver' }, { queue: false, duration: 150 });
        $(this).css('color', 'White');
        $(this).css('cursor', 'pointer');
    }).on('mouseleave', '.MainButtons', function (e) {
        $(this).animate({ 'background-color': '#F3F3F3' }, { queue: false, duration: 150 });
        $(this).css('color', '#666666');
    });
});

$(document).on('click', '#ArrowRight', function (e) {
    if(premium < 2)
    {
    premium++;
    };
    
        if(premium == 0)
    {
        $("#Image27").attr("src", "images/Premium/Premium_1.PNG");
        $("#Image28").attr("src", "images/Premium/PremiumImg_1.PNG");
    }
        else if(premium == 1)
    {
        $("#Image27").attr("src", "images/Premium/Premium_2.PNG");
        $("#Image28").attr("src", "images/Premium/PremiumImg_2.PNG");
    }
        else if(premium == 2)
    {
        $("#Image27").attr("src", "images/Premium/Premium_3.PNG");
        $("#Image28").attr("src", "images/Premium/PremiumImg_3.PNG");
    }   
});

$(document).on('click', '#ArrowLeft', function (e) {
        if(premium > 0)
    {
    premium--;
    };

        if(premium == 0)
    {
        $("#Image27").attr("src", "images/Premium/Premium_1.PNG");
        $("#Image28").attr("src", "images/Premium/PremiumImg_1.PNG");
    }
        else if(premium == 1)
    {
        $("#Image27").attr("src", "images/Premium/Premium_2.PNG");
        $("#Image28").attr("src", "images/Premium/PremiumImg_2.PNG");
    }
        else if(premium == 2)
    {
        $("#Image27").attr("src", "images/Premium/Premium_3.PNG");
        $("#Image28").attr("src", "images/Premium/PremiumImg_3.PNG");
    }
});

$(document).ready(function () {
    premium = 0;
    $("#ArrowRight").hover(function () {
        $(this).css('cursor', 'pointer');
    });
    $("#ArrowLeft").hover(function () {
        $(this).css('cursor', 'pointer');
    });

        $("#TD_MB").hover(function () {
        $(this).css('cursor', 'pointer');
    });

    $("#ArrowRight").css({"-moz-user-select": "none", "-khtml-user-select": "none", "-webkit-user-select": "none", "-o-user-select": "none"});
    $("#ArrowLeft").css({"-moz-user-select": "none", "-khtml-user-select": "none", "-webkit-user-select": "none", "-o-user-select": "none"});
});

$(document).on('click', '#TD_MB', function (e) {
    $("#Premium_1").hide();
    $("#Premium_1").fadeTo(50, 0.0, function () { $("#Premium_1").hide(); });
});

$(document).ready(function () {
    $('#TextBox4').keydown(function (event) {

        if (event.keyCode == 13) {
            
            $("#btn" + TextBox4Element).val($("#TextBox4").val());
            console.log(CloseTabs());

            event.preventDefault();
            return false;
        }
    });
});

$(document).ready(function () {
    $("#TD7").click(function () {
        $("#div5").animate({ left: '-350px' });
        $("#div2").animate({ left: '0px' });
        $("#div4").animate({ left: '56px' });
        $("#div4").fadeTo(50, 0.0, function () { $("#div4").hide(); });
        $("#Profile_1").animate({ left: '-350px' });
        $("#table1").animate({ left: '-350px' });
        $("#div2").css("display", "none");
        $("#div1").css("display", "block");
        $("#Label1").text("email@email.com");
        $("#Label2").text("email@email.com");
        r = 0;
    });

    $("#SignInWithEmail").hover(function () {
        $(this).css('cursor', 'pointer');
    });

    $("#Image30").hover(function () {
        $(this).css('cursor', 'pointer');
    });

    $("#Image31").hover(function () {
        $(this).css('cursor', 'pointer');
    });

    $("#Button4").hover(function () {
        $(this).css('cursor', 'pointer');
    });

    $("#Button10").hover(function () {
        $(this).css('cursor', 'pointer');
    });

    $("#TextBox1").focus(function () {  
        if($(this).val() == "E-mail")
        {
            $(this).val("");
        }
    });

    $("#TextBox2").focus(function () {  
        if($(this).val() == "Password")
        {
            $(this).val("");
            $(this).attr("Type", "Password");
        }
    });

    $("#TextBox1").focusout(function () {
        if($(this).val() != "E-mail" && $(this).val() != "")
        {
            $(this).attr("type", "Email");
        }

        else if($(this).val() == "")
        {
            $(this).val("E-mail");
            $(this).attr("type", "text");
        }
    });

    $("#TextBox2").focusout(function () {
        if($(this).val() == "")
        {
            $(this).val("Password");
            $(this).attr("type", "text");
        }
    });
});

$(document).on('click', '#Image30', function (e) {
    $("#table1").animate({ left: '-355px' });
});

$(document).on('click', '#Button3', function (e) {
    $("#CreateNewAccount").animate({ left: '0px' });
});

$(document).on('click', '#Image31', function (e) {
    $("#CreateNewAccount").animate({ left: '-355px' });
});

$(document).on('click', '#Button12', function (e) {
    $("#CreateNewAccount").animate({ left: '-355px' });
});

$(document).ready(function () {
    $("#TextBox13").focus(function () {  
        if($(this).val() == "Password")
        {
            $(this).val("");
            $(this).attr("Type", "Password");
        }
    });

    $("#TextBox13").focusout(function () {
        if($(this).val() == "")
        {
            $(this).val("Password");
            $(this).attr("type", "text");
        }
    });

    $("#TextBox12").focusout(function () {
        if($(this).val() != "E-mail" && $(this).val() != "")
        {
            $(this).attr("type", "Email");
        }

        else if($(this).val() == "")
        {
            $(this).val("E-mail");
            $(this).attr("type", "text");
        }
    });

    $("#Button2").hover(function () {
        $(this).css('cursor', 'pointer');
    });

    $("#Button3").hover(function () {
        $(this).css('cursor', 'pointer');
    });

    $("#Button1").hover(function () {
        $(this).css('cursor', 'pointer');
    });

    $("#Button12").hover(function () {
        $(this).css('cursor', 'pointer');
    });
});

$(document).on('click', '#Button2', function (e) {
    $("#ForgotPassword").animate({ left: '0px' });
});

$(document).on('click', '#Image32', function (e) {
    $("#ForgotPassword").animate({ left: '-355px' });
});

$(document).on('click', '#Image32', function (e) {
    $("#ForgotPassword").animate({ left: '-355px' });
});

$(document).on('click', '#Button14', function (e) {
    $("#ForgotPassword").animate({ left: '-355px' });
});

$(document).ready(function () {
    $("#TextBox14").focusout(function () {
        if($(this).val() != "This email" && $(this).val() != "")
        {
            $(this).attr("type", "Email");
        }

        else if($(this).val() == "")
        {
            $(this).val("This email");
            $(this).attr("type", "text");
        }
    });

    $("#TextBox14").focus(function () {  
        if($(this).val() == "This email")
        {
            $(this).val("");
            $(this).attr("type", "Email");
        }
    });

    $("#Button13").hover(function () {
        $(this).css('cursor', 'pointer');
    });

    $("#Button14").hover(function () {
        $(this).css('cursor', 'pointer');
    });

    $("#Image32").hover(function () {
        $(this).css('cursor', 'pointer');
    });
});