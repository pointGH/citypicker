window.onload = function()
{
    var cityData;    
    $.ajax({  
        url: "./json/response_1533801918954.json",  
        async: false,  
        success: function(data){  
            cityData = data.result;
        }  
    });
    var dataConfig = {
        parentCodeName:"parent_code",
        codeName:"code",
        rootCode:"0",
        showName:"name",
        data:cityData
    }
    var $cityPicker = $("#city-picker");
    $cityPicker.citypicker(dataConfig);
    $("#citySelect").click(function () {
        var code = $cityPicker.data('citypicker').getCode("");
        var value = $cityPicker.data('citypicker').getVal("");

        console.log(code);
    })       
}
      
