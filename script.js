var i = 0;
var j = 0;
var parent = [];
var pValue = [];
var arr = [];
var score = 0;

function gayab(elementID) {
    let button = document.getElementById(elementID);
    arr[i] = elementID;

    if (button) {
        button.style.backgroundColor = 'transparent';
    }

    //parent[i] = button.parentElement.id;

    let par=button.parentElement;
    pValue[i] = par.getAttribute("value");
    console.log(pValue[i]);
    j++;
    i++;
    if(j==2)
    {
        setTimeout(dekh, 500);
        j=0;
        i=0;
    }
   
}

function dekh() 
{
    let x=0;
    if(pValue[x]==pValue[x+1])
    {
        score++;
        let myDiv = document.getElementById("result")
        myDiv.innerHTML = score;

    }else{
        for(x=0;x<2;x++){
            document.getElementById(arr[x]).style.backgroundColor = 'blue';
        }
    }
}


