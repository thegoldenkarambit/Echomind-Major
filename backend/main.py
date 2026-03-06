from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from llm_clients import query_all_models

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class PromptRequest(BaseModel):
    prompt: str


@app.get("/")
def root():
    return {"message": "EchoMind backend running"}


@app.post("/compare")
def compare(request: PromptRequest):

    responses = query_all_models(request.prompt)

    return {
        "responses": responses
    }