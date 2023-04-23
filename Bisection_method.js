// const eps = 1.0;
// const math = require('mathjs');
// $('#middle').hide();
$('#btn').click(function () { 
  var formula =$('#equation').val();
  alert(formula);
  //  var expression = Parser.parse(formula);
  // alert(expression);
  function f (x){
    var scope={ x: Number(x) };
   var expression= Math.parse(formula);
   var compiledExpression = expression.compile();
    return compiledExpression.evaluate(scope);
  }
  var xl = $('#xl').val();
  var xu = $('#xu').val();
  var esp = $('#esp').val();
  alert((xl)*f(xu));
  if (f(xl)*f(xu)>0) {
    alert('No Root in this range');
  } else {
    var root = bisect(xl,xu,esp);
    $('.theRoot').append(root);
    // $('#middle').slideDown();
  }
    
});
// function f(x) {
//     return 4*Math.pow(X,2)-2.3;
// }
function bisect(xl,xu,esp=0.1) {
    var iter =0 ,xr=0,error=0,xrOld=0;
    // var fxl=[],fxu=[],fxr=[];
    // var xrOld=[0];
    do{
        xrOld=xr;
        xr=(xl+xu)/2;
        if (i==0) 
        $('table').html('<tr><td>'+iter+'</td><td>'+xl+'</td><td>'+f(xl)+'</td><td>'+xu+'</td><td>'+f(xu)+'</td><td>'+xr+'</td><td>'+f(xr)+'</td><td>'+'----'+'</td></tr>');
         else {
            error=Math.abs(((xr-xrOld)/xr)*100);    
            $('table').html('<tr><td>'+iter+'</td><td>'+xl+'</td><td>'+f(xl)+'</td><td>'+xu+'</td><td>'+f(xu)+'</td><td>'+xr+'</td><td>'+f(xr)+'</td><td>'+error+'</td></tr>');
        }
        // fxl[i]=f(xl[iter]);
        // fxu[i]=f(xu[iter]);
        // fxr[i]=f(xr[iter]);
        if (fxl(iter)*fxr(iter)>0) {
            xl=xr(iter);
        } else {
            xu=xr(iter);
        }
        iter++;
    }while(error>eps);
    return xr;
}