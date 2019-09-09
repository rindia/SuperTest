import supertest = require("supertest");
import { Header } from "./Header";
import request = require("superagent");
const apiUrl = require('../API/Url');

export class Base {

    public static async getURL() {
        return supertest(apiUrl.Urls.url);

    }
}