const newUser = {
  age: 24,
  password: 'some long password',
  agreeToTerms: true,
};

function oldEnough(user) {
  return user.age >= 18;
}

function passwordLongEnough(user) {
  return user.password.length >= 8;
}

function agreeToTerms(user) {
  return user.agreeToTerms === true;
}

function validate(obj, ...tests) {
  for (let i = 0; i < tests.length; i++) {
    if (tests[i](obj) === false) {
      return false;
    }
  }
  return true;
}

const newUser1 = {
  age: 40,
  password: 'tncy4ty49r2mrx',
  agreeToTerms: true,
};

validate(newUser1, oldEnough, passwordLongEnough, agreeToTerms);
// true

const newUser2 = {
  age: 40,
  password: 'short',
  agreeToTerms: true,
};

validate(newUser2, oldEnough, passwordLongEnough, agreeToTerms);
// false
//
/*Bonus points: if we're applying our validate function to multiple users, it's probably 
a better idea to not have to repeatedly specify the same tests over and over again.*/

function createValidator(...tests) {
  return function(obj) {
    for (let i = 0; i < tests.length; i++) {
      if (tests[i](obj) === false) {
        return false;
      }
    }
    return true;
  };
}

const userValidator = createValidator(
  oldEnough,
  passwordLongEnough,
  agreeToTerms
);

userValidator(newUser1); // true
userValidator(newUser2); // false

/* By employing our createValidator higher-order function, there is no way we can 
 * accidentally use different validation criteria for our different objects.*/
