$("#middle").hide();
function removeOldData() {
  $("tr:not(:first-child)").remove();
  $(".the-root").empty();
  $(".the-root").text("The Root = ");
}
$("#btn").click(function () {
  var formula = $("#equation").val();
  function convert() {
    if (!formula) return;
    while (formula.includes("^")) {
      formula = formula.replace("^", "**");
    }
    // while (formula.includes("sqrt")) {
    //   formula = formula.replace("sqrt(", "Math.sqrt(");
    // }
  }
  
  function roundTo(num, places) {
    const factor = 10 ** places;
    return Math.round(num * factor) / factor;
  }
  function convertX(expression, X) {
    if (!expression) return;
    while (expression.includes("x")) {
      expression = expression.replace("x", "*" + Number(X));
    }
    while (expression.includes("x")) {
      expression = expression.replace("x", "*" + Number(X));
    }
    return expression;
  }
  function f(x) {
    convert();
    var expression = formula;
    var compile = convertX(expression, x);
    return eval(compile);
  }
  // function f(x){
  //   let ret;
  //   if (typeof math == 'undefined') ret = roundTo(eval(formula), 3);
  //   else if(typeof math != 'undefined') ret = roundTo(math.eval(formula, {x: x}), 3);
  //   return ret;
  // }
  var xi = parseFloat($("#xi").val());
  var eps = parseFloat($("#esp").val());
  
//   var eps = parseFloat($("#esp").val());
  console.log(esp);
  function simpleFixed(xi,  eps = 0.1) {
    var iter = 0,
      
      error = 0,
      xiOld = 0;
    do {
      xiOld = xi;
      if (iter == 0) {
        removeOldData();
        $(".table").append(
          "<tr><td>" +
          iter +
          "</td><td>" +
          roundTo(xi, 3) +
          "</td><td>" +
          roundTo(f(xi), 3) +
          "</td><td>" +
          "----" +
          "</td></tr>"
          );
        } else {
      xi = roundTo(f(xi), 3);
        error = Math.abs(((xi - xiOld) / xi) * 100);
        $(".table").append(
            "<tr><td>" +
            iter +
            "</td><td>" +
            roundTo(xi, 3) +
            "</td><td>" +
            roundTo(f(xi), 3) +
            "</td><td>" +
            roundTo(error, 3) +
            "</td></tr>"
            );
        }
      iter++;
    } while (error > eps || iter == 1);
    return xi;
  }
    var root = simpleFixed(xi,eps);
    $(".the-root").append(roundTo(root, 3));
    console.log(root);
    $("#middle").show();
  }
);
$("#clear").click(function () {
  // $('#middle').slideUp(3000);
  $("#middle").hide();
  $("#equation").val("");
  $("#xi").val("");
  $("#esp").val("");
  // await sleep(3000);
  removeOldData();
});