# Message-Board

## Overview

A simple message board that allows users to post and view messages.

## Built With

- Express
- Node.js
- Pug
- JavaScript
- CSS
- SQL

## Installation

To run this project locally:

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/message-board.git
   cd message-board
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up enviroment variables by creating a `.env` file in the root of the directory and add the following:

   ```env
   DATABASE_URL=your_postgresql_database
   ```

4. Set up the database by adding tables using the following:

   ```bash
   node db/setupDB.js
   ```

5. Start the server:

   ```bash
   npm run start
   ```

6. Open your browser and navigate to `http://localhost:3000`

## What I Learned

This message board project taught me a lot of useful things like Pug and Express as well as using a hosting provider. Until I made this project, I had never experimented with hosting providers and always just used GitHub Pages. While I like GitHub Pages for static sites, it is not suitable for dynamic sites. For this reason, I decided to use Fly.io, which seemed like a reasonably good PaaS provider. Using Express made working with Node.js easier, and I now see why Express is considered a good option.

## Conclusion

Making interactive web apps is fun and an enjoyable process, especially for this project. This was a great learning experience and a project I will be taking notes from. It's a simple message board, but I enjoyed the process of making it.
