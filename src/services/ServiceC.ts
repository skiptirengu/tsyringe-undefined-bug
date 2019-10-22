import { singleton, inject } from "tsyringe";
import { ServiceA, ServiceB } from "./";
// import { ServiceA } from "./ServiceA";
// import { ServiceB } from "./ServiceB";

@singleton()
export class ServiceC {
  constructor(
    @inject(ServiceA) private a: ServiceA,
    @inject(ServiceB) private b: ServiceB
  ) {}
  // ...

  public print(): void {
    console.log("Hello from ServiceC");
    this.a.print();
    this.b.print();
  }
}
