import { DefectiveComponentInfo } from "./defective-component-info"

export class ProcessRequestInfo {
    userName : string
    contactNumber : string
    defectiveComponentInfo : DefectiveComponentInfo

    constructor(userName:string, contactNumber:string, defectiveComponentInfo : DefectiveComponentInfo){
        this.userName=userName;
        this.contactNumber=contactNumber;
        this.defectiveComponentInfo=defectiveComponentInfo;
    }
}
