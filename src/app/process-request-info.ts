import { DefectiveComponentInfo } from "./defective-component-info"

export class ProcessRequestInfo {
    userName : string
    contactNumber : string

    constructor(userName:string, contactNumber:string){
        this.userName=userName;
        this.contactNumber=contactNumber;
    }
}
