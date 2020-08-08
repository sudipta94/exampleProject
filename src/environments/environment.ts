// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const baseServiceurl= "http://localhost:3000/"
export const environment = {
  production: false,
  englishText: {
    loginText: "Login",
    emailText: "Email",
    signupText: "SignUp?",
    placeHolderEmail: 'Type Your User Email',
    placeHolderPass: 'Type Your Pasword',
    //Form 1

    firstName: "First Name",
    lastName: "Last Name",
    Email: "Email",
    Password: "Password",
    NextButton: "Next",
    BackButton: "Back",

    //Form 2
    Name: 'Name',
    PresentAddress: 'Present Address',
    PermanentAddress: 'Permanent Address',
    address: 'Address',
    city: 'City',
    country: 'Country',
    Pin: 'Pin',
    submitButton: 'Submit'
  },
  urls: {
    getAllUser: baseServiceurl+ "user_data/",
    userSignup: baseServiceurl + "user_data/"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
