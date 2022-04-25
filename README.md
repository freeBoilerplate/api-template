<div align="center">
  <img src="https://user-images.githubusercontent.com/34040658/165009852-2248edab-7b6e-42a7-b59a-2a503b2a62b5.png" />
  <h4> Our template for Express and TypeScript based Services. </h4>
  
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
- [Quick Setup Guide](#-quick-setup-guide)
- [Reporting a Bug or Issue](#-reporting-a-bug-or-issue)
- [Contributing](#-contributing)
- [License](#-license)

## 💡 Features
The goal of this template was to make it easier to build and prototype services, without needing to standup the structure and foundation, which tends to be the same accross many projects. So, this is eliminating some overhead and setting a standard for services that are built using this template. Here is a list of things included in this template.
- GitHub actions that run jest tests on every commit
- Husky pre-commits and linting, using conventional commits
- An example endpoint, that shows off the flow and structure, and includes mongoose
- GitHub PR & issue templates all built into the repository
- Prettier all configured and easily interchangable

## 🚀 Quick Setup Guide
### Prerequisites

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

## 📞 Reporting a Bug or Issue


## 🤝 Contributing


## 📝 License
Copyright © 2022 Fableverse

This project is [MIT](https://github.com/Fableverse/api-template/blob/main/LICENSE) licensed.
