export enum LogLevel {
    DEBUG, INFO, WARN, ERROR
}

export class Logger {

    static log(level: LogLevel, message: string) {
        switch (level) {
            case LogLevel.ERROR:
                console.error(message);
                break;
            case LogLevel.WARN:
                console.warn(message);
                break;
            case LogLevel.INFO:
                console.info(message);
                break;
            default:
                console.debug(message);
        }
    }

    static error(message: string) {
        this.log(LogLevel.ERROR, message);
    }

    static warn(message: string) {
        this.log(LogLevel.WARN, message);
    }

    static info(message: string) {
        this.log(LogLevel.INFO, message);
    }

    static debug(message: string) {
        this.log(LogLevel.DEBUG, message);
    }
}