import PyPDF2, pyttsx3

path=open("D:\\books\\ML Books\\introduction of data mining.pdf","rb")

reader=PyPDF2.PdfReader(path)

speak=pyttsx3.init()

for page in range(len(reader.pages)):
    text=reader.pages[page].extract_text()
    speak.say(text)
    speak.runAndWait()
