export interface Post {
    comments_quantity?: number;
    content?:           string;
    name?:              string;
    picture_post?:      string;
    picture_profile?:   string;
}

export class Convert {
    public static toPost(json: string): { [key: string]: Post } {
        return JSON.parse(json);
    }

    public static postToJson(value: { [key: string]: Post }): string {
        return JSON.stringify(value);
    }
}
