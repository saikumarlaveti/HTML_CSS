class Parent{
    constructor(name , age){
        this.name = name;
        this.age = age;
    }
    parentMethod(){
        return "this is parent class " +this.name;
    }
}

class Child extends Parent{
    constructor(id,name,age){
        super(name,age)
        this.id = id
    }
    childMethod(){
        return "This is child class : " + this.name + " " + this.age +" " + this.id
    }
}

    let  c = new Child(1,"Saikumar",24)
    console.log(c.parentMethod())
    console.log(c.childMethod())
    