export class DefectiveComponentInfo {
    componentName : string
    componentType : string
    quantity : number
    description : string

    constructor(componentName : string, componentType : string, quantity : number, description : string){
        this.componentName = componentName;
        this.componentType = componentType;
        this.quantity = quantity;
        this.description = description;
    }
}
