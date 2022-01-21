function color(){
    const bgColor = '#6DB1BF';
    const bgColor2 = '#FFEAEC';
    
    let elements = document.querySelectorAll('body > main > article.question > div');
    let evenElems = Object.entries(elements).filter((_,i)=>i%2==0);
    let oddElems = Object.entries(elements).filter((_,i)=>i%2==1);
    
    evenElems.forEach(item=>{
        item[1].style.backgroundColor = bgColor;
    })
    oddElems.forEach(item=>{
        item[1].style.backgroundColor = bgColor2;
    })
    
    console.log('Done : Coloring');
}

window.addEventListener('DOMContentLoaded', color);