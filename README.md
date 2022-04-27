<div align="center">
  <img src="https://user-images.githubusercontent.com/34040658/165447411-92f787dd-051b-43d6-98b5-55fbc885955f.png" />
  <h4> A template for Express and TypeScript based Services. </h4>
  
  <a href="https://github.com/Fableverse/api-template/releases"
    ><img
      src="https://img.shields.io/github/workflow/status/fableverse/api-template/Run Jest?color=white&label=build&style=flat-square"
      alt="GitHub Latest Version"
  /></a>
  <a href="https://github.com/Fableverse/api-template/releases"
    ><img
      src="https://img.shields.io/github/v/tag/fableverse/api-template?color=white&label=version&style=flat-square"
      alt="GitHub Latest Version"
  /></a>
  <a href=""
    ><img
      src="https://img.shields.io/github/commit-activity/w/fableverse/api-template?color=white&label=commit activity&style=flat-square"
      alt="GitHub Latest Version"
  /></a>
  <br />
  <a href="https://discord.gg/5a9bSRyYyF"
    ><img
      src="https://img.shields.io/discord/966144993163091988?label=discord&color=blue&style=flat-square"
      alt="Chat on Discord"
  /></a>
  <a href="https://twitter.com/Fableverse"
    ><img
      src="https://img.shields.io/badge/twitter-@fableverse-1DA1F3?color=blue&style=flat-square"
      alt="Follow @Fableverse on Twitter"
  /></a>
</div>

## 📖 Table of Contents
- [Features](#-features)
- [Packages](#-packages)
- [Quick Setup Guide](#-quick-setup-guide)
- [Projects using this Template](#-projects-using-this-template)
- [Reporting a Bug or Issue](#-reporting-a-bug-or-issue)
- [Contributing](#-contributing)
- [License](#-license)

## 💡 Features
The goal of this template was to make it easier to build and prototype services, without needing to standup the structure and foundation, which tends to be the same accross many projects. So, this is eliminating some overhead and setting a standard for services that are built using this template. Here is a list of things included.
- GitHub actions that run [Jest](https://jestjs.io/) tests on every commit
- [Husky](https://typicode.github.io/husky/#/) pre-commits and linting, using conventional commits
- An example endpoint, that shows off the flow and structure, and includes use of [Mongoose](https://mongoosejs.com/)
- GitHub PR & issue templates all built into the repository
- [Prettier](https://prettier.io/) all configured and easily interchangable

### What is Husky and why use it?
Whenever you commit or push code up, we want to make sure we follow a standard and that it's **enforced**. Husky provides us that ability and by giving it a standard (in this case, conventional commits), it won't let you commit and push up code unless you follow that standard. 

Check out the [Conventional Commit Standard](https://www.conventionalcommits.org/en/v1.0.0/)

### What is Mongoose and why use it?
Mongoose provides us an easy way to interact with MongoDB with express apps. It provides a lot of features out of the box. It's pretty standard with Express Apps + MongoDB to use mongoose to interact with the database.

Check out the [Mongoose Documentation](https://mongoosejs.com/docs/index.html)

## 📦 Packages
Jest [ [Website]() | [Docs]() ]: Unit testing 

Prettier [ [Website]() | [Docs]() ]:  Cleaning up code and standardizing it

Mongoose [ [Website]() | [Docs]() ]:  Interaction with MongoDB

Dotenv [ [Website]() | [Docs]() ]:  Access environmental variables

Express [ [Website]() | [Docs]() ]:  A flexible Node framework

Husky [ [Website]() | [Docs]() ]:  Helps with code standardization

Body-Parser [ [Website]() | [Docs]() ]:  Body parsing middleware

Morgan [ [Website]() | [Docs]() ]:  Endpoint logging

Cors [ [Website]() | [Docs]() ]:  Cross-origin resource sharing

## 🚀 Quick Setup Guide
### Prerequisites
- [NodeJS](https://nodejs.org/en/) (preferably the latest), to run the project and install dependencies
- An IDE, like [VSCode](https://code.visualstudio.com/), for editing code
- [Git](https://gitforwindows.org/), for cloning and interacting from GitHub
- (Optional) A MongoDB database, either locally or in the cloud. For local, [MongoDB Compass](https://www.mongodb.com/products/compass) works great.

### Setup
Clone the project from Github, locally using 

```
git clone https://github.com/Fableverse/api-template.git
```

Run NPM install from your terminal
```
npm i
```

If you are planning to use mongodb, you will need to create a `.env` file at the root of the codebase, with the following:
```env
# Set to production when deploying to production
NODE_ENV=development

# Node.js server configuration
PORT=8000

# MongoDB configuration
MONGO_CONNECTION_STRING=mongodb://localhost:27017/testing
```
The mongodb connection will have to be changed depending on where you have it hosted, let it be locally or in the cloud. Right now, this is pointed to a local mongo database.

To run the project, run:
```
npm start
```

To run the jest tests in the project, run:
```
npm test
```

## 🏠 Projects using this template
None at the moment.

## 📞 Reporting a Bug or Issue
To be determined.

## 🤝 Contributing
Reference contributing guide, once complete

## 📝 License
Copyright © 2022 Fableverse

This project is [MIT](https://github.com/Fableverse/api-template/blob/main/LICENSE) licensed.
