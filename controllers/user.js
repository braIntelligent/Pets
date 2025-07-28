import { genToken } from '../helpers/authentication.js';
import userModel from '../models/user.js';
import bcrypt from 'bcrypt';

class userController {
  constructor() {}

  async register(req, res) {
    try {
      const { mail, name, number, password } = req.body;
      const existUser = await userModel.getOne({ mail });
      console.log(existUser);

      if (existUser) {
        return res.status(400).json({ error: 'User exists.' });
      }

      const encryptedPassword = await bcrypt.hash(password, 10);
      const userCreated = await userModel.create({
        mail,
        name,
        number,
        password: encryptedPassword,
      });
      res.status(201).json(userCreated);
    } catch (e) {
      res.status(500).send(e);
      console.log(`Error to register ${e}.`);
    }
  }

  async login(req, res) {
    try {
      const { mail, password } = req.body;
      const isExistsUser = await userModel.getOne({ mail });
      if (!isExistsUser) {
        return await res.status(500).json({Error: 'User not exists.'});
      }
      const isPasswordMatch = await bcrypt.compare(password, isExistsUser.password);
      if (!isPasswordMatch) {
        return await res.status(401).json({Error: 'Authentication denied.'});
      }

      const token = genToken(mail);

      return await res.status(202).json({Pass: 'Authentication passed.', token});

    } catch (e) {
      res.status(500).send(e);
      console.log(`Error to register ${e}.`);
    }
  }

  async create(req, res) {
    try {
      const data = await userModel.create(req.body);
      res.status(201).json(data);
    } catch (e) {
      res.status(500).send(e);
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      const data = await userModel.update(id, req.body);
      res.status(200).json(data);
    } catch (e) {
      res.status(500).send(e);
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      const data = await userModel.delete(id);
      res.status(206).json(data);
    } catch (e) {
      res.status(500).send(e);
    }
  }

  async getAll(req, res) {
    try {
      const data = await userModel.getAll();
      res.status(200).json(data);
    } catch (e) {
      res.status(500).send(e);
    }
  }

  async getOne(req, res) {
    try {
      const { id } = req.params;
      const data = await userModel.getOne(id);
      res.status(200).json(data);
    } catch (e) {
      res.status(500).send(e);
    }
  }
}

export default new userController();
