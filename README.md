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

This application presents lists of classical music, grouped by music examination diploma repertoire. It allows candidates to browse, select and organise a program of music for their a particular exam.


## Tailwind installation
https://tailwindcss.com/docs/guides/create-react-app
Use node v12.18.3

## Batch updates via aws cli
Can create 25 at a time using `batch-write-item` command
`aws dynamodb batch-write-item --request-items file://item.json`
`item.json` contents generated from spreadsheet https://docs.google.com/spreadsheets/d/1lT85rLy66XauULM7sGclTFK6u8d481tq2dZL-GJ4AYY/edit#gid=1301683150
DiplomaID is hardcoded

TO DO / FIGURE OUT:
How to create spotify / admin items and link to the piece ID (unless we make the key the title and the composer and link it that way)
