import supertest = require("supertest");
import { Header } from "./Header";
import request = require("superagent");
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
    public static async postRequestUser(requestURL: string, headerTypes: any, data: any) {

        const res = await (await Base.getURL()).post(requestURL)
            .send(data)
            .set('Accept', `${'application/json'}`);
        return res;
    }
}