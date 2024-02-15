### Context

Static personal page created with Angular, deployed with Github Actions and styled with MDBootstrap.
It consists of:

- summary of professional experience,
- automatically listed personal projects based on Github Projects topics and description,
- contact forms.

### Tech stack

- Node 20
- Angular
- MDBootstrap
- Github Rest Api

### Deployment

Page deployment is fully automated with CI/CD flows made as Github Actions.
Currently, it contains of following flows:

- PR Check Flow
  - run on every PR
  - verify if changes are fulfilling requirements of eslint settings
  - verify if changes are fulfilling requirements of prettier project style
- Deployment Flow
  - run on every push to 'main' branch
  - build project with github configuration
  - deploy on github pages

### Development

#### Setup

##### Prerequirements

- Node in version 20

##### Install

Install necessary dependencies

```shell
npm install
```

##### Build project

- build in developer mode
  - by default, page should be available on 4200
    ```shell
    npm start
    ```
- build in production mode
  - by default, page should be available on 4200
    ```bash
    ng build --configuration production && ng serve
    ```

##### Check style

- check style for changes in \*.ts files
  ```shell
  npm run lint
  ```
- check and autocorrect style for changes in \*.ts files
  ```shell
  npm run lint:fix
  ```
- check style aaccording to prettier settings
  ```shell
  npm run prettier:check
  ```
- check and format files according to prettier settings
  ```shell
  npm run prettier:format
  ```
