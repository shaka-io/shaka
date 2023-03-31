import { MigrationInterface, QueryRunner } from "typeorm";

export class Shaka1680304799523 implements MigrationInterface {
  name = "Shaka1680304799523";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "ln_crowdfund" ("id" SERIAL NOT NULL, "created" TIMESTAMP NOT NULL DEFAULT now(), "updated" TIMESTAMP NOT NULL DEFAULT now(), "key" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying, "note" character varying, "amount" character varying NOT NULL, CONSTRAINT "PK_9aab06604d656877557f3e6026e" PRIMARY KEY ("id"))`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "ln_crowdfund"`);
  }
}
