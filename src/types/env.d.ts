export interface Env {
  ENVIRONMENT: string;
  DB: D1Database;
  BUCKET: R2Bucket;
  CACHE: KVNamespace;
}
