import { MigrationInterface, QueryRunner } from "typeorm";

export class Shaka1680492737954 implements MigrationInterface {
  name = "Shaka1680492737954";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "team" ADD CONSTRAINT "UQ_d0549bb82d10d1c3a7ca6a7be54" UNIQUE ("credential")`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "team" DROP CONSTRAINT "UQ_d0549bb82d10d1c3a7ca6a7be54"`
    );
  }
}
