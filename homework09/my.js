var pascalTriangleHolder = document.getElementById('pascal-triangle');

pascalTriangleHolder.innerHTML = render(pascal(10));

/*function nFactarial(nParam) {
    if (nParam >= 0)
    {
        if (nParam === 0)
            return 1;
        else
            return nParam = nParam * nFactarial(nParam - 1);
    }
}

function pascal (size) {
    var triangle = [];

    for (let i=0; i<size; i++ )
    {
        triangle[i]=[];
        for (let j=0; j<=i; j++ ) {
          triangle[i][j]=nFactarial(i)/(nFactarial(i-j)*nFactarial(j));
        }
    }
    return triangle;
}*/


function pascal (size) {
    var triangle = [];

    for (let i=0; i<size; i++ )
    {
        triangle[i]=[];
        for (let j=0; j<=i; j++ ) {
           if (i===j) triangle[i][j]=1;
           else if (j===0) triangle[i][j]=1;
           else if(j>0) triangle[i][j]=triangle[i-1][j-1]+triangle[i-1][j];
        }
    }
    return triangle;
}

function render (array) {
    var rowsQty = array.length;
    var result = [];
    for (var i = 0; i < rowsQty; i++) {
        var row = ['<tr><td>', array[i].join('</td><td>'), '</td></tr>'].join('');
        result.push(row);
    }
    return result.join('');
}

