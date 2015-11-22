FROM node:4.2

RUN npm install --global --loglevel="info" ember-cli@1.13.13
RUN npm install --global --loglevel="info" bower@1.6.5
RUN npm install --global --loglevel="info" phantomjs@1.9.18

RUN git clone https://github.com/facebook/watchman.git && \
	cd watchman && \
	git checkout v4.1.0 && \
	./autogen.sh && \
	./configure --without-python && \
	make && \
	make install && \
	cd .. && \
	rm -r watchman

WORKDIR /app
COPY package.json package.json
RUN npm install --loglevel="info"
COPY bower.json bower.json
RUN bower install --allow-root

COPY . /app

EXPOSE 4200 49152
CMD ["ember", "serve", "--port=4200", "--live-reload-port=49152"]
