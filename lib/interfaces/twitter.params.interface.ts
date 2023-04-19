export default interface TwitterServiceParams {
    tweetStatus: string;
    twitchChannelLink?: TwitchLink;
    earlyStreamTextOptions?: string[];
    lateStreamTextOptions?: string[];
    normalStreamTextOptions?: string[];
}

export type TwitchLink = `${"https://www.twitch.tv/"}${string}`;
