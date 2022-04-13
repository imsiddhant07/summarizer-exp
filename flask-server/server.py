from flask import Flask, request, jsonify, render_template
import json

app = Flask(__name__)

@app.route('/members')
def members():
    return {"members": ["John", "Mary", "Peter"]}

@app.route('/sections')
def sections():
    sections = []
    
    
    with open('sections.json') as f:
        js = json.load(f)
    

    #js = json.load(open('sections.json', encoding='utf-8'))
    return js
    

'''
@app.route('/uploader', methods = ['GET', 'POST'])
def upload_file():
	uploaded_file = request.files['file']
	if uploaded_file.filename != '':
		uploaded_file.save(uploaded_file.filename)
	return "DONE"

'''	
		
if __name__ == '__main__':
   app.run(debug = True)