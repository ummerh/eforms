<!doctype html>
<html lang="en">
<%@include file="./include/head.jsp"%>
<body>
	<%@include file="./include/nav.jsp"%>
	<div class="container-fluid">
		<div id="homeContent"></div>
	</div>
	<%@include file="./include/scripts.jsp"%>
	<script>
		ReactDOM.render(React.createElement(Demo1), document.getElementById("homeContent"));
	</script>
</body>
</html>