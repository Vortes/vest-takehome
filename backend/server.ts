// only cause its just one file
declare var require: any

const express = require("express")
const cors = require("cors")
const app = express()
app.use(cors())
app.use(express.json())
const port = 3001

interface EmojiReaction {
	timestamp: number
	userId: string
	emoji: string
	position: number
}

let emojiReactions: Record<string, EmojiReaction[]> = {}

app.post("/addReaction", (req, res) => {
	const { timestamp, emoji, position, userId } = req.body
	if (!emojiReactions[timestamp]) {
		emojiReactions[timestamp] = []
	}
	emojiReactions[timestamp].push({ userId, emoji, position, timestamp })
	console.log(emojiReactions)
	res.status(200).send("Reaction added")
})

app.get("/getReactions", (req, res) => {
	const formattedResponse = Object.values(emojiReactions).flat()
	res.json(formattedResponse)
})

app.listen(port, () => {
	console.log("Server is running")
})
