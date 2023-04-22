// const eps = 1.0;
$('#middle').hide();
$('form').submit(function (e) { 
  var formula =$('#equation').val();
  var expression = Parser.parse(formula);
  function f (x){
    return expression.evaluate({x:x});
  }
  var xl = $('#xl').val();
  var xu = $('#xu').val();
  var esp = $('#esp').val();
  if (f(xl)*f(xu)>0) {
    alert('No Root in this range');
  } else {
    var root = bisect(xl,xu,esp);
    $('theRoot').append(root);
    $('#middle').slideDown();
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

        xr=(xl[iter]+xu[iter])/2;
        if (i==0) 
        $('table').html('<tr><td>'+iter+'</td><td>'+xl+'</td><td>'+f(xl)+'</td><td>'+xu+'</td><td>'+f(xu)+'</td><td>'+xr+'</td><td>'+f(xr)+'</td><td>'+'----'+'</td></tr>');
         else {
            error[iter]=Math.abs(((xr[iter]-xr[iter-1])/xr[iter])*100);    
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
    }while(error[iter-1]>eps);
    return xr;
}