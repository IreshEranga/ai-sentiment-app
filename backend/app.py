from flask import Flask, request, jsonify
from flask_cors import CORS
from model.sentiment_model import analyze_sentiment
from dotenv import load_dotenv
import os

load_dotenv()

app = Flask(__name__)
CORS(app)

@app.route("/api/sentiment", methods=["POST"])
def sentiment():
    data = request.get_json()
    text = data.get("text", "")
    if not text:
        return jsonify({"error": "No text provided"}), 400
    result = analyze_sentiment(text)
    return jsonify({"sentiment": result})

if __name__ == "__main__":
    app.run(debug=True)
