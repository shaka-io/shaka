import { MigrationInterface, QueryRunner } from "typeorm";

export class Shaka1680109864603 implements MigrationInterface {
  name = "Shaka1680109864603";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "email" ("id" SERIAL NOT NULL, "created" TIMESTAMP NOT NULL DEFAULT now(), "updated" TIMESTAMP NOT NULL DEFAULT now(), "key" uuid NOT NULL DEFAULT uuid_generate_v4(), "address" character varying NOT NULL, "records" json, CONSTRAINT "UQ_dbcde6796c076fc8bca0ff9e2f1" UNIQUE ("address"), CONSTRAINT "PK_1e7ed8734ee054ef18002e29b1c" PRIMARY KEY ("id"))`
    );
    await queryRunner.query(
      `CREATE TABLE "question" ("id" SERIAL NOT NULL, "created" TIMESTAMP NOT NULL DEFAULT now(), "updated" TIMESTAMP NOT NULL DEFAULT now(), "key" uuid NOT NULL DEFAULT uuid_generate_v4(), "title" character varying NOT NULL, "contact" character varying NOT NULL, "content" character varying NOT NULL, CONSTRAINT "PK_21e5786aa0ea704ae185a79b2d5" PRIMARY KEY ("id"))`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "question"`);
    await queryRunner.query(`DROP TABLE "email"`);
  }
}
