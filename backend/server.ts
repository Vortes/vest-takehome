const express = require("express")
const app = express()
const port = 3001

let emojiReactions = {
	"2024-06-24T00:00:00Z": [
		{ userId: "user1", emoji: "🚀" },
		{ userId: "user2", emoji: "😎" },
	],
	"2024-06-24T01:00:00Z": [
		{ userId: "user3", emoji: "😡" },
		{ userId: "user4", emoji: "😭" },
	],
}

app.post("/addReaction", (req, res) => {
	const { timestamp, userId, emoji } = req.body
	if (!emojiReactions[timestamp]) {
		emojiReactions[timestamp] = []
	}
	emojiReactions[timestamp].push({ userId, emoji })
	res.status(200).send("Reaction added")
})

app.get("/getReactions", (req, res) => {
	res.json(emojiReactions)
})

app.listen(port, () => {
	console.log("Server is running")
})
