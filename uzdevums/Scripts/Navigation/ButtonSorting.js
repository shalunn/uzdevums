//Скрипт реализует функцию сортировки кнопок с данными во всех разделах.

$(function () {
    $("#Panel1, #Panel2").sortable(({ stop: function () {
        console.log(ChangeButtonType());
    }, dropOnEmpty: true, connectWith: ".SortablePanels", handle: '.Button11', cancel: '', placeholder: "ui-state-highlight", queue: false, duration: 150
})).disableSelection();
});
$(function () {
    $("#Panel1, #Panel3").sortable(({ stop: function () {
        console.log(ChangeButtonType());
    }, dropOnEmpty: true, connectWith: ".SortablePanels", handle: '.Button11', cancel: '', placeholder: "ui-state-highlight", queue: false, duration: 150
})).disableSelection();
});
$(function () {
    $("#Panel1, #Panel4").sortable(({ stop: function () {
        console.log(ChangeButtonType());
    }, dropOnEmpty: true, connectWith: ".SortablePanels", handle: '.Button11', cancel: '', placeholder: "ui-state-highlight", queue: false, duration: 150
})).disableSelection();
});
$(function () {
    $("#Panel2, #Panel3").sortable(({ stop: function () {
        console.log(ChangeButtonType());
    }, dropOnEmpty: true, connectWith: ".SortablePanels", handle: '.Button11', cancel: '', placeholder: "ui-state-highlight", queue: false, duration: 150
})).disableSelection();
});
$(function () {
    $("#Panel2, #Panel4").sortable(({ stop: function () {
        console.log(ChangeButtonType());
    }, dropOnEmpty: true, connectWith: ".SortablePanels", handle: '.Button11', cancel: '', placeholder: "ui-state-highlight", queue: false, duration: 150
})).disableSelection();
});
$(function () {
    $("#Panel3, #Panel4").sortable(({ stop: function () {
        console.log(ChangeButtonType());
    }, dropOnEmpty: true, connectWith: ".SortablePanels", handle: '.Button11', cancel: '', placeholder: "ui-state-highlight", queue: false, duration: 150
})).disableSelection();
});

//////////////////////

$(function () {
    $("#Panel5, #Panel6").sortable(({ stop: function () {
        console.log(ChangeButtonType());
    }, dropOnEmpty: true, connectWith: ".SortablePanels2", handle: '.Button11', cancel: '', placeholder: "ui-state-highlight", queue: false, duration: 150
    })).disableSelection();
});
$(function () {
    $("#Panel5, #Panel6").sortable(({ stop: function () {
        console.log(ChangeButtonType());
    }, dropOnEmpty: true, connectWith: ".SortablePanels2", handle: '.Button11', cancel: '', placeholder: "ui-state-highlight", queue: false, duration: 150
    })).disableSelection();
});
$(function () {
    $("#Panel6, #Panel7").sortable(({ stop: function () {
        console.log(ChangeButtonType());
    }, dropOnEmpty: true, connectWith: ".SortablePanels2", handle: '.Button11', cancel: '', placeholder: "ui-state-highlight", queue: false, duration: 150
    })).disableSelection();
});

/////////////////////

$(function () {
    $("#Panel8, #Panel9").sortable(({ stop: function () {
        //console.log(ChangeButtonType());
    }, dropOnEmpty: true, connectWith: ".SortablePanels3", handle: '.Button11', cancel: '', placeholder: "ui-state-highlight", queue: false, duration: 150
    })).disableSelection();
});
$(function () {
    $("#Panel8, #Panel10").sortable(({ stop: function () {
        //console.log(ChangeButtonType());
    }, dropOnEmpty: true, connectWith: ".SortablePanels3", handle: '.Button11', cancel: '', placeholder: "ui-state-highlight", queue: false, duration: 150
    })).disableSelection();
});
$(function () {
    $("#Panel8, #Panel11").sortable(({ stop: function () {
        //console.log(ChangeButtonType());
    }, dropOnEmpty: true, connectWith: ".SortablePanels3", handle: '.Button11', cancel: '', placeholder: "ui-state-highlight", queue: false, duration: 150
    })).disableSelection();
});
$(function () {
    $("#Panel9, #Panel10").sortable(({ stop: function () {
        //console.log(ChangeButtonType());
    }, dropOnEmpty: true, connectWith: ".SortablePanels3", handle: '.Button11', cancel: '', placeholder: "ui-state-highlight", queue: false, duration: 150
    })).disableSelection();
});
$(function () {
    $("#Panel9, #Panel11").sortable(({ stop: function () {
        //console.log(ChangeButtonType());
    }, dropOnEmpty: true, connectWith: ".SortablePanels3", handle: '.Button11', cancel: '', placeholder: "ui-state-highlight", queue: false, duration: 150
    })).disableSelection();
});
$(function () {
    $("#Panel10, #Panel11").sortable(({ stop: function () {
        //console.log(ChangeButtonType());
    }, dropOnEmpty: true, connectWith: ".SortablePanels3", handle: '.Button11', cancel: '', placeholder: "ui-state-highlight", queue: false, duration: 150
    })).disableSelection();
});

/////////////////////

$(function () {
    $("#Panel12, #Panel13").sortable(({ stop: function () {
        //console.log(ChangeButtonType());
    }, dropOnEmpty: true, connectWith: ".SortablePanels4", handle: '.Button11', cancel: '', placeholder: "ui-state-highlight", queue: false, duration: 150
    })).disableSelection();
});
$(function () {
    $("#Panel12, #Panel14").sortable(({ stop: function () {
        //console.log(ChangeButtonType());
    }, dropOnEmpty: true, connectWith: ".SortablePanels4", handle: '.Button11', cancel: '', placeholder: "ui-state-highlight", queue: false, duration: 150
    })).disableSelection();
});
$(function () {
    $("#Panel13, #Panel14").sortable(({ stop: function () {
        //console.log(ChangeButtonType());
    }, dropOnEmpty: true, connectWith: ".SortablePanels4", handle: '.Button11', cancel: '', placeholder: "ui-state-highlight", queue: false, duration: 150
    })).disableSelection();
});