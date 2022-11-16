//const users = await prisma.user.findMany()
export default async function handler(req, res) {
  const users = await prisma.user.findMany();

  return res.send(users);
}
