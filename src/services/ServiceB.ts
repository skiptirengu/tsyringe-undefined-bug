import { singleton } from "tsyringe";

@singleton()
export class ServiceB {
  public print(): void {
    console.log("Hello from ServiceB");
  }
}
