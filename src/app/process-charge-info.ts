export class ProcessedChargeInfo {
       id : number;
       userName : string;
	processedCharge : number;
       packageAndDeliveryCharge : number;
       dateOfDelivery : Date;

       constructor(id:number,userName:string,processedCharge:number,packageAndDeliveryCharge:number,dateOfDelivery:Date){
        this.id = id;
        this.userName= userName;
        this.processedCharge = processedCharge;
        this.packageAndDeliveryCharge = packageAndDeliveryCharge;
        this.dateOfDelivery = dateOfDelivery;
       }

}
