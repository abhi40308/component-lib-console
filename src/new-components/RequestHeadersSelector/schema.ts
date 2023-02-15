import { z } from 'zod';

export const requestHeadersSelectorSchema = z.array(
  z.object({
    name: z.string(),
    value: z.string(),
    type: z.string().optional(),
  })
);

export type RequestHeadersSelectorSchema = any;
