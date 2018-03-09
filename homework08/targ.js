(function () {

setTimeout(hitTarget, 1000);

function hitTarget()
{
     let x;
     let y;
     do
     {
           x=prompt('Введите координату X:', '0');
           if(isNaN(x) || x==='') alert('Координата Х задана не правильно!');
            else
            {
              y = prompt('Введите координату Y:', '0');
              if(isNaN(y) || y==='') alert('Координата Y задана не правильно!');
            }

     } while( (isNaN(x) || x==='') ||  ( isNaN(y) || y==='' ));

    let x1=parseFloat(x);
    let y1=parseFloat(y);

    if(x1*x1+y1*y1<=1 && x1<=0 && y1<=0) alert('Точка попала в круг и в треугольник');
    else if(x1<=0 && y1<=0 && y1+x1+2>=0) alert('Точка попала в треугольник');
    else if(x1*x1+y1*y1<=1) alert('Точка попала в круг');
    else alert('Точка находится вне заштрихованной области');
}
}());