import supertest = require('supertest');
import { UsersList } from '../operations/UserList';
const apiUrl = require('../API/Url');
const postUser = require('../API/postUserTemplate');
const updateUser = apiUrl.Urls.updateUser;

const getUserById = apiUrl.Urls.getUserById;

describe('Update Request Test Suite', async () => {

    it.skip('Update Existing Users', async () => {
        const obj = 	{"name":"lullu","salary":"1123","age":"23"};
        const res = await UsersList.verifyUpdateUsers(updateUser, obj,'155123');
        const a = JSON.parse(res.text);
    });

});