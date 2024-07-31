# 03 Tutorial - Pagination

A full-stack tutorial about pagination.

It's recommended to have watched/completed the following tutorials:

- React State Tutorial
- React State Exercise
- React Effect Tutorial

The React app (`ramen-app`) part of this project is the completed version of the React app from the React Ramen State Exercise. We'll be adding pagination to that completed React app by adding extra pagination controls and an Express.js API endpoint to handle paged requests. It's highly recommended you complete that Ramen State exercise before working through this tutorial.

## Getting Started

Note, the `main` branch works as the starter template you can use to follow along with the tutorial. The `solution` branch has an example of the completed tutorial.

Start the database:

```shell
docker run -d \
  --name ramen-reviews-db \
  -p 5432:5432 \
  -e POSTGRES_PASSWORD=password \
  -v ramen-reviews-db:/var/lib/postgresql/data \
  -v "$(pwd)/ramen-db/sql:/docker-entrypoint-initdb.d" \
  -d \
  postgres
```

Start the API server and React development server

```zsh
# install deps for both server and app
npm install

# start the web server
npm run server

# open another terminal to run start the app
npm run app

```

## Tutorial Videos

- [What is Pagination](https://www.loom.com/share/86ddfe174d43474dbd1267dcde01a2c5) (7 minutes)
- [Code Walkthrough](https://www.loom.com/share/260accaf8a65426788d7bcc04d1f4a26) (5 minutes)
- [Pagination Theory](https://www.loom.com/share/738089fe9f5c4ff2823b63f384ed36ba) (9 minutes)
- [Pagination API Endpoint](https://www.loom.com/share/083533c251f4490da664ec287a55dc62) (18 minutes)
- [Fetch Reviews from API](https://www.loom.com/share/8ff6ab6f5b6b42ac9121055310a3c62d) (12 minutes)
- [Select Items Per Page](https://www.loom.com/share/c74e3829f12c4d79868fd193c35257c7) (6 minutes)
- [Page State and Controls](https://www.loom.com/share/48415f6d18234706960a3bbba7cc774f) (10 minutes)
- [Fix Paging Endlessly](https://www.loom.com/share/bff5ac38ddfc413bbaebdddd2fd7a573) (12 minutes)
- [Conditionally Disable Page Buttons](https://www.loom.com/share/fc7989fe9fea402d94c53fc22278fc14) (5 minutes)
