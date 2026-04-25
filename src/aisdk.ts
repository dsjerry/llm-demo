import { generateText } from "ai"
import { deepseek } from "@ai-sdk/deepseek"

async function deepseekCall() {
  try {
    const { text } = await generateText({
      model: deepseek("deepseek-chat"),
      prompt: "你是酱板鸭吗？",
    })

    console.log(text)
  } catch (error) {
    console.error("deepseek", error)
  }
}

let fn: "ds" | "openai" | "claude" = "ds"

if (fn === "ds") {
  deepseekCall()
} else if (fn === "openai") {
} else {
}
