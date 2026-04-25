import os
import requests

api_key = os.environ.get("DEEPSEEK_API_KEY")


def openai():
    response = requests.post(
        "https://api.deepseek.com/v1/chat/completions",
        headers={
            "Authorization": f"Bearer {api_key}",
            "Content-Type": "application/json"
        },
        json={
            "model": "deepseek-chat",
            "messages": [
                {"role": "system", "content": "你是一位专业的 Python 后端工程师，回答问题时简洁明了。"},
                {"role": "user", "content": "用一句话解释什么是大语言模型"}
            ]
        }
    )

    data = response.json()
    print(data["choices"][0]["message"]["content"])


def anthropic():
    response = requests.post(
        "https://api.deepseek.com/anthropic/v1/messages",
        headers={
            "x-api-key": os.environ.get("ANTHROPIC_API_KEY"),
            "anthropic-version": "2023-06-01",
            "content-type": "application/json"
        },
        json={
            "model": "deepseek-v4-pro",
            "max_tokens": 1024,
            "system": "You are a helpful assistant.",
            "messages": [
                {"role": "user", "content": "用一句话解释什么是大语言模型"}
            ]
        }
    )

    data = response.json()
    # content 是列表，需找到 type="text" 的元素
    print(data.content)

# openai()
anthropic()