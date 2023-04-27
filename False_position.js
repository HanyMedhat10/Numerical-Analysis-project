$('#middle').hide();
function removeOldData() {
  $('tr:not(:first-child)').remove();
  $(".the-root").empty();
  $(".the-root").text('The Root = ');
}
$('#btn').click(function () { 
  var formula =$('#equation').val();
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
  var expression= formula;
  var compile=convertX(expression,x);
  return eval(compile);
  }
  var xl =parseFloat($('#xl').val());
  var xu =parseFloat($('#xu').val());
  var esp =parseFloat($('#esp').val());
  alert(esp);
  function falsePosition(xl,xu,eps=0.1) {
      var iter=0 ,xr=0,error=0,xrOld=0;
      do{
          xrOld=xr;
          xr = roundTo( xu - (f(xu) * (xl - xu)) / (f(xl) - f(xu)),3 );
          if (iter==0) {
            removeOldData();
          $('.table').append('<tr><td>'+iter+'</td><td>'+roundTo(xl,3)+'</td><td>'+roundTo(f(xl),3)+'</td><td>'+roundTo(xu,3)+'</td><td>'+roundTo(f(xu),3)+'</td><td>'+roundTo(xr,3)+'</td><td>'+roundTo(f(xr),3)+'</td><td>'+'----'+'</td></tr>');
        }
          else {
              error=Math.abs(((xr-xrOld)/xr)*100);   
              $('.table').append('<tr><td>'+iter+'</td><td>'+roundTo(xl,3)+'</td><td>'+roundTo(f(xu),3)+'</td><td>'+roundTo(xu,3)+'</td><td>'+roundTo(f(xu),3)+'</td><td>'+roundTo(xr,3)+'</td><td>'+roundTo(f(xr),3)+'</td><td>'+roundTo(error,3)+'</td></tr>');
          }
          if (f(xl)*f(xr)>0) {
              xl=xr;
          } else {
              xu=xr;
          }
          iter++;
      }while(error > eps||iter==1);
    return xr;
  }
  if (f(xl)*f(xu)>0) {
    alert('No Root in this range');
  } else {
    var root = falsePosition(xl,xu,esp);
    $('.the-root').append(roundTo(root,3));
    alert(root);
    $('#middle').show();
  }
    
});
$('#clear').click(function () { 
  // $('#middle').slideUp(3000);
  $('#middle').hide();
  $('#equation').val('');
  $('#xl').val('');
  $('#xu').val('');
  $('#esp').val('');
  // await sleep(3000);
  removeOldData();
});