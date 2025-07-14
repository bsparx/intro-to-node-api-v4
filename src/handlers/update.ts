import prisma from "../db.js"

export const getUpdate = async (req, res) => {
    console.log(req.body.id)
    const updates = await prisma.update.findMany({
        where: {
           productid:req.params.id,
           product:{
            userId:req.user.id
           }
        },
    })

    res.json({ data: updates })
}


