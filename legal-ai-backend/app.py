import requests
from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app, resources={r"/*": {
    "origins": "*",              # Allow all origins
    "methods": "*",              # Allow all methods
    "allow_headers": ["*"],      # Allow all headers
}})

@app.route('/api/chat', methods=['POST'])
def query():
    data = request.get_json()
    query = data.get('query')
    case_name = data.get('case_name')

    # Make a POST request to the external URL with the provided data
    external_url = 'https://ee9c-35-231-248-202.ngrok-free.app/api/chat'  # Replace with your actual URL
    payload = {
        'query': query,
        'case_name': case_name
    }
    
    try:
        external_response = requests.post(external_url, json=payload)
        external_response.raise_for_status()  # Raise an error if the request failed
        external_data = external_response.json()
        
        # Process the response from the external call if necessary
        response = {
            "response": external_data.get("response", "No result returned")  # Customize based on your external API's response structure
        }
    except requests.exceptions.RequestException as e:
        response = {
            "response": f"Failed to fetch data from external API: {str(e)}"
        }

    return jsonify(response)

if __name__ == '__main__':
    app.run(port=5000, debug=True)
