# Understanding Type Narrowing in TypeScript

## Introduction

TypeScript uses types to catch mistakes before code runs. Still a variable can hold kinds of values while code is running. **Type narrowing** is the process where a value is checked and its possible type is narrowed down inside a block of code. This way developers can safely use properties and methods that belong to a specific type.

## How Type Narrowing Works

The `typeof` operator is useful for narrowing JavaScript primitive types. For example:

```ts
function printValue(value: string | number): void {
  if (typeof value === "string") {
    console.log(value.toUpperCase());
  } else {
    console.log(value.toFixed(2));
  }
}
```

Inside each branch, TypeScript knows whether `value` is a string or a number.

Use `instanceof` to check whether an object was created from a particular class or constructor:

```ts
class Dog {
  bark(): void {
    console.log("Woof!");
  }
}

function makeSound(animal: Dog | Date): void {
  if (animal instanceof Dog) {
    animal.bark();
  } else {
    console.log(animal.toDateString());
  }
}
```

The `in` operator checks whether a property exists on an object. It is especially helpful with object unions:

```ts
type Admin = { name: string; permissions: string[] };
type Customer = { name: string; purchaseCount: number };

function describe(user: Admin | Customer): void {
  if ("permissions" in user) {
    console.log(user.permissions);
  } else {
    console.log(user.purchaseCount);
  }
}
```

## Conclusion

Type narrowing helps make union types more practical and safer. By using the `typeof` operator, the `instanceof` operator, and the `in` operator developers can check values at runtime. It also helps TypeScript to provide accurate type information without using unnecessary type assertions. This keeps code safe and clear. Also makes code easy to understand for other developers.
