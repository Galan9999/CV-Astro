import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tech: z.array(z.string()),
    url: z.string().optional(),
    year: z.number(),
  }),
});

const experience = defineCollection({
  type: 'data',
  schema: z.object({
    company: z.string(),
    role: z.string(),
    period: z.object({
      start: z.string(),
      end: z.string(),
    }),
    achievements: z.array(z.string()),
    tech: z.array(z.string()),
  }),
});

export const collections = { projects, experience };
