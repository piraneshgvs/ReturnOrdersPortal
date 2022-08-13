import { DefectiveComponentInfo } from "./defective-component-info"

type Nullable<T> = T | null;
export class ProcessRequestInfo {
    id : number | null;
    userName : string
    contactNumber : string
    defectiveComponentInfo : DefectiveComponentInfo
    cdate : Date;

    constructor(id:number | null,userName:string, contactNumber:string, defectiveComponentInfo : DefectiveComponentInfo, cdate: Date){
        this.id=id;      
        this.userName=userName;
        this.contactNumber=contactNumber;
        this.defectiveComponentInfo=defectiveComponentInfo;
        this.cdate = cdate;
    }
}
