type Nullable<T> = T | null;
export class DefectiveComponentInfo {
    componentName : string
    componentType : string
    quantity : number | null
    description : string

    constructor(componentName : string, componentType : string, quantity : number |null, description : string){
        this.componentName = componentName;
        this.componentType = componentType;
        this.quantity = quantity;
        this.description = description;
    }
}
