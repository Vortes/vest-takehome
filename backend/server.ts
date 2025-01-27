// only cause its just one file
declare var require: any

const express = require("express")
const cors = require("cors")
const app = express()
app.use(cors())
app.use(express.json())
const port = 3001

let emojiReactions = {}

app.post("/addReaction", (req, res) => {
	const { timestamp, emoji, position, userId } = req.body
	if (!emojiReactions[timestamp]) {
		emojiReactions[timestamp] = []
	}
	emojiReactions[timestamp].push({ userId, emoji, position })
	console.log(emojiReactions)
	res.status(200).send("Reaction added")
})

app.get("/getReactions", (req, res) => {
	res.json(emojiReactions)
})

app.listen(port, () => {
	console.log("Server is running")
})
