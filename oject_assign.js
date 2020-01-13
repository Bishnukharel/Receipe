const person = {
    name: 'Asabeneh',
    age: 200,
    country: 'Finland',
    skills: ['HTML', 'CSS', 'JS'],
    address: {
      street: 'Heitamienkatu 16',
      pobox: 2002,
      city: 'Helsinki'
    },
     getPersonInfo: function() {
      return `I am ${this.address.pobox} and I live in ${this.country}. I am ${this.age}.`;
    }
  };
  
  //Object methods: Object.assign, Object.keys, Object.values, Object.entries
  //hasOwnProperty
  console.log(person.name)

  console.log(person.getPersonInfo());