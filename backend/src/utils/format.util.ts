// format dto
export function formatDto<T extends Record<string, any>>(obj: T): Partial<T> {
    if (!obj) {
        return {}
    }
    
    return Object.entries(obj).reduce((acc, [key, value]) => {
        if (typeof value !== 'undefined') {
            acc[key as keyof T] = value
        }
        return acc
    }, {} as Partial<T>)
}

// formate createdAt updatedAt dates
const _check_array_with_val = (array: any[] | null, val: any, i: number | null = null) => {
    if (array && i !== null) {
        let { createdAt, updatedAt } = array[i]
        return [createdAt, updatedAt]
    } else {
        let { createdAt, updatedAt } = val
        return [createdAt, updatedAt]
    }
}
