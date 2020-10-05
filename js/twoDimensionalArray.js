

class twoDimensionalArray {
    constructor(rows, columns){
        this.rows=rows;
        this.columns=columns;
    }

    fillTDArray(content_array){
        let arr=[];
        for(let y=0; y<this.rows; y++){
            let rowarr=[];
            for(let x=0; x<this.columns; x++){
                let num=getRandomInt(0, content_array.length);
                rowarr[x]=content_array[num];
            }
            arr[y]=rowarr;
        }
        return arr;
    }
}

