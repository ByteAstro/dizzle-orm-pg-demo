import { drizzle } from 'drizzle-orm/postgres-js';
import { migrate } from 'drizzle-orm/postgres-js/migrator';
import postgres from 'postgres';
import * as dotenv from "dotenv";
dotenv.config();

// for migrations
const migrationClient = postgres(process.env.DATABASE_URL as string, { max: 1 });
const migrateDb = async () => {
    await migrate(drizzle(migrationClient), {
        migrationsFolder: "./src/drizzle/migrations"
    });

    await migrationClient.end();
}
migrateDb();
