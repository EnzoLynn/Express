<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>layout</title>
</head>
<body>
	<p>{{bar}}</p>
	{{#compare error.status '==' '200'}}
	  <div>{{error.status}}  ddd</div>
	{{/compare}}
 

	{{{body}}}
</body>
</html>