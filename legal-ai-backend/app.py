from flask import Flask, request, jsonify# Assuming you have a model to get answers

app = Flask(__name__)

@app.route('/api/query', methods=['POST'])
def query():
    data = request.get_json()
    query = data.get('query')
    answer = "hi I am Shivank Tomar"
    return jsonify({"answer": answer})

if __name__ == '__main__':
    app.run(debug=True)
