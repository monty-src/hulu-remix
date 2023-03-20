[![Deploy Next.js site to Pages](https://github.com/monty-src/hulu-remix/actions/workflows/nextjs.yml/badge.svg)](https://github.com/monty-src/hulu-remix/actions/workflows/nextjs.yml)

# Hulu Remix

## Table of Contents

- [Overview](#overview)
- [Technologies](#technologies)
- [Setup](#setup)
  - [Clone repository](#clone-repository)
  - [api.themoviedb.org](#apithemoviedborg)
  - [Create .env.local](#create-envlocal)
  - [NPM Install](#npm-install)
- [NPM Build](#npm-build)

## Overview

**Demo** https://monty-src.github.io/hulu-remix

This repository is part of the monty-src/remix series, and contains a Hulu clone built using Typescript, NextJS, Tailwind CSS and Heroicons.

## Technologies

### Typescript

a superset of Javascript that adds optional static typing and other features to the language.

https://www.typescriptlang.org/

### NextJS

a popular React framework for building srver-rendered applications and static websites.

https://nextjs.org/

### Tailwind CSS 

is a utility-first CSS framework that allows you to style your website by composing classes.

https://tailwindcss.com/

### Heroicons

is a set of free, open-source SVT icons that can be easily customized and used in your web projects.

https://heroicons.com/

## Setup

### Clone repository

```js
git clone https://github.com/monty-src/hulu-remix.git
```

### api.themoviedb.org

1. **Go to** https://www.themoviedb.org/signup
2. **Register** Username, Password, Password Confirm, & Email
3. **Click** Sign up
4. **Account verification required** Check email
5. **Click** Profile Dropdown > Settings
6. **Click** API
7. **Click** Request an API Key
8. **Click** Developer
9. **Click** Accept (Terms & Conditions)
10. **Application Form**
- **Type of Use** Desktop Application
- **Application Name** hulu-remix
- **Application URL** http://localhost:3000
- **Application Summary** In order to create a Hulu clone I need some movie information from your API
- **Personal Information**
11. **Click** Submit

### Create .env.local

1. **Change Directory** into hulu-remix
2. **Create** .env.local

```bash
cd hulu-remix
touch .env.local
```

3. **Add** API_KEY generated from api.themoviedb.org

```bash
API_KEY={API_KEY}
```

### NPM Install

```js
npm i
```

## NPM Build

```bash
npm run dev
```