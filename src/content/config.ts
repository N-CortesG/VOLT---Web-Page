import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    date: z.date(),
    image: z.string().optional(),
    category: z.string().optional(),
    lang: z.string(),
  }),
});

export const collections = {
  blog: blogCollection,
};
