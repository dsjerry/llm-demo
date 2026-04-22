import dotenv from "dotenv"
import OpenAI from "openai"

dotenv.config()

async function openaiCall() {
  try {
    const client = new OpenAI({
      apiKey: process.env.DEEPSEEK_API_KEY,
      baseURL: "https://api.deepseek.com/v1",
    })

    const chat = await client.chat.completions.create({
      model: "deepseek-chat",
      messages: [
        {
          role: "system",
          content: "你是一位专业的 Python 后端工程师，回答问题时简洁明了。",
        },
        { role: "user", content: "用一句话解释什么是大语言模型" },
      ],
    })

    console.log((chat.choices[0] as any).message.content)
  } catch (error) {
    console.error("package openai", error)
  }
}

openaiCall()
