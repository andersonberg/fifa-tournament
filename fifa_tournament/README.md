# Fifa Tournament

## About
Fifa Tournament is a web application project to organize a tournament in the FIFA game.

## Project bootstrap [![CircleCI](https://circleci.com/gh/vintasoftware/django-react-boilerplate.svg?style=svg)](https://circleci.com/gh/vintasoftware/django-react-boilerplate)
- [ ] Start your project using:
```
django-admin startproject theprojectname --extension py,yml,json --name Procfile,README.md,.env.example --template=https://github.com/vintasoftware/django-react-boilerplate/archive/boilerplate-release.zip
```
- [ ] Above: don't forget the `--extension` and `--name` params!
- [ ] `pip install -r requirements-to-freeze.txt`
- [ ] `pip freeze > requirements.txt`
- [ ] `npm update --save`
- [ ] `npm update --save-dev`
- [ ] Remove the `^` from `"bootstrap-loader": "^2.1.0"` in the package.json file. bootstrap-loader 2.2 breaks semver by breaking support for 4.0.0-alpha.6. This step will be removed when we update to bootstrap beta version.
- [ ] Check for outdated npm dependencies with `npm outdated` and update them
- [ ] Change the first line of README to the name of the project
- [ ] Add an email address to the `ADMINS` settings variable
- [ ] Change the `SERVER_EMAIL` to the email address used to send e-mails.

After completing ALL of the above, remove this `Project bootstrap` section from the project README. Then follow `Quickstart` below.

## Running
### Setup
- On project root, do the following:
- Create a copy of ``fifa_tournament/settings/local.py.example``:  
  `cp fifa_tournament/settings/local.py.example fifa_tournament/settings/local.py`
- Create a copy of ``.env.example``:  
  `cp .env.example .env`
- Create the migrations for `users` app (do this, then remove this line from the README):  
  `python manage.py makemigrations`
- Run the migrations:  
  `python manage.py migrate`

### Tools
- Setup [editorconfig](http://editorconfig.org/), [prospector](https://prospector.landscape.io/en/master/) and [ESLint](http://eslint.org/) in the text editor you will use to develop.

### Running the project
- `pip install -r requirements.txt`
- `npm install`
- `npm run start`
- `python manage.py runserver`

### Testing
`make test`

Will run django tests using `--keepdb` and `--parallel`. You may pass a path to the desired test module in the make command. E.g.:

`make test someapp.tests.test_views`

### Adding new pypi libs
Add high level dependecies to `requirements-to-freeze.txt` and `pip freeze > requirements.txt`. This is [A Better Pip Workflow](http://www.kennethreitz.org/essays/a-better-pip-workflow).

## Linting
- Manually with `prospector` and `npm run lint` on project root.
- During development with an editor compatible with prospector and ESLint.

## Pre-commit hooks
- Run `pre-commit install` to enable the hook into your git repo. The hook will run automatically for each commit.
- Run `git commit -m "Your message" -n` to skip the hook if you need.

### How to test Heroku deployment
Push your changes to a branch and visit `https://dashboard.heroku.com/new?template=https://github.com/fill-org-or-user/fill-project-repo-name/tree/fill-branch` (replace all `fill-*`).

### How to add a 'Deploy to Heroku' button
Read [this](https://devcenter.heroku.com/articles/heroku-button#adding-the-heroku-button).

P.S. if you want to deploy in a different way please check the `app.json` file for what needs to be configured.
