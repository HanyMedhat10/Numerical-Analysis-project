// const eps = 1.0;
// import { evaluate, derivative } from "mathjs";
// const math = require('mathjs');
$('#middle').hide();
function removeOldData() {
  $('tr:not(:first-child)').remove();
  $(".the-root").empty();
  $(".the-root").text('The Root = ');
}
$('#btn').click(function () { 
  var formula =$('#equation').val();
  // alert(formula);
  //  var expression = Parser.parse(formula);
  // alert(expression);
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
    //   var scope={ x: Number(x) };
    //  var expression= Math.parse(formula);
    //  var compiledExpression = expression.compile();
    //   return compiledExpression.evaluate(scope);
    convert();
    // alert(formula);
  var expression= formula;
  // var compile=expression.replace('x','*'+Number(x));
  var compile=convertX(expression,x);
  // alert(compile);
  return eval(compile);
  // return expression.eval({x:x});
  }
  var xl =parseFloat($('#xl').val());
  var xu =parseFloat($('#xu').val());
  var esp =parseFloat($('#esp').val());
  alert(esp);
  function bisect(xl,xu,eps=0.1) {
      var iter =0 ,xr=0,error=0,xrOld=0;
      // var fxl=[],fxu=[],fxr=[];
      // var xrOld=[0];
      do{
          xrOld=xr;
          xr=roundTo((xl+xu)/2,3);
          // alert(xr);
          if (iter==0) {
            // alert(xl+" "+xu) ;
            removeOldData();
          $('.table').append('<tr><td>'+iter+'</td><td>'+roundTo(xl,3)+'</td><td>'+roundTo(f(xl),3)+'</td><td>'+roundTo(xu,3)+'</td><td>'+roundTo(f(xu),3)+'</td><td>'+roundTo(xr,3)+'</td><td>'+roundTo(f(xr),3)+'</td><td>'+'----'+'</td></tr>');
          // document.write(iter+'\t'+xl+'\t'+f(xl)+'\t'+xu+'\t'+f(xu)+'\t'+xr+'\t'+f(xr)+'\t'+'----'+'<br>');
        }
          else {
            //  console.log(f(xl));
              error=Math.abs(((xr-xrOld)/xr)*100);   
              // alert(xl+" "+xu) ;
              $('.table').append('<tr><td>'+iter+'</td><td>'+roundTo(xl,3)+'</td><td>'+roundTo(f(xu),3)+'</td><td>'+roundTo(xu,3)+'</td><td>'+roundTo(f(xu),3)+'</td><td>'+roundTo(xr,3)+'</td><td>'+roundTo(f(xr),3)+'</td><td>'+roundTo(error,3)+'</td></tr>');
              // document.write(iter+'\t'+xl+'\t'+f(xl)+'\t'+xu+'\t'+f(xu)+'\t'+xr+'\t'+f(xr)+'\t'+error+'<br>');
          }
          // fxl[i]=f(xl[iter]);
          // fxu[i]=f(xu[iter]);
          // fxr[i]=f(xr[iter]);
          if (f(xl)*f(xr)>0) {
              xl=xr;
          } else {
              xu=xr;
          }
          iter++;
      }while(error > eps||iter==1);
    return xr;
  }
  // alert(f(xl)*f(xu));
  if (f(xl)*f(xu)>0) {
    alert('No Root in this range');
  } else {
    var root = bisect(xl,xu,esp);
    $('.the-root').append(roundTo(root,3));
    alert(root);
    $('#middle').slideDown(3000);
  }
    
});
$('#clear').click(async function () { 
  $('#middle').slideUp(3000);
  $('#equation').val('');
  $('#xl').val('');
  $('#xu').val('');
  $('#esp').val('');
  await sleep(3000);
  removeOldData();



});
// function f(x) {
//     return 4*Math.pow(X,2)-2.3;
// }