export interface CreateSonnerCookieProps {
    type: 'err' | 'success' | 'info';
    msg: string;
}

export type MakeOptional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;
