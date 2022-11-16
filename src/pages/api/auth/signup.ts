import { hashPassword } from "../../../lib/auth";
import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../lib/prisma";
import * as yup from "yup";
import YupPassword from "yup-password";
YupPassword(yup);

const userSchema = yup.object().shape({
  username: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().password().min(6).max(24).required(),
});

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST") {
    return;
  }

  const data = req.body;

  try {
    await userSchema.validate(data.values, { abortEarly: false });
  } catch (e) {
    res.status(422).json({
      message: e.errors.join(", "),
    });
    return;
  }

  const { username, email, password } = data.values;
  const hashedPassword = await hashPassword(password);
  try {
    await prisma.user.create({
      data: {
        name: username,
        email,
      },
    });
    res.status(200).json({ message: "All Signed Up" });
  } catch (error) {
    res.status(405).json({ message: "Something Went Wrong. Please Try Again" });
  }
};
