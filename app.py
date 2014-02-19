from flask import Flask, render_template, send_from_directory
import re

app = Flask(__name__);

@app.route('/<path:link>')
def get_link(link):
	return render_template('index.html', link=link)


@app.route('/img/<path:link>')
def show_image(link):
	return send_from_directory('shots', link)

from gevent.wsgi import WSGIServer
http_server = WSGIServer(('127.0.0.1', 8500), app)
http_server.serve_forever()