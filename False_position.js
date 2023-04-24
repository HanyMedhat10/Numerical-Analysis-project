$('#middle').hide();
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
  function bisect(xl,xu,eps=0.1) {
      var iter=0 ,xr=0,error=0,xrOld=0;
      do{
          xrOld=xr;
          xr = ( xu - (f(xu) * (xl - xu)) / (f(xl) - f(xu)) );
          if (iter==0) {
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
    var root = bisect(xl,xu,esp);
    $('.theRoot').append(roundTo(root,3));
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
  $('tr:not(:first-child)').remove();
  $(".theRoot").empty();
  $(".theRoot").text('The Root : ');

});