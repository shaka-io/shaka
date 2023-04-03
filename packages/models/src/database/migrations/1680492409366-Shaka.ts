import { MigrationInterface, QueryRunner } from "typeorm";

export class Shaka1680492409366 implements MigrationInterface {
  name = "Shaka1680492409366";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "team" ("id" SERIAL NOT NULL, "created" TIMESTAMP NOT NULL DEFAULT now(), "updated" TIMESTAMP NOT NULL DEFAULT now(), "key" uuid NOT NULL DEFAULT uuid_generate_v4(), "credential" character varying NOT NULL, "validation" character varying NOT NULL, "records" json, CONSTRAINT "PK_f57d8293406df4af348402e4b74" PRIMARY KEY ("id"))`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "team"`);
  }
}
