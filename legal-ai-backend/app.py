from flask import Flask, request, jsonify# Assuming you have a model to get answers

app = Flask(__name__)

@app.route('http://7fb9-34-124-224-225.ngrok-free.app/api/chat', methods=['POST'])
def query():
    data = request.get_json()
    query = data.get('query')
    answer = "hi I am Shivank Tomar"
    return jsonify({"answer": answer})

if __name__ == '__main__':
    app.run(debug=True)
