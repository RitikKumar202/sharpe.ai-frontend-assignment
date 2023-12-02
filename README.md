# Sharpe.AI Frontend Assignment
This app is made as an assignment for recruitment process at Sharpe-AI.

#### The assignment statement is as follows:
- Design a web application with at least three pages - Home, Transaction, and Data. Use React Router to create seamless navigation between these pages.

- #### Transaction Page (Form Input Validation checks):
  On Transaction page, create a form that asks for the user's wallet address and amount. Implement validation for the wallet address:
  - Wallet Address: Should not be empty and must follow the standard Ethereum address format (0x...).
  - Amount: Ensure the amount entered is a number and is within a specified range (e.g., 0 - 10,000)

- #### Data Page:
  - Fetch data from the open-source API - `https://jsonplaceholder.typicode.com/posts`. This API returns a JSON array of posts, each containing a user ID, post ID, title, and body.
  - Once you have fetched the data, filter the posts to only include those with a user ID of 1.
   - Visualize the filtered data in a table format, where each row represents a post and each column represents a different attribute of the post (ID, title, body).
   - Please also include a pie chart that represents the number of posts written by user ID 1 out of total posts
  


## Run Locally

Clone the project

```bash
https://github.com/RitikKumar202/sharpe.ai-frontend-assignment.git
```

Install dependencies

```bash
npm install
```

Start the server

```bash
npm start
```

