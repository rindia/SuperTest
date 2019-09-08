import { Base } from "../utility/Base";
import { Header, HeadersTypes } from "../utility/Header";


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
}