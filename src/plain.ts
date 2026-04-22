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

openaiCall()
