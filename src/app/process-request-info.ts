import { DefectiveComponentInfo } from "./defective-component-info"

type Nullable<T> = T | null;
export class ProcessRequestInfo {
    id : number | null;
    userName : string
    contactNumber : string
    defectiveComponentInfo : DefectiveComponentInfo

    constructor(id:number | null,userName:string, contactNumber:string, defectiveComponentInfo : DefectiveComponentInfo){
        this.id=id;      
        this.userName=userName;
        this.contactNumber=contactNumber;
        this.defectiveComponentInfo=defectiveComponentInfo;
    }
}
