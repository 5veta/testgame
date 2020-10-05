
const selectBlock=(field)=>{
    field.cellsblock.map(el=>{
        let div=document.querySelector(`[data-index="${el}"]`);
        div.className=div.className.includes('yellow')?'item': 'item yellow';
    });
}
const deleteBlock=(field)=>{
    
    field.cellsblock.map(el=>{
        let div=document.querySelector(`[data-index="${el}"]`);
        div.className='item';
        div.textContent='';
    });
}



const findblock=async (str, content)=>{
    const field=new gameField(content);
    field.filled=filled;
    field.getAdjacentCells([str]);
    
    
    selectBlock(field);

    if(field.cellsblock.length>2){
        setTimeout(()=>{
            deleteBlock(field);
        }, 300);
    }
    else{
        setTimeout(()=>{
            selectBlock(field);
        }, 300);
    }
    
}



//creating game field in DOM API
let game_elements=['♦', '♣', '♥', '♠'];
const tdarr=new twoDimensionalArray(7,6);
let rootdiv=window.document.getElementById('root');
let filled=tdarr.fillTDArray(game_elements); //fill tow dimensional array
// creating game field in DOM API, using filled tow dimensional array
filled.map((arow,y)=>{
    arow.map((el,x)=>{
        let div=document.createElement('div');
        div.className="item";
        div.setAttribute('data-index', `${y}_${x}`);
        div.setAttribute('data-color', `${el}`)
        let content=div.textContent=el;
        div.addEventListener('click', ()=>{
            findblock(`${y}_${x}`, content); //callback function to find all adjacent cells with the same value as clicked cell
        });
        rootdiv.appendChild(div);
    });
});




