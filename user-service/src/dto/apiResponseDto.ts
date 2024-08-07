import {ErrorResponseDto} from "./errorResponseDto";
import {SuccessResponseDto} from "./successResponseDto";

export type ApiResponseDto<T> = SuccessResponseDto<T> | ErrorResponseDto;