const obj ={
    name:"Ayandip",
    year:"3rd",
    college:"Bhairab ganguly college",
    age:22,
    func: function greet() {
       console.log(`${this.name} from ${this.college} who's age is more likely ${this.age} and he is currently in ${this.year} year`);
    }
}

console.log(obj.func());
