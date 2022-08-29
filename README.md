# Introducing Collab - Realtime Code Collabration tool .

 Collab is Realtime code sync tool where users can collab to others developers to write code on a same time. Beside this, user can save written code snippets to the website by creating profile in the website.

# Overview video


## How it works

The workflow of application is describe by the following architecture diagram.






At first, Ideao communicated with the api for retrieving the idea and user data, posting them to the backend server, Searching idea and delete the idea according to the user.
### How the data is stored:
The collab's data is stored in JSON format based upon RediJSON. The overall mapping of data is configured by `Redis-Om` Node js package.

At first connection need to be established in redis cloud by:

```js
import { Client } from "redis-om";
const url = process.env.REDIS_HOST;
const client = new Client();
try {
  const res = await client.open(url);
  console.log("Connected to redis !");
} catch (error) {
  console.log("failed connecting redis", error);
}
export default client;
```
#### Schema of Code

```js
const codeSchema = new Schema(
Code,
  {
    code_title: {
      type: "text",
    },
    code: {
      type: "text",
    },
    code_doc: {
      type: "text",
    },
    user_id: {
      type: "string",
    },
  },
  {
    dataStructure: "JSON",
  }
);
```
#### Schema of user

```js
const userSchema = new Schema(
  User,
  {
    user_name: {
      type: "string",
    },
    user_profile: {
      type: "string",
    },
    user_email: {
      type: "string",
    },
    google_id: {
      type: "string",
    },
  },
  {
    dataStructure: "JSON",
  }
);
```

All of functionality of api which makes Ideao are as follow:
- [Code's api](https://github.com/rajeshkhadka200/collab/blob/main/server/controller/code.controller.js)
- [User's api](https://github.com/rajeshkhadka200/collab/blob/main/server/controller/user.controller.js)

### How the data is accessed:
Since, The project collab is using `redis-om` package to communicate to redis database hosted on redis cloud, which have the diffrent commands for various `CRUD` operation : 

### Create a data
```js
const code = codeRepository.createEntity(req.body);
const id = await codeRepository.save(code);
``` 

### Read a data
```js
const { user_id } = req.params;
  const myCode = await codeRepository
    .search()
    .where("user_id")
    .eq(user_id)
    .return.all();
``` 

### Delete a data
```js
await codeRepository.remove(req.params.code_id);
``` 
### Performance Benchmarks


## How to run it locally?
### Prerequisites
- Node - v16.15.0
- npm - v8.18.0
- yarn -v1.22.18

### Local installation

# Move to local branch
git checkout local

Go to `/server` folder (`cd ./server`) and then:

# copy file and set proper data inside
cp .env.example .env

# install dependencies
yarn install

# Run server
yarn server

Go to `/client` folder (`cd ./client`) and then:

# copy file and set proper data inside
cp .env.example .env

# install dependencies
yarn install

# run development mode
yarn dev

Locally,Collab runs in:
- Server ```localhost:5000```
- Client ```localhost:3000```

## Deployment
This web app is deployed at:
-  Netlify (Frontend)
-  Heroku (For backend)

## More Information about Redis Stack

Here some resources to help you quickly get started using Redis Stack. If you still have questions, feel free to ask them in the [Redis Discord](https://discord.gg/redis) or on [Twitter](https://twitter.com/redisinc).

### Getting Started

1. Sign up for a [free Redis Cloud account using this link](https://redis.info/try-free-dev-to) and use the [Redis Stack database in the cloud](https://developer.redis.com/create/rediscloud).
1. Based on the language/framework you want to use, you will find the following client libraries:
    - [Redis OM .NET (C#)](https://github.com/redis/redis-om-dotnet)
        - Watch this [getting started video](https://www.youtube.com/watch?v=ZHPXKrJCYNA)
        - Follow this [getting started guide](https://redis.io/docs/stack/get-started/tutorials/stack-dotnet/)
    - [Redis OM Node (JS)](https://github.com/redis/redis-om-node)
        - Watch this [getting started video](https://www.youtube.com/watch?v=KUfufrwpBkM)
        - Follow this [getting started guide](https://redis.io/docs/stack/get-started/tutorials/stack-node/)
    - [Redis OM Python](https://github.com/redis/redis-om-python)
        - Watch this [getting started video](https://www.youtube.com/watch?v=PPT1FElAS84)
        - Follow this [getting started guide](https://redis.io/docs/stack/get-started/tutorials/stack-python/)
    - [Redis OM Spring (Java)](https://github.com/redis/redis-om-spring)
        - Watch this [getting started video](https://www.youtube.com/watch?v=YhQX8pHy3hk)
        - Follow this [getting started guide](https://redis.io/docs/stack/get-started/tutorials/stack-spring/)

The above videos and guides should be enough to get you started in your desired language/framework. From there you can expand and develop your app. Use the resources below to help guide you further:

1. [Developer Hub](https://redis.info/devhub) - The main developer page for Redis, where you can find information on building using Redis with sample projects, guides, and tutorials.
1. [Redis Stack getting started page](https://redis.io/docs/stack/) - Lists all the Redis Stack features. From there you can find relevant docs and tutorials for all the capabilities of Redis Stack.
1. [Redis Rediscover](https://redis.com/rediscover/) - Provides use-cases for Redis as well as real-world examples and educational material
1. [RedisInsight - Desktop GUI tool](https://redis.info/redisinsight) - Use this to connect to Redis to visually see the data. It also has a CLI inside it that lets you send Redis CLI commands. It also has a profiler so you can see commands that are run on your Redis instance in real-time
1. Youtube Videos
    - [Official Redis Youtube channel](https://redis.info/youtube)
    - [Redis Stack videos](https://www.youtube.com/watch?v=LaiQFZ5bXaM&list=PL83Wfqi-zYZFIQyTMUU6X7rPW2kVV-Ppb) - Help you get started modeling data, using Redis OM, and exploring Redis Stack
    - [Redis Stack Real-Time Stock App](https://www.youtube.com/watch?v=mUNFvyrsl8Q) from Ahmad Bazzi
    - [Build a Fullstack Next.js app](https://www.youtube.com/watch?v=DOIWQddRD5M) with Fireship.io
    - [Microservices with Redis Course](https://www.youtube.com/watch?v=Cy9fAvsXGZA) by Scalable Scripts on freeCodeCamp