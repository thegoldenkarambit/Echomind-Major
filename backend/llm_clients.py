import os
from groq import Groq
from dotenv import load_dotenv

load_dotenv()

client = Groq(api_key=os.getenv("GROQ_API_KEY"))

MODELS = [
    "llama-3.1-8b-instant",
    "llama-3.3-70b-versatile",
    "qwen/qwen3-32b",
    "openai/gpt-oss-20b",
    "moonshotai/kimi-k2-instruct"
]

def query_model(model, prompt):

    try:

        response = client.chat.completions.create(
            model=model,
            messages=[
                {
                    "role": "user",
                    "content": prompt
                }
            ]
        )

        return response.choices[0].message.content

    except Exception as e:

        return str(e)


def query_all_models(prompt):

    results = {}

    for model in MODELS:

        results[model] = query_model(model, prompt)

    return results