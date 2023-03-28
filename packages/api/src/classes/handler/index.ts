/* eslint-disable @typescript-eslint/no-explicit-any */
import { LibraryHashHmac } from "@shaka-js/library/lib/hash/hmac/LibraryHashHmac";
import { LibraryUniques } from "@shaka-js/library/lib/uniques/LibraryUniques";
import { GraphObjectsResolve } from "../../objects/resolve/GraphObjectsResolve";

export class ClassesApiHandler {
  public solve<T1>(data: T1): GraphObjectsResolve<null> & T1 & { pass: true } {
    const timestamp = Date.now();
    const ray = LibraryUniques();
    const hash = LibraryHashHmac(`${ray}#${timestamp}`);
    return {
      pass: true,
      message: null,
      timestamp,
      ray,
      hash,
      ...data,
    };
  }

  public error<T1>(message: T1): GraphObjectsResolve<T1> & { pass: false } {
    const timestamp = Date.now();
    const ray = LibraryUniques();
    const hash = LibraryHashHmac(`${ray}#${timestamp}`);
    return {
      pass: false,
      message,
      timestamp,
      ray,
      hash,
    };
  }

  public catch(e: any): string {
    let msg = `catch`;
    if (typeof e.code === "string") {
      msg = e.code;
    }

    return msg;
  }
}
