<html>
<head>
<script>
	function check_leapyear(){
var yr;
		yr = document.getElementById("year").value;
		if( (0 == yr % 4) && (0 != yr % 100) || (0 == yr % 400) )
		{
			alert(yr+" is a leap year");  
		}
		else
		{
			alert(yr+" is not a leap year");  
		}
	}
</script>
</head>
<body>
<h3>Javascript Program to find leap year</h3>
<input type="text" id="year"></input>
<button onclick="check_leapyear()">Check</button>
</body>
</html>
