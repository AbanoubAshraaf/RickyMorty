# RickyMorty

## Contents

- [Get Started](#-get-started)
  - [Technology used](#-Technology-used)
  - [Donwload From GitHub](#-download-from-bitbucket)
  - [Insall all dependencies](#-insall-all-dependencies)
  - [Install ios PODs](#-Install-ios-PODs)
  - [Run the application](#-Run-the-application)
- [Available Package Scripts](#-Available-Package-Scripts)


## Get started:

## Technology used

- [React Navigation 5](https://reactnavigation.org/)
- [TypeScript](https://reactnative.dev/docs/typescript)
- [GraphQL (Apollo client).](https://www.apollographql.com/docs/react/)
- [React Hooks](https://reactjs.org/docs/hooks-overview.html)
- [Unit Testing](https://reactnative.dev/docs/testing-overview)
- [Sentry](https://docs.sentry.io/platforms/react-native/)

## Icon that used for gnerate App Icon for IOS & android  

- [Ricky icon](https://cdn.domestika.org/c_fill,dpr_1.0,h_1200,t_base_params.format_jpg,w_1200/v1546529981/project-covers/000/458/388/458388-original.jpg?1546529981)

### Download from GitHub

```bash
$ git clone https://github.com/AbanoubAshraaf/RickyMorty.git
```

```bash
$ cd RickyMorty
```

### Insall all dependencies

```bash
$ yarn install
```

### Install ios PODs

```bash
$ yarn pods:install
# or
$ cd platforms/mobile/ios => pod install => cd ..
```

### Run the application

```bash

# for android
$ yarn android

# for ios
$ yarn ios

``` 

## Available Package Scripts

**Example**

```bash
$ yarn ios
```

| Name           | Description                                                                                                                                                      |
| -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `andorid`      | Run on andorid emulator > the andorid emulator must be pre-starte                                                                                                |
| `ios`          | Run on IOS emulator                                                                                                                                              |
| `format`       | Prettify code using prettier                                                                                                                                     |
| `check:format` | Prints the filenames of files that are different from Prettier formatting                                                                                        |
| `lint`         | Run `eslint`                                                                                                                                                     |
| `lint:fix`     | Auto fix eslint`                                                                                                                                                 |
| `pods:install` | Install ios pods                                                                                                                                                 |
| `test` | run test cases                                                                                                                                                 |


## File Structure

```ts
/**
 *   └── components
        ├── ComponentName
        │   ├── hooks
        │   │   ├── index.ts
        │   │   └── useComponentName.ts
        │   ├── hoc
        │   │   └── withHoc.ts
        │   ├── ComponentName.style.ts
        │   ├── ComponentName.tsx
        │   ├── ComponentName.interface.ts
        │   └── index.ts
 * /
```

