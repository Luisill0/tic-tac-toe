# Tic Tac Toe !

Check out the [demo](https://projects.tic-tac-toe.luiz.lat)!

## How to use
### 0. **(If you don't have it)** Install yarn
```shell
npm i -g yarn
```

### 1. Install the required packages
```shell
yarn
```

### 2. Create your .env files
```shell
echo PORT='8100' > packages/server/.env
echo REACT_APP_SERVER_LOCATION='http://localhost:8100' > packages/client/.env
```
<sup>*You can use any port you want</sup>

### 3. Start the client and server
```shell
yarn start
```