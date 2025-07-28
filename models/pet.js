import mongoose from 'mongoose';
import petSchema from '../schemas/pet.js';

class petModel {
  async create(pet) {
    return await petSchema.create(pet);
  }

  async update(id, pet) {
    return await petSchema.findOneAndUpdate({_id: new mongoose.Types.ObjectId(id)}, pet, { new: true });
  }

  async getAll() {
    return await petSchema.find();
  }

  async getOne(id) {
    return await petSchema.findById({_id: new mongoose.Types.ObjectId(id)});
  }

  async delete(id) {
    return await petSchema.findOneAndDelete({_id: new mongoose.Types.ObjectId(id)});
  }
}

export default new petModel();
