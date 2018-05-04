// esporto il model 
export class Collectable{
    // definisco le proprietà
    description: string;
    type: string;  

    //inizializzo le proprietà tramite un constructor
    constructor(description, type){
        this.description = description;
        this.type = type;
    } 
}