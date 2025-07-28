import 'dotenv/config';
import mongoose from 'mongoose';

class dbClient {
  constructor() {
    this.connect();
  }

  async connect() {
    try {
      const queryString = `mongodb+srv://${process.env.USER_DB}:${process.env.PASSWORD_DB}@${process.env.SERVER_DB}/adoption?retryWrites=true&w=majority`;
      await mongoose.connect(queryString);
      console.log('Conected to the database.');
      
    } catch (e) {
      console.log('Error connection to the dabatase' + e);
    }
  }

  async disconnect() {
    try {
      await mongoose.disconnect();
      console.log('disconect to the database. ');
      
    } catch (e) {
      console.log(e);
      console.log('Error disconnecting to dabatase' + e);
    }
  }
}

export default new dbClient();
