import { MigrationInterface, QueryRunner } from "typeorm";

export class Shaka1680305040854 implements MigrationInterface {
  name = "Shaka1680305040854";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "ln_crowdfund" ADD "records" json`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "ln_crowdfund" DROP COLUMN "records"`);
  }
}
