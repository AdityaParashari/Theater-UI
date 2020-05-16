
export class screenResponse{

    screenId:number;
    theaterId:number;
    screenName:string;
    rows:number;
    columns:number;
    showList:number[];
    constructor(screenId:number,theaterId:number,screenName:string,rows:number,columns:number,showList:number[]){
        this.screenId=screenId;
        this.theaterId=theaterId;
        this.screenName=screenName;
        this.rows=rows;
        this.columns=columns;
        this.showList=showList;
    }
}