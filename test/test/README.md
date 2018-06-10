This project was bootstrapped with [Create React Native App](https://github.com/react-community/create-react-native-app).

# Model Village Tech Test

## Technologies used
- React Native

## Getting started
Follow the instructions below to download a copy of the project and run it locally for development purposes.

### Prerequisites
- Xcode or Android SDK
- Expo

- Verify that a current version of Node.js is installed:
```
node -v
```

### Installing

```
git clone https://github.com/antcin/mv-reactnative-coding-test.git
cd test/test
npm install
npm start
```
Follow the instructions prompted on the CLI to run the app either via simulator or Expo.


## Approach

- Navigation
 -

- Components

  - Class-based:
    - CardsList: this is component is used to fetch data from `list_response.json` using the `setState` method.
    - CardDetails: used to produce one listing's details component. The listing is passed to the `CardDetails` component as a prop.

### User stories
- Display a list of events
```sh
As a user,
So that I can see what is going on around me,
I would like to see a list of tiles on the Main Screen.
```


- Display details of a specific event
```sh
As a user,
So that I can see the details of a specific event,
I would like to be able to click on the event's tile.
```
