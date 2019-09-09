import supertest = require('supertest');
import { UsersList } from '../operations/UserList';
const apiUrl = require('../API/Url');
const postUser = require('../API/postUserTemplate');

const list_users = apiUrl.Urls.getUserList;
const postUserDataUrl = apiUrl.Urls.getUserById;
const userPostD = postUser.user;
const getUserById = apiUrl.Urls.getUserById;

describe('First Request to Get Users', async () => {

    it.skip('Get ALl User List', async () => {
        const res = await UsersList.verifyAllUserList(list_users);
        const a = JSON.parse(res.text);
        console.log(a[1].id);
    });

    it.skip('Get ALl User List by ID', async () => {
        const res = await UsersList.verifyAllUserListByID(getUserById, '155176');
        const a = JSON.parse(res.text);
        console.log(res.text);
    });

});