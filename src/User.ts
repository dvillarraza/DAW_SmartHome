class User {
    private _id: number;
    private _name: string;
    private _email: string;
    private _isLogged: boolean;

    constructor(id:number,name:string,email:string)
    {
        this.id = id;
        this.name = name;
        this.email = email;
        this.isLogged = false;
        
    }

    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }

    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }
 
    public get email(): string {
        return this._email;
    }
    public set email(value: string) {
        this._email = value;
    }

    public get isLogged(): boolean {
        return this._isLogged;
    }
    public set isLogged(value: boolean) {
        this._isLogged = value;
    } 

    public printinfo():void{
        console.log(`id:${this.id} nombre:${this.name} email:${this.email}`);
    }


}

