import { Header } from "../utility/Header";
import { expect } from 'chai';
import { fail } from "assert";
import { RequestType } from "../utility/RequestType";
import { HeadersTypes } from "../utility/HeadersTypes";

export class UsersList {
    public static async verifyAllUserList(getUserRequestUrl: string) {
        const res = await RequestType.getRequest(getUserRequestUrl,
            Header.setHeader(HeadersTypes.ContentTypeHTML));
        if (res.text.includes('error')) {
            fail(res.text);
        }
        console.log(res.error.message);
        return res;
    }
    public static async verifyAllUserListByID(getUserRequestUrlByID: string, id: string) {
        const res = await RequestType.getRequestByID(getUserRequestUrlByID,
            Header.setHeader(HeadersTypes.ContentTypeHTML), id);
        console.log(res.error.message);
        if (res.text.includes('error')) {
            fail(res.text);
        }
        return res;
    }
    public static async verifyPostUsers(postUserRequestURL: string, data: any) {

        const res = await RequestType.postRequestUser(postUserRequestURL,
            Header.setHeader(HeadersTypes.ContenetTypeJSON), data);
        console.log(res.error.message);
        if (res.text.includes('error')) {
            fail(res.text);
        }

        expect(res.status).to.equal(200);
        return res;


    }
    public static async verifyUpdateUsers(UpdateUserURL: string, data: any, id: string) {

        const res = await RequestType.UpdateRequestUser(UpdateUserURL,
            Header.setHeader(HeadersTypes.ContentTypeHTML), data, id);
        console.log(res.error.message);
        if (res.text.includes('error')) {
            fail(res.text);
        }


        expect(res.status).to.equal(200);
        return res;

    }
    public static async verifyDeleteUsers(DeleteUserRequestURL: string, id: string) {

        const res = await RequestType.DeleteRequestUser(DeleteUserRequestURL,
            Header.setHeader(HeadersTypes.ContentTypeHTML), id);
        console.log(res.error.message);
        if (res.text.includes('error')) {
            fail(res.text);
        }
        expect(res.status).to.equal(200);
        return res;

    }
}