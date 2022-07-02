const fs = require('fs');
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = license => {
  return new Promise((resolve, reject) => {
    fs.renderLicenseBadge('./utils/renderLicenseBadge', license, err => {
    // if theres am errpr, reject the promise and send the error to promise's `.catch()` method
    if (err) {
      reject(err);
      // return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
      return;
}

// if everything went well, resolve the Promise and send the successful data to the `.then()` method
      resolve({
        ok: true,
        message: 'License created!'
      });
    });
  });
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
const renderLicenseLink = license => {
  return new Promise((resolve, reject) => {
    fs.renderLicenseLink('./utils/renderLicenseLink', license, err => {
      // if theres an error, reject the Promise and send the error to the Promise's `.catch()` method
      if (err) {
        reject(err);
        // return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
        return;
      }
      // if everything went well, resolve the promise and send the successful data to the `.then()` method
        resolve({
          ok: true,
          message: 'License link was created!'
        });
      });
    });  
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
const renderLicenseSection = license => {
  return new Promise((resolve, reject) => {
    fs.renderLicenseSection('./utils/renderLicenseLink', license, err => {
      if (err) {
        reject(err);
        return;
      }
      resolve({
        ok: true,
        message: 'License Section was created!'
      });
    });  
  });
}

// TODO: Create a function to generate markdown for README
const generateMarkdown = data => {
  return `# ${data.title}
`;
}

module.exports = generateMarkdown;