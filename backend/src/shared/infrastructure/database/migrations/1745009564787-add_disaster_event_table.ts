import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddDisasterEventTable1745009564787 implements MigrationInterface {
  name = 'AddDisasterEventTable1745009564787';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TYPE "public"."disaster_event_severity_enum" AS ENUM('LOW', 'MODERATE', 'SEVERE', 'CRITICAL')`,
    );
    await queryRunner.query(
      `CREATE TABLE "disaster_event" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "type" text NOT NULL, "externalId" text, "source" text NOT NULL, "severity" "public"."disaster_event_severity_enum" NOT NULL, "magnitude" double precision, "occuredAt" TIMESTAMP WITH TIME ZONE NOT NULL, "regionId" text NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, CONSTRAINT "PK_5f132d7caf9216327ef8e968ac7" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "disaster_event"`);
    await queryRunner.query(
      `DROP TYPE "public"."disaster_event_severity_enum"`,
    );
  }
}
