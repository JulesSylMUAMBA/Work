class Pt{
    constructor(public x: number, public y:number){
    }
    foo(){
        console.log('hello TS');
    }
}

const a = new Pt(1,2);
a.foo();