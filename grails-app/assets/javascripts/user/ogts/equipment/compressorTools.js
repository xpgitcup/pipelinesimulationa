/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
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
    
    var tabDiv = $('#newCompressorCurveTestTab');
    console.info(tabDiv);

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
        tabDiv.tabs("add", {title: value, content: index + value});
    });
});

function queryCompressor() {}
function queryTest() {}
function choiceCompressor() {}
function importTest() {}
function compressorTools() {}

