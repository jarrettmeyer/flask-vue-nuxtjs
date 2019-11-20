from datetime import datetime
from flask import Flask, jsonify, render_template, send_file
from flask_cors import CORS


app = Flask(__name__, static_folder='dist', template_folder='dist')


@app.route('/')
def index():
    return app.send_static_file('index.html')


@app.route('/api/time')
def api_time():
    return jsonify({'time': datetime.now()})


@app.route('/<path:path>')
def catch_all(path):
    try:
        return app.send_static_file(path)
    except:
        return app.send_static_file('404.html')


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8080)
