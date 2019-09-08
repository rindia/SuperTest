import { Base } from "../utility/Base";
import { Header, HeadersTypes } from "../utility/Header";
import { expect } from 'chai';
import { fail } from "assert";


export class UsersList {

    public static async verifyAllUserList(getUserRequestUrl: string) {
        const res = await Base.getRequest(getUserRequestUrl,
            Header.setHeader(HeadersTypes.ContentTypeHTML));
        return res;
    }
    public static async verifyAllUserListByID(getUserRequestUrlByID: string, id: string) {
        const res = await Base.getRequestByID(getUserRequestUrlByID,
            Header.setHeader(HeadersTypes.ContentTypeHTML), id);
        return res;
    }
    public static async verifyPostUsers(postUserRequestURL: string, data: any) {

        const res = await Base.postRequestUser(postUserRequestURL,
            Header.setHeader(HeadersTypes.ContenetTypeJSON), data);
        if (res.text.includes('error')) {
            fail(res.text);
        }
        expect(res.status).to.equal(200);
        return res;


    }
}