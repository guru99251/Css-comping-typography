from flask import Flask, send_from_directory, jsonify
import os

app = Flask(__name__)

@app.route('/')
def serve_index():
    return send_from_directory('.', 'index.html')

@app.route('/style.css')
def serve_css():
    return send_from_directory('.', 'style.css')

@app.route('/script.js')
def serve_js():
    return send_from_directory('.', 'script.js')

@app.route('/translations.json')
def serve_translations():
    return send_from_directory('.', 'translations.json')

@app.route('/web-fonts.json')
def serve_web_fonts():
    return send_from_directory('.', 'web-fonts.json', mimetype='application/json')

if __name__ == '__main__':
    port = int(os.environ.get("PORT", 3000))
    app.run(host='0.0.0.0', port=port)
