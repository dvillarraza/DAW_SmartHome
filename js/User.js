class User {
    constructor(id, name, email) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.isLogged = false;
    }
    get id() {
        return this._id;
    }
    set id(value) {
        this._id = value;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get email() {
        return this._email;
    }
    set email(value) {
        this._email = value;
    }
    get isLogged() {
        return this._isLogged;
    }
    set isLogged(value) {
        this._isLogged = value;
    }
    printinfo() {
        console.log(`id:${this.id} nombre:${this.name} email:${this.email}`);
    }
}
