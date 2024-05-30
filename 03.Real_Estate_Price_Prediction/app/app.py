import logging
from flask import Flask, request, jsonify
import util

app = Flask(__name__)

# Configure logging
logging.basicConfig(level=logging.INFO)  # Set the logging level to INFO

@app.route('/get_location_names', methods=['GET'])
def get_location_names():
    try:
        locations = util.get_location_names()
        response = jsonify({'locations': locations})
        response.headers.add('Access-Control-Allow-Origin', '*')
        return response
    except Exception as e:
        logging.exception("An error occurred while getting location names")
        return jsonify({'error': 'An error occurred while getting location names'}), 500

@app.route('/predict_home_price', methods=['POST','GET'])
def predict_home_price():
    try:
        total_sqft = float(request.form['total_sqft'])
        location = request.form['location']
        bhk = int(request.form['bhk'])
        bath = int(request.form['bath'])

        estimated_price = util.get_estimated_price(location, total_sqft, bhk, bath)
        response = jsonify({'estimated_price': estimated_price})
        response.headers.add('Access-Control-Allow-Origin', '*')
        return response
    except Exception as e:
        logging.exception("An error occurred while predicting home price")
        return jsonify({'error': 'An error occurred while predicting home price'}), 500

if __name__ == "__main__":
    print("Starting Python Flask Server For Home Price Prediction...")
    util.load_saved_artifacts()
    app.run()
