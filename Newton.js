// import * as math from 'mathjs';
$('#middle').hide();
function removeOldData() {
  $('tr:not(:first-child)').remove();
  $(".theRoot").empty();
  $(".theRoot").text('The Root : ');
}
$('#btn').click(function () { 
  var formula =$('#equation').val();
  // alert(formula);
  function convertVal(val){
    if(!val) return;
    while(val.includes("^")){
      val = val.replace("^", "**");
    }
    return val;
  }
  function convert(){
    if(!formula) return;
    while(formula.includes("^")){
      formula = formula.replace("^", "**");
    }
  }
  function roundTo(num, places) {
    const factor = 10 ** places;
    return Math.round(num * factor) / factor;
  };
  function convertX(expression,X){
    if(!expression) return;
    while(expression.includes("x")){
      expression = expression.replace("x", '*'+Number(X));
    }
    return expression;
  }
  function f (x){
    convert();
    // alert(formula);
    var expression=formula;
    // alert(expression);
    var compile=convertX(expression,x);
    return eval(compile);
  }
  var derv;
  function fDash(x){
    let xDash = formula;
    while(xDash.includes('**')) xDash = xDash.replace('**', '^');
    alert(xDash);
    derv =math.derivative(xDash, 'x');
    alert(derv);
    var expression=convertVal(derv);
    alert(expression);
  expression=convertX(expression,x)
  return roundTo(eval(expression), 3);
} 
  var xi =parseFloat($('#xi').val());
  var esp =parseFloat($('#esp').val());
  alert(esp);
  function newton(xi,eps=0.1) {
      var iter=0 ,error=0,xiOld=0;
      do{
          xiOld=xi;
          if (iter==0) {
            // removeOldData();
            // alert(xi);
            alert(f(xi));
            alert(fDash(xi));
            $('.table').append('<tr><td>'+iter+'</td><td>'+roundTo(xi,3)+'</td><td>'+roundTo(f(xi),3)+'</td><td>'+roundTo(fDash(xi),3)+'</td><td>'+'----'+'</td></tr>');
          }
          else {
               xi = roundTo( xi - (f(xi)/fDash(xi)) ,3);
              error=Math.abs(((xr-xrOld)/xr)*100);   
              $('.table').append('<tr><td>'+iter+'</td><td>'+roundTo(xi,3)+'</td><td>'+roundTo(f(xi),3)+'</td><td>'+roundTo(fDash(xi),3)+'</td><td>'+roundTo(error,3)+'</td></tr>');
          }
          iter++;
      }while(error > eps||iter==1);
    return xr;
  }
    var root = newton(xi,esp);
    $('.theRoot').append(roundTo(root,3));
    alert(root);
    $('#middle').slideDown(3000);
    
});
$('#clear').click(async function () { 
  $('#middle').slideUp(3000);
  $('#equation').val('');
  $('#xi').val('');
  $('#esp').val('');
  await sleep(3000);
  removeOldData();


});