export interface IVatCategory{
    id: number;
    name: string;    
    value:number;
}  
export class VatCategory implements IVatCategory {
    id = 0;    
    name = "";
    value = 0;
    
}
