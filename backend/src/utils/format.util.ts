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

// formate createdAt updatedAt dates
const _check_array_with_val = (array: any[] | null, val: any, i: number | null = null) => {
    if (array && i !== null) {
        let { createdAt, updatedAt } = array[i];
        return [createdAt, updatedAt];
    } else {
        let { createdAt, updatedAt } = val;
        return [createdAt, updatedAt];
    }
};

// export function formatItemsCrUpdDates<T extends { display_date?: string }>(array_or_obj: any[] | T, parent_array: any[] | null = null) {
//     if (!Array.isArray(array_or_obj)) {
//         let [createdAt, updatedAt] = _check_array_with_val(parent_array, array_or_obj);
//         // update was made to that certain item
//         if (updatedAt > createdAt) {
//             array_or_obj.display_date = dayjs().calendar(updatedAt, {
//                 sameDay: "[Updated today at] h:mm A",
//                 lastDay: "[Updated yesterday at] h:mm A",
//                 lastWeek: "[Updated last] dddd [at] h:mm A",
//                 sameElse: "[Updated at] DD/MM/YYYY",
//             });
//         } else {
//             array_or_obj.display_date = dayjs().calendar(createdAt, {
//                 sameDay: "[Created today at] h:mm A",
//                 lastDay: "[Created yesterday at] h:mm A",
//                 lastWeek: "[Created last] dddd [at] h:mm A",
//                 sameElse: "[Created at] DD/MM/YYYY",
//             });
//         }
//     } else {
//         return array_or_obj.forEach((val: any, i) => {
//             let [createdAt, updatedAt] = _check_array_with_val(parent_array, val, i);
    
//             // update was made to that certain item
//             if (updatedAt > createdAt) {
//                 val.display_date = dayjs().calendar(updatedAt, {
//                     sameDay: "[Updated today at] h:mm A",
//                     lastDay: "[Updated yesterday at] h:mm A",
//                     lastWeek: "[Updated last] dddd [at] h:mm A",
//                     sameElse: "[Updated at] DD/MM/YYYY",
//                 });
//             } else {
//                 val.display_date = dayjs().calendar(createdAt, {
//                     sameDay: "[Created today at] h:mm A",
//                     lastDay: "[Created yesterday at] h:mm A",
//                     lastWeek: "[Created last] dddd [at] h:mm A",
//                     sameElse: "[Created at] DD/MM/YYYY",
//                 });
//             }
    
//         });
//     }
// }
