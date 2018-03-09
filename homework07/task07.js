let numberGoods;
do
{
    numberGoods = prompt('Сколько товаров добавить в корзину?', '1' );
    if(isNaN(numberGoods) || numberGoods==='') alert('Количество товаров введено неправильно');
    console.log(isNaN(numberGoods));

}while(isNaN(numberGoods) || numberGoods==='');

let lengthNumberGoods=numberGoods.length;

let nameGoods ='товар';

if(lengthNumberGoods===1) { nameGoods=AppendSuffix(numberGoods, nameGoods); }

if(lengthNumberGoods>1)
{

    let lastTwoChar= numberGoods.slice(-2);
    switch(lastTwoChar) {
        case '11':
        case '12':
        case '13':
        case '14':
        case '15':
        case '16':
        case '17':
        case '18':
        case '19':
            nameGoods += 'ов';
            break;
    }

    if(nameGoods.slice(-2) !== 'ов')
    {
        nameGoods=AppendSuffix(numberGoods, nameGoods);
    }

}

alert('У Вас ' + numberGoods + ' ' + nameGoods );

function AppendSuffix(numberGoodsParam,  nameGoodsParam)
{

    let lastChar =numberGoodsParam.slice(-1);
    if (lastChar == '1') {
        nameGoodsParam = nameGoodsParam;
    }
    else if (lastChar == '2' || lastChar == '3' || lastChar == '4') {
        nameGoodsParam += 'а';
    }
    else if (lastChar == '0' || lastChar == '5' || lastChar == '6' || lastChar == '7' || lastChar == '8' || lastChar == '9') {
        nameGoodsParam += 'ов';
    }
    else {
        nameGoodsParam = 'хватит баловаться';
    }

    return nameGoodsParam;
}
