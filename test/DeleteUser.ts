import supertest = require('supertest');
import { UsersList } from '../operations/UserList';
const apiUrl = require('../API/Url');
const postUser = require('../API/postUserTemplate');
const deleteUser = apiUrl.Urls.deleteUser;

describe('Delete Request Test Suite', async () => {

    it.only('Delete Existing Users', async () => {
        const res = await UsersList.verifyDeleteUsers(deleteUser,'155176');
        const a = JSON.parse(res.text);
    });

});