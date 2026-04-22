const trainee = {
  name: "Puran",
  vertical: "Dev",
  introduce: function(){
    return `Hi I am ${this.name}, training in ${this.vertical}`; 
  }
  
 
};

console.log(trainee.introduce());

