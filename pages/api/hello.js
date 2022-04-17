// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
export default function handler(req, res) {
  
  const body = req.body

  if (!body.first || !body.last) {
    // Sends a HTTP bad request error code
    return res.status(400).json({ data: 'First or last name not found' })
  }

  // console.log(data)

  res.status(200).json({ data: `${body.first} ${body.last}`, firstName : `${body.first}`, lastName : `${body.last}` })

}
