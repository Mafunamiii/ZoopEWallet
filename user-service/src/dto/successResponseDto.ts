export interface SuccessResponseDto<T> {
    success: boolean;
    data: T;
    message?: string;
}