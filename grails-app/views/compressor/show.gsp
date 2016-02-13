
<%@ page import="cn.edu.cup.ogts.equipment.Compressor" %>
<!DOCTYPE html>
<html>
	<head>
		<meta name="layout" content="main">
		<g:set var="entityName" value="${message(code: 'compressor.label', default: 'Compressor')}" />
		<title><g:message code="default.show.label" args="[entityName]" /></title>
	</head>
	<body>
		<a href="#show-compressor" class="skip" tabindex="-1"><g:message code="default.link.skip.label" default="Skip to content&hellip;"/></a>
		<div class="nav" role="navigation">
			<ul>
				<li><a class="home" href="${createLink(uri: '/')}"><g:message code="default.home.label"/></a></li>
				<li><g:link class="list" action="index"><g:message code="default.list.label" args="[entityName]" /></g:link></li>
				<li><g:link class="create" action="create"><g:message code="default.new.label" args="[entityName]" /></g:link></li>
			</ul>
		</div>
		<div id="show-compressor" class="content scaffold-show" role="main">
			<h1><g:message code="default.show.label" args="[entityName]" /></h1>
			<g:if test="${flash.message}">
			<div class="message" role="status">${flash.message}</div>
			</g:if>
			<ol class="property-list compressor">
			
				<g:if test="${compressorInstance?.name}">
				<li class="fieldcontain">
					<span id="name-label" class="property-label"><g:message code="compressor.name.label" default="Name" /></span>
					
						<span class="property-value" aria-labelledby="name-label"><g:fieldValue bean="${compressorInstance}" field="name"/></span>
					
				</li>
				</g:if>
			
				<g:if test="${compressorInstance?.compressorType}">
				<li class="fieldcontain">
					<span id="compressorType-label" class="property-label"><g:message code="compressor.compressorType.label" default="Compressor Type" /></span>
					
						<span class="property-value" aria-labelledby="compressorType-label"><g:link controller="compressorType" action="show" id="${compressorInstance?.compressorType?.id}">${compressorInstance?.compressorType?.encodeAsHTML()}</g:link></span>
					
				</li>
				</g:if>
			
				<g:if test="${compressorInstance?.driverName}">
				<li class="fieldcontain">
					<span id="driverName-label" class="property-label"><g:message code="compressor.driverName.label" default="Driver Name" /></span>
					
						<span class="property-value" aria-labelledby="driverName-label"><g:fieldValue bean="${compressorInstance}" field="driverName"/></span>
					
				</li>
				</g:if>
			
				<g:if test="${compressorInstance?.driverType}">
				<li class="fieldcontain">
					<span id="driverType-label" class="property-label"><g:message code="compressor.driverType.label" default="Driver Type" /></span>
					
						<span class="property-value" aria-labelledby="driverType-label"><g:fieldValue bean="${compressorInstance}" field="driverType"/></span>
					
				</li>
				</g:if>
			
			</ol>
			<g:form url="[resource:compressorInstance, action:'delete']" method="DELETE">
				<fieldset class="buttons">
					<g:link class="edit" action="edit" resource="${compressorInstance}"><g:message code="default.button.edit.label" default="Edit" /></g:link>
					<g:actionSubmit class="delete" action="delete" value="${message(code: 'default.button.delete.label', default: 'Delete')}" onclick="return confirm('${message(code: 'default.button.delete.confirm.message', default: 'Are you sure?')}');" />
				</fieldset>
			</g:form>
		</div>
	</body>
</html>
