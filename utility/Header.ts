export enum HeadersTypes {

    ContenetTypeJSON,
    ContentTypeHTML

}

export class Header {


    public static setHeader(headerType: any) {
        const map = new Map();


        if (HeadersTypes.ContenetTypeJSON) {
            map.set('content-type', 'application/json');
        } else
            if (HeadersTypes.ContentTypeHTML) {
                map.set('content-type', 'text/html; charset=UTF-8');
            }
        return map;
    }
}