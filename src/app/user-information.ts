export class UserInformation {

    id : number | null;
    name  : string;
    password : string;
    userName : string;
    contactNumber : string;
     emailId : string;

    constructor(id:number | null, name:string, password:string, userName:string, contactNumber:string, emailId:string){
            this.id = id;
            this.name = name;
            this.password = password;
            this.userName = userName;
            this.contactNumber = contactNumber;
            this.emailId = emailId;
    }
}
