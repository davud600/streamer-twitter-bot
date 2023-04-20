export default interface TwitterServiceParams {
    tweetStatus: string;
    twitchChannelLink?: TwitchLink;
    earlyStreamTextOptions?: string[];
    lateStreamTextOptions?: string[];
    normalStreamTextOptions?: string[];
    twitterConsumerKey: string;
    twitterConsumerSecret: string;
    twitterAccessTokenKey: string;
    twitterAccessTokenSecret: string;
}

export type TwitchLink = `${"https://www.twitch.tv/"}${string}`;
