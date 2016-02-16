<!DOCTYPE html>
<html>
    <head>
        <meta name="layout" content="main">
        <g:set var="entityName" value="${message(code: 'compressorCurveTest.label', default: 'CompressorCurveTest')}" />
        <title><g:message code="default.list.label" args="[entityName]" /></title>
    <asset:javascript src="user/ogts/equipment/compressorTools.js"/>
</head>
<body>
    <a href="#list-compressorCurveTest" class="skip" tabindex="-1"><g:message code="default.link.skip.label" default="Skip to content&hellip;"/></a>
    <div id="formDataDiv" class="hidden">
        <div id="appendActionsText" class="hidden">${menus}</div>
    </div>
    <div class="nav" role="navigation">
        <ul id="actions">
            <li><a class="home" href="${createLink(uri: '/')}"><g:message code="default.home.label"/></a></li>

        </ul>
    </div>
    <div id="list-compressorCurveTest" class="content scaffold-list" role="main">
        <div class="easyui-tabs" id="newCompressorCurveTestTab">
        </div>
    </div>
    <div class="">
        <div id="currentCompressor"></div>
    </div>
</body>
</html>
