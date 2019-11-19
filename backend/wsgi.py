from flask import Flask, render_template, send_file
from flask_cors import CORS

app = Flask(__name__, static_folder='dist', template_folder='dist')


@app.route('/')
def index():
    return app.send_static_file('index.html')


@app.route('/favicon.ico')
def favicon():
    return app.send_static_file('favicon.ico')


@app.route('/_nuxt/<string:filename>')
def nuxt_js_files(filename):
    print('filename: {0}'.format(filename))
    return app.send_static_file('_nuxt/{0}'.format(filename))


if __name__ == '__main__':
    app.run()
