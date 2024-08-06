function Person(name) {
    this.name = name;
  }
  
  Person.prototype.sayName = function() {
    console.log(`Hello, I'm ${this.name}!`);
  };
  
  function Player(name, marker) {
    this.name = name;
    this.marker = marker;
  }
  
  Object.setPrototypeOf(Player.prototype, Person.prototype)
  
  function Enemy(name) {
    this.name = name;
    this.marker = '^';
  }
  
  Object.setPrototypeOf(Enemy.prototype, Person.prototype)
  
  Enemy.prototype.sayName = function() {
    console.log('HAHAHAHAHAHA');
  };
  
  const carl = new Player('carl', 'X');
  carl.sayName();