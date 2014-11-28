//Скрипты позволяют создавать новые кнопки при нажатии тех кнопок, что находяться сверху. 
//Здесь так же и есть скрипты, которые анимируют кнопки, при наведении мыши на них, а так же удаляют эти же кнопки. 
//Есть и другие скрипты, функции которых взаимосвязаны с созданием кнопок.

var r = 0;

var panelID = 0;

$(document).ready(function () {
    //i = 0;

    $("#Button11").click(function () {
        if ($("#TextBox3").val() != "")
        {
            var check1 = 0;
            while (check1 < 1)
            {
                if($("#btn" + r).length)
                {
                    r++;                              
                }
                else
                {
                    check1 = 1;
                }
            }

            var $ctrl = $('<input/>').attr({ type: 'button', id: 'btn' + r, value: $("#TextBox3").val() }).addClass("Button11");
            $($ctrl).css({ "height": "50px", "width": '440px', "text-align": "left", "background-color": "White", "border-style": "solid", "border-weight": "1px", "border-color": "Silver", 'margin-bottom': "21px" });
                
            if (panelID >= 5 && panelID <= 7)
            {
                jQuery('<div/>', {
                    id: 'fo1' + r,
                    class: "fo1",
                }).appendTo('#Panel1');
            }
            else if (panelID >= 8 && panelID <= 11)
            {
                jQuery('<div/>', {
                    id: 'fo1' + r,
                    class: "fo1",
                }).appendTo('#Panel' + (panelID - 7));
            }
            else if (panelID >= 12 && panelID <= 14)
            {
                jQuery('<div/>', {
                    id: 'fo1' + r,
                    class: "fo1",
                }).appendTo('#Panel1');
            }
            else
            {
                jQuery('<div/>', {
                    id: 'fo1' + r,
                    class: "fo1",
                }).appendTo('#Panel' + panelID);
            }
            
            if (parameter2 == 1)
            {
                $($ctrl).css({ 'border-left-style': 'solid', 'border-left-width': '3px', 'border-left-color': 'Red' });
            }
                       
            $("#fo1" + r).append($ctrl);

            if (parameter1 == 1)
            {
                var $img = '<img id="ImgR" class="ImgR" src="images/icon_parameter_1.PNG"  weight="12">';

                var Left = $("#btn" + r).position().left;
                var Top = $("#btn" + r).position().top;

                $("#fo1" + r).append($img);

                $("#ImgR").css({ 'position': 'absolute', 'z-index': '100', left: Left + 397, top: Top + 15 });
                $("#ImgR").show();
                $("#ImgR").attr({ id: "ImR" + r });
            }

            var $ctrl = $('<input/>').attr({ type: 'button', id: 'btnFM' + r, value: $("#TextBox3").val() }).addClass("Button11");
            $($ctrl).css({ "height": "50px", "width": '1780px', "text-align": "left", "background-color": "White", "border-style": "solid", "border-weight": "1px", "border-color": "Silver", 'margin-bottom': "21px" });
                
            if (panelID >= 5 && panelID <= 7)
            {
                jQuery('<div/>', {
                    id: 'fo1FM' + r,
                    class: "fo1",
                }).appendTo('#Panel8');
            }
            else if (panelID >= 8 && panelID <= 11)
            {
                jQuery('<div/>', {
                    id: 'fo1FM' + r,
                    class: "fo1",
                }).appendTo('#Panel' + panelID);
            }
            else if (panelID >= 12 && panelID <= 14)
            {
                jQuery('<div/>', {
                    id: 'fo1FM' + r,
                    class: "fo1",
                }).appendTo('#Panel8');
            }
            else
            {
                jQuery('<div/>', {
                    id: 'fo1FM' + r,
                    class: "fo1",
                }).appendTo('#Panel' + (panelID + 7));
            }

            if (parameter2 == 1)
            {
                $($ctrl).css({ 'border-left-style': 'solid', 'border-left-width': '3px', 'border-left-color': 'Red' });
            }

            $("#fo1FM" + r).append($ctrl);

            if (parameter1 == 1)
            {
                var $img = '<img id="ImgR" class="ImgR" src="images/icon_parameter_1.PNG"  weight="12">';

                var Left = $("#btnFM" + r).position().left;
                var Top = $("#btnFM" + r).position().top;

                $("#fo1FM" + r).append($img);

                $("#ImgR").css({ 'position': 'absolute', 'z-index': '100', left: Left + 1737, top: Top + 15 });
                $("#ImgR").show();
                $("#ImgR").attr({ id: "ImRFM" + r });
            }

            var $ctrl = $('<input/>').attr({ type: 'button', id: 'btnFW' + r, value: $("#TextBox3").val() }).addClass("Button11");
            $($ctrl).css({ "height": "50px", "width": '590px', "text-align": "left", "background-color": "White", "border-style": "solid", "border-weight": "1px", "border-color": "Silver", 'margin-bottom': "21px" });
        
            if (panelID >= 5 && panelID <= 7)
            {
                jQuery('<div/>', {
                    id: 'fo1FW' + r,
                    class: "fo1",
                }).appendTo('#Panel' + panelID);
            }
            else if (panelID >= 8 && panelID <= 11)
            {
                jQuery('<div/>', {
                    id: 'fo1FW' + r,
                    class: "fo1",
                }).appendTo('#Panel' + (typeNumber + 4));
            }
            else if (panelID >= 12 && panelID <= 14)
            {
                jQuery('<div/>', {
                    id: 'fo1FW' + r,
                    class: "fo1",
                }).appendTo('#Panel' + (panelID - 7));
            }
            else
            {
                jQuery('<div/>', {
                    id: 'fo1FW' + r,
                    class: "fo1",
                }).appendTo('#Panel' + (typeNumber + 4));
            }

            if (parameter2 == 1)
            {
                $($ctrl).css({ 'border-left-style': 'solid', 'border-left-width': '3px', 'border-left-color': 'Red' });
            }

            $("#fo1FW" + r).append($ctrl);
            
            if (parameter1 == 1)
            {
                var $img = '<img id="ImgR" class="ImgR" src="images/icon_parameter_1.PNG"  weight="12">';

                var Left = $("#btnFW" + r).position().left;
                var Top = $("#btnFW" + r).position().top;

                $("#fo1FW" + r).append($img);

                $("#ImgR").css({ 'position': 'absolute', 'z-index': '100', left: Left + 547, top: Top + 15 });
                $("#ImgR").show();
                $("#ImgR").attr({ id: "ImRFW" + r });
            }
                    
            var $ctrl = $('<input/>').attr({ type: 'button', id: 'btnFWFM' + r, value: $("#TextBox3").val() }).addClass("Button11");
            $($ctrl).css({ "height": "50px", "width": '1780px', "text-align": "left", "background-color": "White", "border-style": "solid", "border-weight": "1px", "border-color": "Silver", 'margin-bottom': "21px" });
        
            if (panelID >= 5 && panelID <= 7)
            {
                jQuery('<div/>', {
                    id: 'fo1FWFM' + r,
                    class: "fo1",
                }).appendTo('#Panel' + (panelID + 7));
            }
            else if (panelID >= 8 && panelID <= 11)
            {
                jQuery('<div/>', {
                    id: 'fo1FWFM' + r,
                    class: "fo1",
                }).appendTo('#Panel' + (typeNumber + 11));
            }
            else if (panelID >= 12 && panelID <= 14)
            {
                jQuery('<div/>', {
                    id: 'fo1FWFM' + r,
                    class: "fo1",
                }).appendTo('#Panel' + panelID);
            }
            else
            {
                jQuery('<div/>', {
                    id: 'fo1FWFM' + r,
                    class: "fo1",
                }).appendTo('#Panel' + (typeNumber + 11));
            }

            if (parameter2 == 1)
            {
                $($ctrl).css({ 'border-left-style': 'solid', 'border-left-width': '3px', 'border-left-color': 'Red' });
            }

            $("#fo1FWFM" + r).append($ctrl);
            
            if (parameter1 == 1)
            {
                var $img = '<img id="ImgR" class="ImgR" src="images/icon_parameter_1.PNG"  weight="12">';

                var Left = $("#btnFWFM" + r).position().left;
                var Top = $("#btnFWFM" + r).position().top;

                $("#fo1FWFM" + r).append($img);

                $("#ImgR").css({ 'position': 'absolute', 'z-index': '100', left: Left + 1737, top: Top + 15 });
                $("#ImgR").show();
                $("#ImgR").attr({ id: "ImRFWFM" + r });
            }
                
            console.log(DataSave());

            if (OpenPropertiesParameter == 1)
            {
                var val = $("#btn" + r).attr("id");
                console.log(OpenProperties(val));
                OpenPropertiesParameter = 0;
            }

            r++;

            $("#TextBoxBottomElements").css('visibility', 'hidden');
        }
    });
    $("#Button11").click(function () {
        if ($("#TextBox3").val() != "")
        {
            $("#div3").hide();
        }
    });

    //var panelID = 0;

    $("#Button5").click(function () {
        $("#div3").show();
        $("#TextBox3").val("I want to...");
        panelID = 1;
    });

    $("#Button6").click(function () {
        $("#div3").show();
        $("#TextBox3").val("I want to...");
        panelID = 2;
    });

    $("#Button7").click(function () {
        $("#div3").show();
        $("#TextBox3").val("I want to...");
        panelID = 3;
    });

    $("#Button8").click(function () {
        $("#div3").show();
        $("#TextBox3").val("I want to...");
        panelID = 4;
    });

    $("#Button15").click(function () {
        $("#div3").show();
        $("#TextBox3").val("I want to...");
        panelID = 5;
    });

    $("#Button16").click(function () {
        $("#div3").show();
        $("#TextBox3").val("I want to...");
        panelID = 6;
    });

    $("#Button17").click(function () {
        $("#div3").show();
        $("#TextBox3").val("I want to...");
        panelID = 7;
    });

    $("#Button18").click(function () {
        $("#div3").show();
        $("#TextBox3").val("I want to...");
        panelID = 8;
    });
    $("#Button19").click(function () {
        $("#div3").show();
        $("#TextBox3").val("I want to...");
        panelID = 9;
    });
    $("#Button20").click(function () {
        $("#div3").show();
        $("#TextBox3").val("I want to...");
        panelID = 10;
    });
    $("#Button21").click(function () {
        $("#div3").show();
        $("#TextBox3").val("I want to...");
        panelID = 11;
    });

    $("#Button22").click(function () {
        $("#div3").show();
        $("#TextBox3").val("I want to...");
        panelID = 12;
    });
    $("#Button23").click(function () {
        $("#div3").show();
        $("#TextBox3").val("I want to...");
        panelID = 13;
    });
    $("#Button24").click(function () {
        $("#div3").show();
        $("#TextBox3").val("I want to...");
        panelID = 14;
    });

    $("#Button10").click(function () {
        $("#div3").hide();
    });
});

