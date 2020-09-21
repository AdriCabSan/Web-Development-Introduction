from flask import Flask
from flask import Flask, flash, redirect, render_template, request, session, abort
import os
from sqlalchemy.orm import sessionmaker
from sqlalchemy import create_engine,func
import datetime
from sqlalchemy import or_

app = Flask(__name__)

@app.route("/index")
def index():
    if not session.get('logged_in'):
        return render_template('login.html')
    else:
        return render_template('index.html')

@app.route('/', methods=['POST','GET'])
def home():
    if not session.get('logged_in'):
        return render_template('login.html')
    else:
        return index()

if __name__ == "__main__":
    app.run(host='0.0.0.0')