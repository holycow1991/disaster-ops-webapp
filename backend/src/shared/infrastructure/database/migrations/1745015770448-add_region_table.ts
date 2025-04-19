import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddRegionTable1745015770448 implements MigrationInterface {
  name = 'AddRegionTable1745015770448';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "region" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" text NOT NULL, "country" text NOT NULL, "boundary" geography(Point,4326) NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, CONSTRAINT "PK_5f48ffc3af96bc486f5f3f3a6da" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "disaster_event" DROP COLUMN "regionId"`,
    );
    await queryRunner.query(`ALTER TABLE "disaster_event" ADD "regionId" uuid`);
    await queryRunner.query(
      `ALTER TABLE "disaster_event" ADD CONSTRAINT "UQ_604d18994101dcb5c84a6d18b38" UNIQUE ("regionId")`,
    );
    await queryRunner.query(
      `ALTER TABLE "disaster_event" ADD CONSTRAINT "disaster_region_fkey" FOREIGN KEY ("regionId") REFERENCES "region"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "disaster_event" DROP CONSTRAINT "disaster_region_fkey"`,
    );
    await queryRunner.query(
      `ALTER TABLE "disaster_event" DROP CONSTRAINT "UQ_604d18994101dcb5c84a6d18b38"`,
    );
    await queryRunner.query(
      `ALTER TABLE "disaster_event" DROP COLUMN "regionId"`,
    );
    await queryRunner.query(
      `ALTER TABLE "disaster_event" ADD "regionId" text NOT NULL`,
    );
    await queryRunner.query(`DROP TABLE "region"`);
  }
}
