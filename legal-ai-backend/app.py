import requests
from flask import Flask, request, jsonify
from flask_cors import CORS
from deep_translator import GoogleTranslator

def translate(to_translate,lang):
    if lang is None:  
        lang="english"
    else:
        lang=lang.lower()
    translation = GoogleTranslator(source="auto",target=lang).translate(text=to_translate)
    return translation


app = Flask(__name__)
CORS(app, resources={r"/*": {
    "origins": "*",              
    "methods": "*",              
    "allow_headers": ["*"],      
}})

@app.route('/api/chat', methods=['POST'])
def query():
    data = request.get_json()
    query = data.get('query')
    case_name = data.get('case_name')
    transformed_case = translate(case_name,"english")
    transformed_query=translate(query,"english")
    lang = data.get('lang')

    external_url = 'http://e0a4-34-83-90-199.ngrok-free.app/api/chat'  
    payload = {
        'query': transformed_query,
        'case_name': transformed_case
    }
    
    try:
        external_response = requests.post(external_url, json=payload)
        external_response.raise_for_status()  
        external_data = external_response.json()
  
        response = {
            "response": translate(external_data.get("response", "No result returned"),lang)  # Customize based on your external API's response structure
        }
    except requests.exceptions.RequestException as e:
        outpt = f"Failed to fetch data from external API: {str(e)}"
        response = {
            "response": translate(outpt,lang)
        }

    return jsonify(response)

if __name__ == '__main__':
    app.run(port=5000, debug=True)
