# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## AWS Amplify

This application was created based on this guide: 
https://aws.amazon.com/getting-started/hands-on/build-react-app-amplify-graphql/

It consists of: 
- Front end - React, Tailwind
- API - AWS DynamoDb backend, accessed via GraphQL and administered via the AWS Amplify Console / Admin UI
- Authentication - Implemented using AWS CLI libraries

## About
This site presents classical music repertoire, organised by music examination diploma and instrument. It allows candidates and music lovers to browse and select a program of music. Further information is provided, such as average playing duration, recommended recordings from YouTube and Spotify, suggested editons (free and paid sheet music) and user comments (to do).

https://tailwindcss.com/docs/guides/create-react-app
Use node v12.18.3

## Batch updates via aws cli
Can create 25 at a time using `batch-write-item` command
`aws dynamodb batch-write-item --request-items file://item.json`
`item.json` contents generated from spreadsheet https://docs.google.com/spreadsheets/d/1lT85rLy66XauULM7sGclTFK6u8d481tq2dZL-GJ4AYY/edit#gid=1301683150
DiplomaID is hardcoded

## AWS online interfaces
- Using tools provided by amplify eg. create data model  but it seems you can only do basic things.. so not sure what would happen if you edit the schema outside the admin tool
- To open Admin UI: `amplify console`, then select `Admin UI`
TO DO / FIGURE OUT:
- How to create spotify / admin items and link to the piece ID (unless we make the key the title and the composer and link it that way)
- Make the key / link between piece and diploma NOT diploma ID but exam and diploma combination.. that way dont have to hard code diploma ID