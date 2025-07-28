import 'dotenv/config';
import jsonwebtoken from 'jsonwebtoken';

export const genToken = (mail) => {
  return jsonwebtoken.sign({ mail }, process.env.JSON_TOKEN_SECRET, {
    expiresIn: '5h',
  });
};

export const verifyToken = (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');

  if (!token) {
    return res.status(401).json({ Error: 'Token is required.' });
  }

  try {
    const dataToken = jsonwebtoken.verify(token, process.env.JSON_TOKEN_SECRET);
    next()
  } catch (e) {
    res.status(401).json({ Error: 'Token is not valid.' });
  }
};
