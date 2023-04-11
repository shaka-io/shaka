import { MigrationInterface, QueryRunner } from "typeorm";

export class Shaka1681194244278 implements MigrationInterface {
  name = "Shaka1681194244278";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "email" ADD "to" character varying NOT NULL`
    );
    await queryRunner.query(
      `ALTER TABLE "question" ADD "opt" character varying`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "question" DROP COLUMN "opt"`);
    await queryRunner.query(`ALTER TABLE "email" DROP COLUMN "to"`);
  }
}
