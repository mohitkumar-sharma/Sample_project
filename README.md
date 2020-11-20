# Demo project for Investec
This is a React Native project which is compatible with both iOS and Android

# Clone the project

1. You can [Clone project using HTTPS].
2. If your ssh already setup then [Clone project using git url] and if not then [Setup ssh for GitHub](https://docs.github.com/en/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)


# Development

## Running the app locally on iOS

1. Install the react-native-cli - instructions [on the React Native website](https://facebook.github.io/react-native/docs/getting-started)
2. [Install cocoapods](https://guides.cocoapods.org/using/getting-started.html)
3. Make sure you've installed xcode and opened it to accept terms etc.
4. Instructions to setup ssh for bitbucket - [Setup ssh for GitHub](https://docs.github.com/en/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)
5. Install js dependencies by running `yarn install` in terminal.
6. Install native dependencies by using cocoapods with `cd ios && pod install`
7. Start the js bundler with `react-native start`
8. Run your project by running `react-native run-ios`


## Running the app locally on Android

1. Install the react-native-cli - instructions [on the React Native website](https://facebook.github.io/react-native/docs/getting-started)
2. Make sure you've installed Android Studio, have the jdk etc. You'll likely need to create at least one emulator using the Virtual Device Manager or have a real device connected.
3. Install js dependencies by running `yarn install`
4. Start the js bundler with `react-native start`
5. Run your project by running `react-native run-android`


## Structure

We're using `redux` for state management. All redux store management handled in `states` directory.

The bulk of the code is in the `app` directory.

| location        | contents                                                                                                                     |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| app/App.tsx      | All navigation and app screens related functionality handled here and wrapped in navigation container and called from SocketAuth.js.                                                                                                      |
| app/components  | Lower level components, e.g. buttons, custom views and small components etc.                                                                      |
| app/screens     | Components representing entire screens within the app, where integration with redux would happen                             |
| app/config      | App-wide config - things like colors, routes etc. Configuration of the redux store. |
| app/controls  |   Controls holds the ts files for validation and other logics.                                                                    |
| app/hooks  |   CustomHooks contains all customized hooks                                                                 |
| app/native  |   All NativeModules holds files having native logic.                                                                 |
| app/navigation | App screen navigations logic and logic of setting screens based on session                                                   |
| \_\_tests\_\_/  | Tests, using [Jest](https://jestjs.io/)                                                                                      |
| ios/            | Native iOS project                                                                                                           |
| android/        | Native Android project                                                                                                       |



## Config

Global app config is in `app/config/index.ts`. There are some defaults which are overridden by the contents of `localConfig.ts`.

`localConfig.ts` is intended for overriding config values without committing them. Things like enabling/disabling storybook locally or secret tokens.

#### Possible config values

| value              | purpose                                                                 |
| ------------------ | ----------------------------------------------------------------------- |
| `colors`           | The colors used throughout the app                                      |
| `storybookEnabled` | Should storybook run? (not currently implemented)                       |
| `accessibilityStrings`           | This file is for keeping the strings of testId |
| `fontWeights`           | This file exports the fontWeights by name |
| `strings`           | Consists of all static strings used in the app |
| `store`           | a fully configured store |


## Redux

Our typical redux setup would be done in `config/store.ts`. This would setup the redux store, add default middleware.

We would then add the react-redux `Provider` to `app/App.tsx`. Root navigator would be wrapped by `Provider` in `app/App.tsx`.

Redux state (`Actions` and `Reducers`) would be managed in `app/states` for whole app.

Packages needed to setup store:

| package       | purpose                                              |
| ------------- | ---------------------------------------------------- |
| react-redux   | to setup provider in `app/App.tsx`                    |
| redux         | main redux package                                   |


## Storybook

[Storybook](https://storybook.js.org/) allows us to list example usages of our components with various props so that we can quickly iterate on them without manually navigating to get the app into a useful state.

Start the app `react-native` with `storybookEnabled` set to `true` in `app/config/localConfig.ts`. Storybook takes over the app UI with a component.

| location          | contents                                                     |
| ----------------- | ------------------------------------------------------------ |
| storybook/stories | list of all storybook here in which show all components view |
| storybook/index   | storybook setup                                              |