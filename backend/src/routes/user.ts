import { Router } from 'express';
import User from '../models/userschema';

const router = Router();

type User = {
  email: string;
  username: string;
};

/*
 * email 로 user 조회
 */
router.get('/user/:email', async (req, res) => {
  const email = req.params.email;
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(404).json({});
  }

  return res.status(200).json(user);
});

/*
 * user 등록
 */
router.post('/user', async (req, res) => {
  const reqBody = req.body as User;

  const user = new User({
    email: reqBody.email,
    username: reqBody.username,
  });

  try {
    await user.save();
  } catch (error) {
    console.log(error);
    return res.status(500).json({});
  }

  return res.status(200).json(user);
});

export default router;
