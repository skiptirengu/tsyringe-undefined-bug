import { singleton } from "tsyringe";

@singleton()
export class ServiceA {
  public print(): void {
    console.log("Hello from ServiceA");
  }
}
