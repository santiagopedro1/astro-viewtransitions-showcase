import { defineCollection, z } from 'astro:content'

const planets = defineCollection({
	type: 'data',
	schema: z.object({
		name: z.string(),
		image: z.string(),
		description: z.string(),
		details: z.array(
			z
				.object({
					'length of a year': z.number()
				})
				.or(
					z.object({
						'planet type': z.string()
					})
				)
				.or(
					z.object({
						'distance to sun': z.number()
					})
				)
		)
	})
})

export const collections = { planets }
