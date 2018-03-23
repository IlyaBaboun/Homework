;(function () {

let arr=["Отправить поздравительную телеграмму Ким Чен Ыну", "Запустить большой адронный коллайдер на полную мощность",
"Вернуться назад в будущее", "Прочитать последний, ещё не изданный, эпизод Игры Престолов"];

function Listen4() {

    if(document.getElementById("conmenu1")!==null)
    {
        let delconmenu=document.getElementById("conmenu1");
        document.body.removeChild(delconmenu);
    }
}

function Listen3() {
    alert("Отлично! Теперь нажмите на правую клавишу мыши!")
}

function Listen2(event) {
    event.preventDefault();

    let delimg=document.body.getElementsByTagName("img");
    if(delimg[0]!==undefined)
    {
        document.body.removeChild(delimg[0]);
    }

    let cm=document.getElementById("conmenu1");
    switch (event.target.innerText)
    {
        case "1. " + arr[0]:
            let img1 = document.createElement("img");
            img1.setAttribute("src", "markup/img/kim.jpeg");
            img1.className="img-item";
            document.body.appendChild(img1);
            break;
        case "2. " + arr[1]:
            let img2 = document.createElement("img");
            img2.setAttribute("src", "markup/img/adrkol.jpg");
            img2.className="img-item";
            document.body.appendChild(img2);
            break;
        case "3. " + arr[2]:
            let img3 = document.createElement("img");
            img3.setAttribute("src", "markup/img/nvb.jpg");
            img3.className="img-item";
            document.body.appendChild(img3);
            break;
        case "4. " + arr[3]:
            let img4 = document.createElement("img");
            img4.setAttribute("src", "markup/img/goth.jpg");
            img4.className="img-item";
            document.body.appendChild(img4);
            break;
    }
    let str=event.target.innerText.slice(2);
    alert(str);
    document.body.removeChild(cm);
}

function Listen1(event)
{
    if(document.getElementById("conmenu1")!==null)
    {
        let delconmenu=document.getElementById("conmenu1");
        document.body.removeChild(delconmenu);
    }

  event.preventDefault();
  let x=event.pageX;
  let y=event.pageY;
  let conmenu=document.createElement("div");
  conmenu.className="conmenu1";
  conmenu.setAttribute("id","conmenu1");
  conmenu.setAttribute("style",`position: absolute; top: ${y}px; left: ${x}px;`);
  document.body.appendChild(conmenu);

  let ul=document.createElement("ul");
  ul.setAttribute("id","ul");

  conmenu.appendChild(ul);

  for (let i=0; i<4; i++)
  {
      let li=document.createElement("li");
      li.className="ul-item";
      ul.appendChild(li);

      let a=document.createElement("a");
      a.className="a-item";
      a.innerText=`${i+1}. ${arr[i]}`;
      a.href="#";
      a.addEventListener("click", Listen2)


      let p=document.createElement("p");
      p.innerHTML="<hr>";
      li.appendChild(a);
      ul.appendChild(p);
  }

}

let but=document.getElementById("but-1");
but.addEventListener("contextmenu", Listen1);
but.addEventListener("click", Listen3);
document.addEventListener("click", Listen4);


})();