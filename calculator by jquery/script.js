$(document).ready(function () {
  

  $(".button").click(function () {
    let a = $(this).val();
    $(".display").append(a);
    console.log(a);
  });
  $(".AC").click(function () {
    $(".display").empty();
  });

  $(".equal").click(function () {
    let expression = $(".display").text().replace("=","");
console.log("expression:",expression);
    // try {
        var result = eval(expression);
        console.log("result:",result);
        $("#result").val(result,function(){
          $(this).html(".display");
        });

    // } catch (e) {
    //     alert("Error! Resetting values.");
    //     $(".display").text("0");
    //     $("#result").val("0");
    // }

    console.log(result);
  });
});