$(document).ready(function () {
    n = 0;
    $(document).on('click', '.Img11', function (e) {

    var Left = $(this).position().left;
        if ($(this).position().left < Left + 400 + FolderViewParameter + FocusModeParameter) {
            //                var val = e.target.id;
            //                var newVal = val.substring(3, val.length);
            //                $("#TextBox3").val($("#btn" + newVal).val());
            //                $("#div3").show();

            var $img = '<img id="theImgE" class="Img11E" src="images/exit_tab.png"  weight="12">';

            var val2 = e.target.id;
            var newVal2 = val2.substring(3, val2.length);
            var Top = $(this).position().top;

            $("#fo1" + newVal2).append($img);

            $("#theImgE").css({ 'position': 'absolute', 'z-index': '210', left: Left + 10, top: Top + 8, "opacity": "1.0" });
            $(this).remove();
            $("#theImgE").show();
            $("#theImgE").attr({ id: "ImE" + newVal2 }).addClass("RemoveButtons");
            n = 1;
            
            if (ViewParameter == 2 && ModeParameter == 2)
            {
                var val = e.target.id;
                var newVal = val.substring(7, val.length);
            }
            else if (ViewParameter == 2 && ModeParameter == 1)
            {
                var val = e.target.id;
                var newVal = val.substring(5, val.length);
            }
            else if (ViewParameter == 1 && ModeParameter == 2)
            {
                var val = e.target.id;
                var newVal = val.substring(5, val.length);
            }
            else if (ViewParameter == 1 && ModeParameter == 1)
            {
                var val = e.target.id;
                var newVal = val.substring(3, val.length);
            }  
            $("#ImR" + newVal).hide();
            $("#ImRFM" + newVal).hide();
            $("#ImRFW" + newVal).hide();
            $("#ImRFWFM" + newVal).hide();
        }
    });

    $(document).on('click', '.Img11E', function (e) {
        
        if (ViewParameter == 2 && ModeParameter == 2)
        {
            var val1 = e.target.id;
            var newVal1 = val1.substring(7, val1.length);
        }
        else if (ViewParameter == 2 && ModeParameter == 1)
        {
            var val1 = e.target.id;
            var newVal1 = val1.substring(5, val1.length);
        }
        else if (ViewParameter == 1 && ModeParameter == 2)
        {
            var val1 = e.target.id;
            var newVal1 = val1.substring(5, val1.length);
        }
        else if (ViewParameter == 1 && ModeParameter == 1)
        {
            var val1 = e.target.id;
            var newVal1 = val1.substring(3, val1.length);
        }     

        $("#fo1" + newVal1).remove();
        $("#fo1FW" + newVal1).remove();
        $("#fo1FM" + newVal1).remove();
        $("#fo1FWFM" + newVal1).remove();
        $(this).remove();
        n=0;

        ButtonToRemove = "btn" + newVal1;
        console.log(RemoveButton());
    });

    $(document).on('mousedown', '.Button11', function (e) {
        $(".Img11").remove();
        
        if (ViewParameter == 2 && ModeParameter == 2)
        {
            var val = e.target.id;
            var newVal = val.substring(7, val.length);
        }
        else if (ViewParameter == 2 && ModeParameter == 1)
        {
            var val = e.target.id;
            var newVal = val.substring(5, val.length);
        }
        else if (ViewParameter == 1 && ModeParameter == 2)
        {
            var val = e.target.id;
            var newVal = val.substring(5, val.length);
        }
        else if (ViewParameter == 1 && ModeParameter == 1)
        {
            var val = e.target.id;
            var newVal = val.substring(3, val.length);
        }
        
        $("#ImR" + newVal).remove();
        $("#ImRFM" + newVal).remove();
        $("#ImRFW" + newVal).remove();
        $("#ImRFWFM" + newVal).remove();
    });

    $(document).on('mouseup', '.Button11', function (e) {
        $(this).animate({ 'background-color': 'White' }, { queue: false, duration: 150 });
    });

    $(document).on('mouseenter', '.Img11E', function (e) {
        $(this).css('cursor', 'pointer');
    });

    $(document).on('mouseenter', '.Img11', function (e) {
        $(this).css('cursor', 'pointer');
    });
});

