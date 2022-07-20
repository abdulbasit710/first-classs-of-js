class Car{
    constructor ( name,model,capacity,Engineno){
        this.name=name
        this.model=model
        this.capacity=capacity
        this.engineno=Engineno
    }
    
    showdetail(){
        document.getElementById("para").innerHTML=
            `car name : = ${ this.name}
            <br>
             model name : = ${ this.model}
             capticity : = ${ this.capacity}
             engineno : = ${ this.engineno}
        `
    }
}
let c1 = new Car("honda","city" ,6,101030)
c1.showdetail()

