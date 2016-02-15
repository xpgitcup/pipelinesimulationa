/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var tabDiv;

$(function () {
    console.info("处理附加的操作...");
    var appendTextDiv = $("#appendActionsText");
    //console.info(appendTextDiv);
    var appendText = appendTextDiv.text();
    console.info(appendText);
    var appendArray = appendText.split(",");
    console.info(appendArray);

    var ul = $("#actions");
    console.info(ul);
    var li_href_str;

    tabDiv = $('#newCompressorCurveTestTab');
    console.info(tabDiv);
    var pageContext;

    $.each(appendArray, function (index, value) {
        //console.info(index);
        console.info(value);
        var action = value.split(":");
        console.info(action);
        //var $nstr =$("<li href=\"javascript:" + action[1] + "()\">" + action[0] + "</li>"); 
        //显示处理步骤中的各个按钮
        li_href_str = "<li> <a href=\"javascript:" + action[1] + "()\">" + action[0] + "</a></li>";
        //console.info(nstr);
        ul.append(li_href_str);

        //显示各个Tab页面
        pageContext = '<div id=\"' + action[0] + '\"></div>';
        tabDiv.tabs("add", {title: value, style: "padding:20px", content: pageContext});
    });

    tabDiv.tabs('select', 0);   //激活第一个页面
});

function queryCompressor() {
    tabDiv.tabs('select', 0);
}

function queryTest() {
    tabDiv.tabs('select', 1);
    
}

function choiceCompressor() {
    tabDiv.tabs('select', 2);
    
}

function importTest() {
    tabDiv.tabs('select', 3);
    
}

function compressorTools() {
    tabDiv.tabs('select', 4);
    
}

