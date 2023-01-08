
# FROM ubuntu:16.04
# RUN apt-get update
# RUN apt-get install -y python3.8
# ENTRYPOINT ["python3"]
FROM python:3.10.7


WORKDIR /app

COPY ./requirements.txt .
# RUN python -c "import nltk; nltk.download('punkt')"

# COPY ./tokenizers Appdata/Roaming/nltk_data/tokenizers

# COPY ./tokenizers /root/nltk_data/tokenizers
RUN pip install --no-cache-dir -r requirements.txt
RUN python -m nltk.downloader punkt

COPY . .

EXPOSE 8000

CMD ["uvicorn", "app.app:app", "--host" ,"0.0.0.0" ,"--port","8000"]
