import z from "zod"

const formSchema = z.object({
    name: z.string().min(3, 'Category name must be at least 3 characters')
})

export default formSchema
