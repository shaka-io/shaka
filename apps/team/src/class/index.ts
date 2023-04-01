import { ClassLibraryBundles } from "@wavesrcool/library/lib/bundles/_class";

class ShakaClass {
  private shakabundles: ClassLibraryBundles;

  constructor() {
    this.shakabundles = new ClassLibraryBundles();
  }

  public get bundles(): ClassLibraryBundles {
    return this.shakabundles;
  }
}

export const classsteamshaka = new ShakaClass();
