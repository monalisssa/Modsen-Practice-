class Person {
  constructor(name, age, country)
  {
    this.name = name
    this.age = age
    this.country = country
  }
  
  printInfo()
  {
    console.log("Имя: " + this.name + ". Возраст: " + this.age + ". Страна: " + this.country)
  }
}

const person_1 = new Person("Елена", 20, "Беларусь")
person_1.printInfo()

const person_2 = new Person("Дмитрий", 25, "Россия")
person_2.printInfo()