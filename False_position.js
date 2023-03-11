const eps = 1.0;
function f(x) {
    return 4*Math.pow(X,2)-2.3;
}
function falsePosition(xl,xu) {
    var iter =0 ,xr=[],error=[];
    var i=0;
    var fxl=[],fxu=[],fxr=[];
    do{

        fxl[iter]=f(xl[iter]);
        fxu[iter]=f(xu[iter]);
        xr.push(xu-(fux[iter])*(xl-xu)/(fxl[iter]-fxu[iter]));
        if (iter==0) {}
         else {
            error[iter]=Math.abs(((xr[iter]-xr[iter-1])/xr[iter])*100);    
        }
        fxr[iter]=f(xr[iter]);
        if (fxl[iter]*fxr[iter]>0) {
            xl.push(xr[iter]);
        } else {
            xu.push(xr[iter]);
        }
        iter++;
    }while(error[iter-1]>eps);
    return xr;
}