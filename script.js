window.onload = function() 
{
 document.getElementById("search").addEventListener(
     "click", function()
     {
         // go out and get result from request.php
         var search = document.getElementById("searchTxt").value;
         new Ajax.Request("request.php?q="+search,
         {
             method: "get",
             onSuccess: doSomethingWithTheResult
        });
      
    });
    
    function doSomethingWithTheResult(data) 
    {
        //alert(data.responseText);
        var answer = document.getElementById("answer");
        answer.innerHTML = data.responseText;
    }
}