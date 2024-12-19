from flask import Flask, request, jsonify, render_template

app = Flask(__name__)


# Endpoint pour enregistrer les dates
@app.route("/save_date", methods=["POST"])
def save_date():
    data = request.json
    date_of_birth = data.get("date_of_birth")
    timestamp = data.get("timestamp")

    # Enregistrez les données dans un fichier ou une base de données
    with open("birth_dates.log", "a") as file:
        file.write(f"{date_of_birth}, {timestamp}\n")

    return jsonify({"message": "Date enregistrée avec succès"}), 200


@app.route('/')
def home():
    return render_template('index.html')


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
