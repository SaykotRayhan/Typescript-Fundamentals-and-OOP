const multiplyValue = (value: number, multiplier: number = 2): number => {
  if (multiplier !== undefined) {
    return value * multiplier;
  }
  return value * 2;
};

const processInput = (input: string | number | boolean): string | number => {
  if (typeof input === "string") {
    return input.trim().toLowerCase();
  }
  if (typeof input === "number") {
    return input * 10;
  }

  return input ? "Active" : "Inactive";
};

type Coordinate = readonly [
  latitude: number,
  longitude: number,
  locationName: string,
];
const formatCoordinate = (coordinate: Coordinate): string => {
  return `Location: ${coordinate[2]} (${coordinate[0]}, ${coordinate[1]})`;
};

function concatenateArrays<T>(...arrays: T[][]): T[] {
  return arrays.flat();
}

interface Course {
  title: string;
  students: number;
  isPublished: boolean;
}
const getPopularCourses = (course: Course[], minStudents: number): Course[] => {
  return course.filter(
    (course) => course.isPublished && course.students >= minStudents,
  );
};

function pluckValues<T, K extends keyof T>(items: T[], key: K): T[K][] {
  return items.map((item) => item[key]);
}

class Employee {
  protected name: string;
  private baseSalary: number;
  constructor(name: string, baseSalary: number) {
    this.name = name;
    this.baseSalary = baseSalary;
  }
  getDetails(): string {
    return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
  }
}
class Manager extends Employee {
  private department: string;
  constructor(name: string, baseSalary: number, department: string) {
    super(name, baseSalary);
    this.department = department;
  }
  getRoleInfo(): string {
    return `Manager of ${this.department}: ${this.name}`;
  }
}

const validateAgeAsync = (age: number): Promise<string> => {
  return new Promise<string>((resolve, reject) => {
    if (age >= 18) {
      setTimeout(() => resolve("Access Granted"), 1000);
    } else {
      reject(new Error("Access Denied: Must be 18 or older"));
    }
  });
};
