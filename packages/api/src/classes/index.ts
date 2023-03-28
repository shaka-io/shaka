import { ClassesApiHandler } from "./handler";

export class ClassesApi {
  private apihandler: ClassesApiHandler;

  constructor() {
    this.apihandler = new ClassesApiHandler();
  }

  public get handler(): ClassesApiHandler {
    return this.apihandler;
  }
}
