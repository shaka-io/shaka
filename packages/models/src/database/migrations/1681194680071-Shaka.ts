import { MigrationInterface, QueryRunner } from "typeorm";

export class Shaka1681194680071 implements MigrationInterface {
  name = "Shaka1681194680071";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "email" ("id" SERIAL NOT NULL, "created" TIMESTAMP NOT NULL DEFAULT now(), "updated" TIMESTAMP NOT NULL DEFAULT now(), "key" uuid NOT NULL DEFAULT uuid_generate_v4(), "address" character varying NOT NULL, "to" character varying NOT NULL, "records" json, CONSTRAINT "PK_1e7ed8734ee054ef18002e29b1c" PRIMARY KEY ("id"))`
    );
    await queryRunner.query(
      `CREATE TABLE "ln_crowdfund" ("id" SERIAL NOT NULL, "created" TIMESTAMP NOT NULL DEFAULT now(), "updated" TIMESTAMP NOT NULL DEFAULT now(), "key" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying, "note" character varying, "amount" character varying NOT NULL, "records" json, CONSTRAINT "PK_9aab06604d656877557f3e6026e" PRIMARY KEY ("id"))`
    );
    await queryRunner.query(
      `CREATE TABLE "question" ("id" SERIAL NOT NULL, "created" TIMESTAMP NOT NULL DEFAULT now(), "updated" TIMESTAMP NOT NULL DEFAULT now(), "key" uuid NOT NULL DEFAULT uuid_generate_v4(), "title" character varying NOT NULL, "contact" character varying NOT NULL, "content" character varying NOT NULL, "opt" character varying, CONSTRAINT "PK_21e5786aa0ea704ae185a79b2d5" PRIMARY KEY ("id"))`
    );
    await queryRunner.query(
      `CREATE TABLE "team" ("id" SERIAL NOT NULL, "created" TIMESTAMP NOT NULL DEFAULT now(), "updated" TIMESTAMP NOT NULL DEFAULT now(), "key" uuid NOT NULL DEFAULT uuid_generate_v4(), "credential" character varying NOT NULL, "validation" character varying NOT NULL, "records" json, CONSTRAINT "UQ_d0549bb82d10d1c3a7ca6a7be54" UNIQUE ("credential"), CONSTRAINT "PK_f57d8293406df4af348402e4b74" PRIMARY KEY ("id"))`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "team"`);
    await queryRunner.query(`DROP TABLE "question"`);
    await queryRunner.query(`DROP TABLE "ln_crowdfund"`);
    await queryRunner.query(`DROP TABLE "email"`);
  }
}
