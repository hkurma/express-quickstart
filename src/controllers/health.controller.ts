import { Logger } from "../utils/logger";

export const healthController = {

    async check() {
        const uptime = process.uptime();
        Logger.info(uptime.toString());
        return {
            date: new Date(),
            uptime
        };
    }
}