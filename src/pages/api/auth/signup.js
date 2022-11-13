import { hashPassword } from "../../../lib/auth";
import { connectToDatabase } from "../../../lib/db";
import * as yup from "yup";
import YupPassword from "yup-password";
YupPassword(yup);

const userSchema = yup.object().shape({
  username: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().password().min(6).max(24).required(),
});

async function handler(req, res) {
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

  const client = await connectToDatabase();

  const db = client.db();

  const existingUser = await db
    .collection("aobusers")
    .findOne({ email: email });

  if (existingUser) {
    res.status(422).json({ message: "User exists already!" });
    client.close();
    return;
  }

  const hashedPassword = await hashPassword(password);

  await db.collection("aobusers").insertOne({
    username: username,
    email: email,
    password: hashedPassword,
  });

  res.status(201).json({ message: "Created user!" });
  client.close();
}

export default handler;
