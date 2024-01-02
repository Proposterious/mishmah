// 1. Import utilities from astro
import { defineCollection, z } from 'astro:content';

// 2. Define your collection
const worksCollection = defineCollection({
    type: 'content',
    schema: z.object({
        author: z.string(),
        categories: z.array(z.string()),
        genres: z.array(z.string()),
        date: z.string(),
        image: z.string(),
        title: z.string(),
        volume: z.string().optional(),
        excerpt: z.string().optional()
    })
});

const postsCollection = defineCollection({
    type: 'content',
    schema: ({ image }) => z.object({
        author: z.string(),
        date: z.string(),
        image: image(),
        title: z.string(),
        content: z.string().optional(),
        categories: z.array(z.string()).optional()
    })
});

// 3. Export a single collections object
export const collections = {
    works: worksCollection,
    posts: postsCollection
}

