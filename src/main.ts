import "reflect-metadata";
import { container } from "tsyringe";
import { ServiceA, ServiceB, ServiceC } from "./services";

const a = container.resolve(ServiceA);
const b = container.resolve(ServiceB);
const c = container.resolve(ServiceC);

a.print();
b.print();
c.print();
