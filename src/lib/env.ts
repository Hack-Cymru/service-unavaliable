// src/lib/env.ts
export function getEnv(key: keyof ImportMetaEnv) {
    return import.meta.env[key];
  }