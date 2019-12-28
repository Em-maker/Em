<script type="text/javascript">

function changeText(cont1,cont2,speed){

  var Otext=cont1.text();

  var Ocontent=Otext.split("");

  var i=0;

  function show(){

    if(i<Ocontent.length)

    {  

      cont2.append(Ocontent[i]);

      i=i+1;

    };

  };

    var Otimer=setInterval(show,speed);

};

$(document).ready(function(){

  changeText($("text-1"),$("text-2"),150);//  150 = the Delay time in milliseconds between strokes.

  clearInterval(Otimer);

});

</script>
