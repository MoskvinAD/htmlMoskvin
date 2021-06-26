    function myFunction() {
    	var Name = "Андрей";
    	if(Name != null){
    		document.getElementById("demo").innerHTML = "Привет," + Name.toString();
		}
		else
		{
			document.getElementById("demo").innerHTML = "Привет, задай имя";
		}
    }
    function ForWhile(){
    	for (var i = 1; i < 41; i++) {
		document.write(i + " ");
	}
	document.write('<br>');
	var i = 1;
	while (i <= 40) {
		document.write(i + " ");
		i++;
	}
	document.write('<br>');
	var i = 1;
	do {
    document.write(i + ' ');
    i++;
	} while (i <= 40)
	{
		i++;
		document.write(i + ' ');
	}
	document.write('<br>');
    }
    function Spams()
    {
    	for (var i = 1; i < 5; i++) {
		alert("БУ-БУ");
		}
    }
    function Zapros()
    {
    	var number
		do
		{
			number=parseInt(prompt("Введите число:", 0));
			if(number > 5)
			{
				alert("Молодец");
			}
			else
			{
			alert("Повезет в следующи раз");
			}
		}
		while(confirm("Продолжим?"))
    }
	function Chetniichisla(){
		for (let i = 2; i <= 20; i++) {
  			if (i % 2 == 0) {
   			 document.write(i + ' ');
  			}
		}
	}
	function NeChetniichisla(){
		for (let i = 1; i <= 7; i++) {
  			if (i % 2 && i != 5) {
   			 document.write(i + ' ');
  			}
		}
	}