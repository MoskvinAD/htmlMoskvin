 function myFunction() {
    	let arr = ["Яблоко", "Апельсин", "Слива"];
		document.write(arr[0] + " " + arr[1] + " " + arr[2]);
		document.write('<br>');
		var arr2 = [];
		for ( i = 0; i < 10; i++ ) {
    	arr2.push( Math.round( Math.random() * 100 ));
			} document.write( arr2 + " ");
    	//}

    	
   		//var arr3 = []; 
    	//for(var i=0; i < 2; i++) {
       // while(
       //   typeof (arr3[i] = prompt('Введите любое имя №'+i)) != 'string' || arr3[i].length == 0
       // );
       // document.write(arr3); 
        document.write('<br>');
    }
    let arr = ["Яблоко", "Апельсин", "Слива","Персик","Киви"];
    let arr2 = ["Иван", "Олег", "Ирина","Сашок","Слава"];
    function myFunction2() {
		document.write(arr[4]);
		document.write('<br>');
		arr[4] = prompt('Введите любое значение');
		document.write(arr[4]);
    }
    function WriteArr() {
    	document.write('<br>');
    	for (var i = 0; i < arr.length; i++) {
    		document.write(arr[i] + " ");
    	}	
    }
    function WriteTyArr() {
    	document.write('<br>');
    	var namesAll = [].concat(arr, arr2);
    	document.write(namesAll);
    }
    function addElementArr() {
    	document.write('<br>');	
    	var namesAll = [].concat(arr, arr2);
    	namesAll.push('Сидоров');
    	document.write(namesAll);
    }
  	function getMonth(date) {
    let days = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'];
    return days[date.getMonth()];
  	}
     function GetDate() {
    	var now = new Date(); 
    	document.write(now);
    }
    function GetDateExt() {
    	var now = new Date(); 
    	document.write(now.getDay() + " " 
    		+ getMonth(now) + " "
    		+ now.getFullYear());
    }
    function getRandomInt(max) {
 	 	return Math.floor(Math.random() * max);
	}
    function MultPl(){
    	var a = getRandomInt(40);
    	var b = getRandomInt(40);
    	var c = a * b;
    	document.write(c);
    }
    var Name;
  function Welcom() {
      Name = prompt("Привет, как тебя зовут?");
     if(Name != null){
        document.getElementById("demo").innerHTML = "Привет," + Name.toString();
    }
  }
   function myFunction1() {
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