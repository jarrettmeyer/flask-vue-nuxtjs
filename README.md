# Flask + Vue.js + NuxtJS

The purpose of this demo is to get get these three technologies to play nicely with
each other.

## General Philosophy

1.  The front-end application is built with Vue.js + NuxtJS.
2.  Build output is saved to `backend/dist`.
3.  Requests are sent to the Flask server.
4.  If there is a matching Flask route, then Flask handles the incoming request.
    If there is not a matching Flask route, the catch-all route picks it up. The
    catch-all route is the front-end NuxtJS application.

## Building the Client Application

```
$ cd frontend
$ npm install
$ npm run build
```
