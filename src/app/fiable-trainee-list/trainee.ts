// describe the Trainee data structure here
// export class Trainee {
//     constructor( //automatically will be executed
//         public firstname : string,
//         public lastname : string,
//         public age : number,
//         public course : string
//     ) {}
// }


//OR

export class Trainee{
    private employeeID: number;
    private eName: string;
    private salary: number;
    private designation: string;
    private credits: number;

    constructor(eid: number, n: string, s: number, d: string, c: number){
        this.employeeID = eid;
        this.eName = n;
        this.salary = s;
        this.designation = d;
        this.credits = c;
    }
    //GETTERS
    public getEmployeeID(): number {
        return this.employeeID;
    }
    public getEName(): string {
        return this.eName;
    }
    public getSalary(): number {
        return this.salary;
    }
    public getDesignation(): string {
        return this.designation;
    }
    public getCredits(): number {
        return this.credits;
    }
    //SETTERS
    public setEmployeeID(eid: number) {
        this.employeeID = eid;
    }
    public setEName(n: string) {
        this.eName = n;
    }
    public setSalary(s: number) {
        this.salary = s;
    }
    public setDesignation(d: string) {
        this.designation = d;
    }
    public setCredits(c: number) {
        this.credits = c;
    }

}
