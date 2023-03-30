import { MailClass } from "@shaka-js/mail/lib/_class";
import { ClassesApiHandler } from "./handler";

export class ClassesApi {
  private apihandler: ClassesApiHandler;

  private apimail: MailClass;

  constructor() {
    this.apihandler = new ClassesApiHandler();
    this.apimail = new MailClass();
  }

  public get handler(): ClassesApiHandler {
    return this.apihandler;
  }

  public get mail(): MailClass {
    return this.apimail;
  }
}
