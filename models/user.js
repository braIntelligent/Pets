import mongoose from 'mongoose';
import userSchema from '../schemas/user.js';

class userModel {
  async create(user) {
    return await userSchema.create(user);
  }

  async update(id, user) {
    return await userSchema.findOneAndUpdate({_id: new mongoose.Types.ObjectId(id)}, user, { new: true });
  }

  async getAll() {
    return await userSchema.find();
  }

  async getById(id) {
    return await userSchema.findById({_id: new mongoose.Types.ObjectId(id)});
  }

  async getOne(mail) {
    return await userSchema.findOne(mail);
  }

  async delete(id) {
    return await userSchema.findOneAndDelete({_id: new mongoose.Types.ObjectId(id)});
  }
}

export default new userModel();
