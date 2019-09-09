import supertest = require('supertest');
import { UsersList } from '../operations/UserList';
const apiUrl = require('../API/Url');
const postUser = require('../API/postUserTemplate');

const list_users = apiUrl.Urls.getUserList;
const postUserDataUrl = apiUrl.Urls.getUserById;
const userPost = apiUrl.Urls.postUser;
const getUserById = apiUrl.Urls.getUserById;

describe('Post Request Test Suite', async () => {

    it.skip('Add New Users', async () => {
        const obj = {"name":"sainix1","salary":"470000","age":"30","id":"897"};
        const res = await UsersList.verifyPostUsers(userPost, obj);
        const a = JSON.parse(res.text);
    });

});