
<p align="center">
  <a href="https://shopping-cart-6d3cd.firebaseapp.com/" target="blank"><img src="./src/favicon.ico" /></a>
</p>
<h1 align="center">ngCart</h1>

Minimal Online store made with [Angular], [RxJS], [Angular Material], [tailwindcss], [Firebase]. Built for [learning](#Learn-Angular) purposes. [Live here].  
This project was generated with [Angular CLI] version 9.1.8.

## Getting Started
You can either set up Firebase for this app or run it with the mock environment.  

### Run the mock environment
*Skip this section if you want to [run the app with Firebase](#configure-firebase).*  

To run the app without integrating Firebase:

1. Run `npm install`
2. Run `npm run mock` or `ng serve -c mock`. Navigate to `http://localhost:4200/`.

### Configure Firebase

To run the app with Firebase:

1. Go to [Firebase console] and create a new project with a <ins>Realtime Database</ins>.
2. Run `npm install`
3. Add your Firebase config to the app
   1. Find your configuration in project settings under **Firebase SDK snippet**.
   2. Put it in `src/config/db.sample.json` and rename the file to `db.json`.
4. Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`.

## Build
Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.
   - Use the `--prod` flag for a production build.
   - Use `-c mock` for a mock build.

## Deploy

You need to [Configure Firebase](#Configure-Firebase) first. Then run `ng deploy` to deploy the application to Firebase hosting.

## Learn Angular
I build this project to learn Angular. I've learned Angular by:
1. Getting started with [Angular & TypeScript] by Mosh Hamedani.
2. [Build your first Angular app] massive tutorial by Dan Wahlin | Scrimba.
3. It is the time for the [docs].
4. Take notes (do not copy & paste). Here are [my Angular notes].
5. Build an app
   1. Start from an idea or clone a popular app
   2. Apply new things. Do not stick around what you have already learned.
   3. Do not stop much at the UI. Done is better than perfect.
   4. Complete the project to the end.
   5. In the end, optimize your code.
6. Need help? https://stackoverflow.com/search

[Angular]: https://angular.io/
[RxJS]: https://rxjs.dev/
[Angular Material]: https://material.angular.io/
[tailwindcss]: https://tailwindcss.com/
[Firebase]: https://firebase.google.com/
[Angular CLI]: https://github.com/angular/angular-cli
[Firebase console]: https://console.firebase.google.com/
[Angular & TypeScript]: https://www.youtube.com/watch?v=k5E2AVpwsko
[Build your first Angular app]: https://scrimba.com/course/gyourfirstangularapp/
[docs]: https://angular.io/docs
[my Angular notes]: https://github.com/ahmedibrahimq/notes/blob/master/angular.md
[Live here]: https://shopping-cart-6d3cd.firebaseapp.com/
