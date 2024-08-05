import conf from '../conf/conf.js';
import { Client, Account, ID } from 'appwrite';

export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.account = new Account(this.client);
        console.log('Account initialized:', this.account); // Debugging line to check account initialization
    }

    async createAccount({ email, password, name }) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if (userAccount) {
                // Call another method
                return this.login({ email, password });
            } else {
                return userAccount;
            }
        } catch (error) {
            console.error('Error in createAccount:', error); // Log any errors
            throw error;
        }
    }

    async login({ email, password }) {
        try {
            console.log('Account before login:', this.account); // Debugging line to inspect `this.account`
            return await this.account.createEmailSession(email, password);
        } catch (error) {
            console.error('Error in login:', error); // Log any errors
            throw error;
        }
    }

    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            console.log('Appwrite service :: getCurrentUser :: error', error);
        }

        return null;
    }

    async logout() {
        try {
            await this.account.deleteSessions();
        } catch (error) {
            console.log('Appwrite service :: logout
