import json
import numpy as np
import nltk
import train as t
import random
ERROR_THRESHOLD = 0.1
# load our calculated weight values
weights_file = 'weights.json' 
with open(weights_file) as data_file: 
    weights = json.load(data_file) 
    W1 = np.asarray(weights['weight1']) 
    W2 = np.asarray(weights['weight2'])
    b1 = np.asarray(weights['bias1']) 
    b2 = np.asarray(weights['bias2'])
    all_words = weights['words']
    classes = weights['classes']
    
def clean_sentence(verification_data):
    line = verification_data
    # Remove whitespace from line and lower case iter
    line = line.strip().lower()
    # Removing word with @ sign as we dont need name tags of twitter
    line = " ".join(filter(lambda x:x[0]!='@', line.split()))
    # Remove punctuations and numbers from the line
    punct = line.maketrans("","",'.*%$^0123456789#!][\?&/)/(+-<>')
    result = line.translate(punct)
    # Tokenize the whole tweet sentence
    tokened_sentence = nltk.word_tokenize(result)
    # We take the tweet sentence from tokened sentence
    sentence = tokened_sentence[0:len(tokened_sentence)]
    return sentence    

def verify(sentence, show_details=False):
    bag=[0]*len(all_words)
    cleaned_sentence = clean_sentence(sentence)
    # This line returns the bag of words as 0 or 1 if words in sentence are found in all_words
    x = t.encode_sentence(all_words,cleaned_sentence,bag)
    x = np.array(x)
    x = x.reshape(x.shape[0],1)
    

    if show_details:
        print ("sentence:", sentence, "\n bow:", x)
    # input layer is our encoded sentence
    l0 = x
    # matrix multiplication of input and hidden layer
    l1 = t.relu(np.dot(W1,l0)+b1)
    # output layer
    l2 = t.softmax(np.dot(W2,l1)+b2)
    
    return l2



# def random_line(fname):
#     lines = open(fname).read().splitlines()
#     return random.choice(lines)

# def modify(mood):
#     if (mood[0][1] == "anger" or mood[0][1] == "sadness" or mood[0][1] == "fear" ) or (mood[0][1] =="joy" and mood[0][0]<=0.3 and mood[0][0]>=0.2):
#         l=random_line('lines.txt')
#         flag=True;
#     else :
#         l=random_line('lines1.txt')
#         flag=False;
#     for i in mood :
#         if i[1] == "sadness":
#             if i[0]<0.5:
#                 i[1]= "tired and disturbed"
#         elif i[1]=="joy":
#             if i[0] <0.5:
#                 i[0]="Mood Alright"
#         elif i[1] =="fear":
#             if i[0] <0.5:
#                 i[1]="anxiety"
#         elif i[1] =="anger":
#             if i[0] <0.5:
#                 i[1]="disturbed"
#     l:str 
#     # mood:list
#     flag:bool
#     print (mood)

def classify(sentence, show_details=False):
    results = verify(sentence, show_details)
    results = [[i,r] for i,r in enumerate(results) if r>ERROR_THRESHOLD ] 
    results.sort(key=lambda x: x[1], reverse=True) 
    print("Results :",results)
    # return_results =[[classes[r[0]],r[1]] for r in results]
    return_results=[]
    for r in results:
        return_results.append({classes[r[0]],r[1][0]})
    print ("%s \n classification: %s \n" % (sentence, return_results))
    # print(return_results.type())
    # modify(return_results)
    return return_results
classify("I failed again in a test today, i am really hopeless !!  ")
# classify("This depression will kill me someday. i am dying")
# classify("I am afraid terrorists might attack us")
classify("I am fine")
