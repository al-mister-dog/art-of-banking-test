//const users = await prisma.user.findMany()
export default async function handler(req, res) {
  const users = await prisma.user.findMany();
  console.log(users)
  return res.send(users)
}
