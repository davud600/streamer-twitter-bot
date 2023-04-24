import StreamerTwitterBotParams from "../interfaces/streamer-twitter-bot.interface";
import TwitchService from "./twitch.service";
import TwitterService from "./twitter.service";

export default class StreamerTwitterBot {
    private twitchService: TwitchService;
    private twitterService: TwitterService;

    /**
     * Update frequency (increase for less resource consumption)
     * Default set to one minute
     */
    private intervalTimeMillisec: number = 60 * 1000;

    /**
     * Keeping track of channel status
     */
    private wasLive = false;
    private isLive = false;
    private timeLiveMs = 0;
    private startedLiveTime = Date.now();

    public constructor({
        twitchServiceParams,
        twitterServiceParams,
        intervalTimeMillisec
    }: StreamerTwitterBotParams) {
        this.twitchService = new TwitchService(twitchServiceParams);
        this.twitterService = new TwitterService(twitterServiceParams);

        if (intervalTimeMillisec !== undefined && intervalTimeMillisec !== null)
            this.intervalTimeMillisec = intervalTimeMillisec;

        console.log("started omg its working");
    }

    /**
     * Starts loop
     */
    public async start() {
        while (true) {
            console.log("Interval Called");

            try {
                this.isLive = await this.twitchService.isStreamerLive();

                if (this.isLive && !this.wasLive) {
                    // stream started
                    this.twitterService.makeTweet();
                    this.wasLive = true;
                    this.startedLiveTime = Date.now();
                } else if (this.isLive && this.wasLive) {
                    // count timeLiveMs
                    this.timeLiveMs = Date.now() - this.startedLiveTime;
                } else if (!this.isLive && this.wasLive) {
                    // stream ended
                    this.wasLive = false;
                }
            } catch (e: any) {
                console.error(e);
            }

            await new Promise((resolve) =>
                setTimeout(resolve, this.intervalTimeMillisec)
            );
        }
    }

    /**
     * Get time streamer has been live for (in milliseconds)
     */
    public getTimeLive() {
        return this.timeLiveMs;
    }
}
