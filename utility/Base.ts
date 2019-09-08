import supertest = require("supertest");
import { Header } from "./Header";
const apiUrl = require('../API/Url');

export class Base {

    public static async getURL() {
        return supertest(apiUrl.Urls.url);

    }
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
}