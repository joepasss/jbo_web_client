#!/bin/bash

export NODE_OPTIONS="--import ./register-hooks.js"
npm run webpack_build
