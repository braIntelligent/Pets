import { MongoClient } from 'mongodb';
import 'dotenv/config';

class dbClient {
  constructor() {
    const queryString = `mongodb+srv://${process.env.USER_DB}:${process.env.PASSWORD_DB}@${process.env.SERVER_DB}/?retryWrites=true&w=majority&appName=Cluster0`;
    this.client = new MongoClient(queryString);
    this.conectDb();
  }

  async conectDb() {
    try {
      await this.client.connect();
      this.db = this.client.db('adopcion');
      console.log('Connected to db');
    } catch (e) {
      console.log('Error to connect db' + e);
    }
  }
}

export default new dbClient();
