import json
from flask import Flask, jsonify
import random

app = Flask(__name__)


@app.route("/", methods=["GET"])
def get_deck():
    with open("flashCardData.json", "r") as file:
        data = json.load(file)
    return data  # Return deck as JSON


if __name__ == "__main__":
    app.run(debug=True)
