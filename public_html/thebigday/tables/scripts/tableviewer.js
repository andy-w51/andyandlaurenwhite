var tableviewer = null;
var tablecontent = null;
var tableRef = 0;
var tableURLS = ["/thebigday/tables/includes/toptable.shtml",
                 "/thebigday/tables/includes/table1.shtml",
                 "/thebigday/tables/includes/table2.shtml",
                 "/thebigday/tables/includes/table3.shtml",
                 "/thebigday/tables/includes/table4.shtml",
                 "/thebigday/tables/includes/table5.shtml",
                 "/thebigday/tables/includes/table6.shtml",
                 "/thebigday/tables/includes/table7.shtml",
                 "/thebigday/tables/includes/table8.shtml"];

function displayTable(ref) {
    tableRef = ref;
    document.onkeydown = onKeyDown;
    $("#tablecontent").load(tableURLS[ref], updateTableHTML);
}

function displayPrevTable() {
    if (tableRef > 0) {
        tableRef--;
    } else {
        tableRef = tableURLS.length - 1;
    }
    displayTable(tableRef);
}

function displayNextTable() {
    if (tableRef < (tableURLS.length - 1)) {
        tableRef++;
    } else {
        tableRef = 0;
    }
    displayTable(tableRef);
}

function updateTableHTML(responseTxt, statusTxt, xhr) {
    if (statusTxt == "error") {
        tablecontent.innerHTML = xhr.status + ": " + xhr.statusText;
    }
    tableviewer.style.display = "flex";
}

function onKeyDown(e) {
    switch (e.keyCode) {
        case 37:
            displayPrevTable();
            break;
        case 39:
            displayNextTable();
            break;
    }
}

function registerTableViewerCallbacks() {
    tableviewer =  document.getElementById("tableviewer");
    tablecontent = document.getElementById("tablecontent");
    var tableclose = document.getElementById("tableclose");
    var tableprev = document.getElementById("tableprev");
    var tablenext = document.getElementById("tablenext");

    var planTop = document.getElementById("planTop");
    var plan1 = document.getElementById("plan1");
    var plan2 = document.getElementById("plan2");
    var plan3 = document.getElementById("plan3");
    var plan4 = document.getElementById("plan4");
    var plan5 = document.getElementById("plan5");
    var plan6 = document.getElementById("plan6");
    var plan7 = document.getElementById("plan7");
    var plan8 = document.getElementById("plan8");

    planTop.onclick = function() {
        displayTable(0);
    }

    plan1.onclick = function() {
        displayTable(1);
    }

    plan2.onclick = function() {
        displayTable(2);
    }

    plan3.onclick = function() {
        displayTable(3);
    }

    plan4.onclick = function() {
        displayTable(4);
    }

    plan5.onclick = function() {
        displayTable(5);
    }

    plan6.onclick = function() {
        displayTable(6);
    }

    plan7.onclick = function() {
        displayTable(7);
    }

    plan8.onclick = function() {
        displayTable(8);
    }

    tableclose.onclick = function() {
        tableviewer.style.display = "none";
        document.onkeydown = null;
    }

    tableprev.onclick = displayPrevTable;
    tablenext.onclick = displayNextTable;
}
