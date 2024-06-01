{
  type HasName = {
    name: string;
  }
  type Human = {
    name: string;
    age: number
  }
  type Family<Parent extends HasName, Child extends Parent = Parent> = {
    mother: Parent;
    father: Parent;
    child: Child;
  }

  const obj: Family<HasName, Human> = {
    mother: {
      name: 'Mika',
    },
    father: {
      name: 'Jeff',
    },
    child: {
      name: 'Ken',
      age:10
    }
  }
}