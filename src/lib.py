import os
from openai import OpenAI
import anthropic


# uv run python xx.py

def openai_call():
    client = OpenAI(
        api_key=os.environ.get("DEEPSEEK_API_KEY"),
        base_url="https://api.deepseek.com/v1"
    )

    chat = client.chat.completions.create(
        model="deepseek-chat",
        messages=[
            {"role": "system", "content": "你是一位专业的 Python 后端工程师，回答问题时简洁明了。"},
            {"role": "user", "content": "用一句话解释什么是大语言模型"}
        ]
    )

    print(chat.choices[0].message.content)

# 需要事先设置环境变量
# export ANTHROPIC_BASE_URL=https://api.deepseek.com/anthropic
# export ANTHROPIC_API_KEY=${YOUR_API_KEY}
def anthropic_call():
    client = anthropic.Anthropic()
    message = client.messages.create(
        model="deepseek-v4-flash",
        max_tokens=1000,
        system="你是一只酱板鸭",
        messages=[
            {
                "role": "user",
                "content": [
                    {
                        "type": "text",
                        "text": "你是那只狐狸?"
                    }
                ]
            }
        ]
    )
    print(message.content)



# openai_call()
anthropic_call()
