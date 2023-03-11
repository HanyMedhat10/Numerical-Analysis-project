const eps = 1.0;
function f(x) {
    return 4*Math.pow(X,2)-2.3;
}
function bisect(xl,xu) {
    var iter =0 ,xr=[],error=[];
    var fxl=[],fxu=[],fxr=[];
    // var xrOlde=[0];
    do{

        xr.push((xl[iter]+xu[iter])/2);
        if (i==0) {}
         else {
            error[iter]=Math.abs(((xr[iter]-xr[iter-1])/xr[iter])*100);    
        }
        fxl[i]=f(xl[iter]);
        fxu[i]=f(xu[iter]);
        fxr[i]=f(xr[iter]);
        if (fxl[iter]*fxr[iter]>0) {
            xl.push(xr[iter]);
        } else {
            xu.push(xr[iter]);
        }
        iter++;
    }while(error[iter-1]>eps);
    return xr;
}