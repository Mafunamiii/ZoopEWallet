export interface ErrorResponseDto {
    success: boolean;
    error: {
        code: string;   
        message: string;
    };
}