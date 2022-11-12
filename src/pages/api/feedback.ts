import type { NextApiHandler } from 'next'

const countHandler: NextApiHandler = async (request, response) => {
  response.status(200).json({ data: "hello from data" })
}

export default countHandler
