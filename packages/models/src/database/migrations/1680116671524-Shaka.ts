import { MigrationInterface, QueryRunner } from "typeorm";

export class Shaka1680116671524 implements MigrationInterface {
  name = "Shaka1680116671524";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "email" DROP CONSTRAINT "UQ_dbcde6796c076fc8bca0ff9e2f1"`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "email" ADD CONSTRAINT "UQ_dbcde6796c076fc8bca0ff9e2f1" UNIQUE ("address")`
    );
  }
}
