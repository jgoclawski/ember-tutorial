FROM node:4.2

RUN npm install --global --loglevel="info" ember-cli@2.3.0
RUN npm install --global --loglevel="info" bower@1.6.5
RUN npm install --global --loglevel="info" phantomjs-prebuilt@2.1.4

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

RUN ember build -prod
RUN ember serve
