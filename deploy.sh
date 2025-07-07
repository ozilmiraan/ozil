#!/bin/bash

echo "Running React build..."
npm install
npm run build

echo "Deploying build to public_html..."
rm -rf ~/public_html/*
cp -r build/* ~/public_html/

echo "✅ Deployment Complete"
