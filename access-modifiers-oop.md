# Understanding Access Modifiers in TypeScript OOP

## Introduction

Object-oriented programming uses classes to organize data and behavior. Classes also keep data and behavior together. TypeScript offers access modifiers that control how class members can be accessed inside the class and inside the instances that are created from the class. The main modifiers are `public` `private` and `protected`; `readonly` also tells you whether a property can be reassigned after initialization.

## Access Modifiers Explained

A `public` member is accessible from anywhere. It is also the default visibility when no modifier is specified:

```ts
class User {
  public name: string;

  constructor(name: string) {
    this.name = name;
  }
}

const user = new User("Rayhan");
console.log(user.name);
```

A `private` member can only be accessed inside the class that declares it. A `protected` member is accessible inside its declaring class and its subclasses, but not directly from external code:

```ts
class Employee {
  private salary: number;
  protected department: string;

  constructor(salary: number, department: string) {
    this.salary = salary;
    this.department = department;
  }

  public getSalary(): number {
    return this.salary;
  }
}

class Developer extends Employee {
  public describe(): string {
    return this.department;
  }
}
```

Here, external code can call `getSalary()`, but it cannot directly read `salary` or `department`. The subclass can access `department`, but not `salary`.

The `readonly` modifier prevents reassignment after a property is initialized, usually in its declaration or constructor:

```ts
class Product {
  readonly id: number;

  constructor(id: number) {
    this.id = id;
  }
}
```

## Conclusion

Access modifiers help establish clear class boundaries and protect internal state. TypeScript provides `public`, `private`, and `protected` to control member accessibility, and `readonly` prevents properties from being reassigned after initialization.These modifiers promote encapsulation, improve code maintainability, and make object-oriented code easier to understand and manage.
