install:
	npm ci

gendiff:
	node bin/gendiff.js

lint:
	npx eslint .

test:
	npm test

test-watch:
	npx jest --watchAll

test-coverage:
	npm test -- --coverage --coverageProvider=v8

.PHONY: test