import os
from openai import OpenAI


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

openai_call()
