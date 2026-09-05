import { z } from "zod";

const envSchema = z.object({
  NEXT_PUBLIC_SITE_URL: z
    .string()
    .url("NEXT_PUBLIC_SITE_URL harus berupa URL valid")
    .refine(
      (url) => !url.includes("localhost") || process.env.NODE_ENV !== "production",
      "NEXT_PUBLIC_SITE_URL tidak boleh localhost di production"
    ),
  NEXT_PUBLIC_GA_ID: z.string().optional(),
  OG_RATE_LIMIT_PER_MIN: z
    .string()
    .optional()
    .transform((val) => (val ? parseInt(val, 10) : 60))
    .pipe(z.number().positive("OG_RATE_LIMIT_PER_MIN harus angka positif")),
});

export type Env = z.infer<typeof envSchema>;

export function validateEnv(): Env {
  const result = envSchema.safeParse({
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL || "https://www.ciloktech.id",
    NEXT_PUBLIC_GA_ID: process.env.NEXT_PUBLIC_GA_ID,
    OG_RATE_LIMIT_PER_MIN: process.env.OG_RATE_LIMIT_PER_MIN,
  });

  if (!result.success) {
    const errors = result.error.issues.map((issue) => `${issue.path.join(".")}: ${issue.message}`).join(", ");
    throw new Error(`[FAIL-FAST] Environment Validation Failed: ${errors}`);
  }

  return result.data;
}

export const env = validateEnv();
