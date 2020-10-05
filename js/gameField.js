

class gameField{
    constructor(cell){
        this.cell=cell;
        this.cellsblock=[];
        this.filled=[];
    }
    

    getAdjacentCellsOfOne(y, x){
        let lengthy=this.filled.length;
        let lengthx=this.filled[0].length;
        let yt=(y>0)?y-1:y;
        let yb=(y<(lengthy-1))?y+1:y;
        let xl=(x>0)?x-1:x;
        let xr=(x<(lengthx-1))?x+1:x;
        let arr=[];
        
        if(yt!==y&&(this.cellsblock.indexOf(`${yt}_${x}`)===-1)&&this.filled[yt][x]===this.cell){//check value of cell over target cell if it is not into 'this.cellblock' array
            arr.push(`${yt}_${x}`);
        }
        if(yb!==y&&(this.cellsblock.indexOf(`${yb}_${x}`)===-1)&&this.filled[yb][x]===this.cell){//check value of cell under target cell if it is not into 'this.cellblock' array
            arr.push(`${yb}_${x}`);
        }
        if(xl!==x&&(this.cellsblock.indexOf(`${y}_${xl}`)===-1)&&this.filled[y][xl]===this.cell){//check value of cell from left side of target cell if it is not into 'this.cellblock' array
            arr.push(`${y}_${xl}`);
        }
        if(xr!==x&&(this.cellsblock.indexOf(`${y}_${xr}`)===-1)&&this.filled[y][xr]===this.cell){//check value of cell from right side of target cell if it is not into 'this.cellblock' array
            arr.push(`${y}_${xr}`);
        }
        return arr;
    }

    getAdjacentCells(cells){ //recursive function to check all adjacent cells with the target value of cell
        let arrays=cells.map(el=>{
            let [y, x]=el.split('_');
            let arr=this.getAdjacentCellsOfOne(parseInt(y, 10), parseInt(x, 10), this.filled);
            this.cellsblock=[...this.cellsblock, ...arr];
            return arr;
        });
        let odarr=[].concat(...arrays);
        if(odarr.length>0){
            return this.getAdjacentCells(odarr);
        }
        else{
            return;
        }
    }
}

