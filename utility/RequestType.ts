
import { Base } from './Base';
import { Header } from './Header';

export class RequestType {

    public static async getRequest(requestURL: string, headerTypes: any) {
        const res = await (await Base.getURL()).get(requestURL)
            .set(Header.setHeader(headerTypes))
            .expect(200);
        return res;
    }
    public static async getRequestByID(requestURL: string, headerTypes: any, id: string) {
        const res = await (await Base.getURL()).get(requestURL + id)
            .set(Header.setHeader(headerTypes))
            .expect(200);
        return res;
    }
    public static async postRequestUser(requestURL: string, headerTypes: any, data: any) {

        const res = await (await Base.getURL()).post(requestURL)
            .send(data)
            .set('Accept', `${'application/json'}`);
        return res;
    }

}