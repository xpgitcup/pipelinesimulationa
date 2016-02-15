/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var tabDiv;
var appendArray;
var tabPageDivs = new Array();

$(function () {
    console.info("处理附加的操作...");
    var appendTextDiv = $("#appendActionsText");
    //console.info(appendTextDiv);
    var appendText = appendTextDiv.text();
    //console.info(appendText);
    appendArray = appendText.split(",");
    //console.info(appendArray);

    var ul = $("#actions");
    //console.info(ul);
    var li_href_str;

    tabDiv = $('#newCompressorCurveTestTab');
    //console.info(tabDiv);
    var pageContext;

    $.each(appendArray, function (index, value) {
        //console.info(index);
        //console.info(value);
        var action = value.split(":");
        
        tabPageDivs[index] = action[0];
        
        //console.info(action);
        //var $nstr =$("<li href=\"javascript:" + action[1] + "()\">" + action[0] + "</li>"); 
        //显示处理步骤中的各个按钮
        li_href_str = "<li> <a href=\"javascript:" + action[1] + "()\">" + action[0] + "</a></li>";
        //console.info(nstr);
        ul.append(li_href_str);

        //显示各个Tab页面
        pageContext = '<div id=\"' + action[0] + '\"></div>';
        tabDiv.tabs("add", {title: value, style: "padding:20px", content: pageContext});
    });

    //tabDiv.tabs('select', 0);   //激活第一个页面
    //console.info(tabPageDivs);

    var fun = eval(appendArray[0]);
    //console.info(fun);
    fun();
});

function showTest(compressorId) {
    console.info("列出" + compressorId + "相关的测试");
    
    //记录当前的压缩机
    $('#currentCompressor').text(compressorId);
    
    $.ajax({
        type: 'POST',
        url: 'compressorTools/queryCompressorCurveTest',
        data: {id: compressorId},
        success: function (data, textStatus) {
            $('#testDiv').html(data);
        },
        error: function (xhr, textStatus, errorThrown) {
            console.log('查询压缩机-出错了' + xhr);
            console.log('查询压缩机-出错了' + textStatus);
            console.log('查询压缩机-出错了' + errorThrown);
        }
    });
    
    console.info($("#autoStep").is(":checked"));
    var autoStep = $("#autoStep")[0].checked;
    console.info(autoStep);
    
    if (autoStep) {
        setTestStatus();
    }
}

function queryCompressor() {
    tabDiv.tabs('select', 0);
    
    $.ajax({
        type: 'POST',
        url: 'compressorTools/queryCompressor',
        data: {},
        success: function (data, textStatus) {
            $('#' + tabPageDivs[0]).html(data);
        },
        error: function (xhr, textStatus, errorThrown) {
            console.log('查询压缩机-出错了' + xhr);
            console.log('查询压缩机-出错了' + textStatus);
            console.log('查询压缩机-出错了' + errorThrown);
        }
    });
}

function setTestStatus() {
    tabDiv.tabs('select', 1);
    
    var compressorId = $("currentCompressor").text;
    $.ajax({
        type: 'POST',
        url: 'compressorTools/createCompressorCurveTest',
        data: {id: compressorId},
        success: function (data, textStatus) {
            $('#' + tabPageDivs[1]).html(data);
        },
        error: function (xhr, textStatus, errorThrown) {
            console.log('查询压缩机-出错了' + xhr);
            console.log('查询压缩机-出错了' + textStatus);
            console.log('查询压缩机-出错了' + errorThrown);
        }
    });
    
    $("#compressor").value(compressorId);
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