$(document).on('mouseenter', '.fo1', function (e) {
    $(this).find('.Button11').animate({ 'background-color': '#F3F3F3' }, { queue: false, duration: 150 });

    if(n == 0)
    {

        var $img = '<img id="theImg" class="Img11" src="images/Circle.png"  height="30">';

        var val = this.id;
        var newVal = val.substring(3, val.length);
        var Top = $(this).find('.Button11').position().top;
        var Left = $(this).find('.Button11').position().left + FolderViewParameter + FocusModeParameter; //435px //390px

        $("#fo1" + newVal).append($img);

        $("#theImg").css({ 'position': 'absolute', 'z-index': '200', left: Left + 435, top: Top + 10, "opacity": "0.0" });

        $("#theImg").attr({ id: "Img" + newVal });

        $("#Img" + newVal).animate({ opacity: 1, left: Left + 390 }, { queue: false, duration: 150 });
    }
    else
    {
    }            
}).on('mouseleave', '.fo1', function (e) {
    $(this).find('.Button11').animate({ 'background-color': 'White' }, { queue: false, duration: 150 });
                var val3 = this.id;
    var newVal3 = val3.substring(3, val3.length);

    var Left = $(this).find('.Button11').position().left;

    $(".Img11").animate({ opacity: 0, left: Left + 435 + FolderViewParameter + FocusModeParameter }, { queue: false, duration: 150 })
    .delay(150).queue(function(next){$("#Img" + newVal3).remove();});           
});