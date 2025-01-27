"use client"
import React, { useEffect, useRef, useState } from "react"
import { Button } from "@/app/components/ui/button"
import Confetti from "react-confetti-boom"

const ConfettiButton = () => {
	const [isLoading, setIsLoading] = useState(false)
	const [showConfetti, setShowConfetti] = useState(false)
	const chimeRef = useRef<HTMLAudioElement | null>(null)

	useEffect(() => {
		chimeRef.current = new Audio("/Ping Sound.wav")
	})

	const handleClick = async () => {
		setIsLoading(true)
		setShowConfetti(true)
		setIsLoading(true)
		try {
			await chimeRef.current?.play()
		} catch (err) {
			console.error("Failed to play sound:", err)
		}
		await new Promise((resolve) => setTimeout(resolve, 2500))
		setIsLoading(false)
		setShowConfetti(false)
	}

	return (
		<div>
			{showConfetti && (
				<Confetti
					x={0.83}
					y={0.8}
					spreadDeg={65}
					mode="boom"
					colors={["#4BC2A3"]}
					particleCount={80}
					shapeSize={21}
					launchSpeed={0.8}
				/>
			)}
			<Button
				onClick={handleClick}
				disabled={isLoading}
				className="uppercase my-auto w-full"
			>
				{isLoading ? "You just earned 200 tokens" : "Buy / Long"}
			</Button>
		</div>
	)
}

export default ConfettiButton
