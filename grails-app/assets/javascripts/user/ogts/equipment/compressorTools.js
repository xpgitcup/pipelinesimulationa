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
    //console.info(appendText);
    var appendArray = appendText.split(";");
    console.info(appendArray);

    var ul = $("#action");
    console.info(ul);

    $.each(appendArray, function (index, value) {
        //console.info(index);
        //console.info(value);
        var action = value.split(":");
        console.info(action);
        //var $nstr =$("<li href=\"javascript:" + action[1] + "()\">" + action[0] + "</li>"); 
        var nstr = "<li> <a href=\"javascript:" + action[1] + "()\">" + action[0] + "</a></li>";
        console.info(nstr);
        ul.append(nstr);
    });
    
    checkGasName();
});


