// format dto
export function formatDto<T extends Record<string, any>>(obj: T): Partial<T> {
  if (!obj) {
    return {};
  }

  return Object.entries(obj).reduce((acc, [key, value]) => {
    if (typeof value !== 'undefined') {
      acc[key as keyof T] = value;
    }
    return acc;
  }, {} as Partial<T>);
}
