export class HttpError extends Error {
    readonly statusCode: number;

    constructor(errCode: string = "UNKNOWN", statusCode: number = 500) {
        super(errCode);
        this.statusCode = statusCode;
    }
}