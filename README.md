# Jake's Portfolio 👨🏻‍💻

**This is a place where I keep all of my favorite personal/work projects. You can see it live [here](http://jakeflynn.herokuapp.com).**

## Running Locally 🛠

If you'd like to run this project locally:

```
$ git clone https://github.com/jakeswork/portfolio-new.git
$ yarn add || npm i
$ yarn start || npm start
```

## Folder/Naming Conventions 📂

```
ComponentName/ # root folder for all-things component related
  ComponentName.tsx # The barebones component without any HOC's wrapping it
  ComponentName.unit.test.tsx # Testing on the barebones UI component
  index.ts # import ComponentName.js and wrap any HOCs (redux, graphql, react-intl, jss)
  styles.ts # css defined by css-in-js library
  ComponentName.d.ts # typings
```
