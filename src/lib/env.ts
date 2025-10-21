// src/lib/env.ts
export function getEnv(key: keyof ImportMetaEnv) {
    return process.env[key];
  }