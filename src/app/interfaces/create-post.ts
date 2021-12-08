export interface CreatePost {
    content?: string;
    image?:   string;
}

export class Convert {
    public static toCreatePost(json: string): { [key: string]: CreatePost } {
        return JSON.parse(json);
    }

    public static createPostToJson(value: { [key: string]: CreatePost }): string {
        return JSON.stringify(value);
    }
}
