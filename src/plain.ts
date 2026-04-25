import dotenv from "dotenv"

dotenv.config()

async function openaiCall() {
  try {
    let dots = 0
    const timer = setInterval(() => {
      process.stdout.write("\r调用中" + ".".repeat(++dots % 4) + "   ")
    }, 300)

    const response = await fetch(
      "https://api.deepseek.com/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.DEEPSEEK_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "deepseek-chat",
          messages: [
            {
              role: "system",
              content: "你是一只酱板鸭",
            },
            { role: "user", content: "你用一直酱板鸭在雪山中救了一只狐狸" },
          ],
        }),
      },
    )

    const data = (await response.json()) as any

    clearInterval(timer)
    process.stdout.write("\r" + " ".repeat(20) + "\r")
    console.log(data.choices[0].message.content)
  } catch (error) {
    console.log(error)
  }
}

async function anthropicCall() {
  try {
    const response = await fetch(
      "https://api.deepseek.com/anthropic/v1/messages",
      {
        method: "POST",
        headers: {
          "x-api-key": process.env.ANTHROPIC_API_KEY,
          "anthropic-version": "2023-06-01",
          "content-type": "application/json",
        },
        body: JSON.stringify({
          model: "deepseek-v4-flash",
          max_tokens: 1024,
          system: "You are a helpful assistant.",
          messages: [{ role: "user", content: "用一句话解释什么是大语言模型" }],
        }),
      },
    )

    const data = (await response.json()) as any
    console.log(data.content)
  } catch (error) {
    console.log(error)
  }
}

// openaiCall()

anthropicCall()
