
function validate(event) {
  // TODO - write custom validation logic to validate the longitude and latitude
  // values. The latitude value must be a number between -90 and 90; the
  // longitude value must be a number between -180 and 180. If either/both are
  // invalid, show the appropriate error message in the form, and stop the 
  // form from being submitted. If both values are valid, allow the form to be
  // submitted.
  // console.log('TODO - validate the longitude, latitude values before submitting');
  const lat = document.getElementById("latitude").value;
  const long = document.getElementById("longitude").value;

  const latErr= document.getElementById("lat-error");
  const longErr = document.getElementById("long-error");

  if (isNaN(lat) || lat < -90 || lat > 90) {
    latErr.innerHTML = " must be valid latitude (-90 to 90)";
    longErr.innerHTML = "";
    return false;
  }
  else if (isNaN(long) || long < -180 || long > 180) {
    latErr.innerHTML = "";
    longErr.innerHTML = " must be valid longitude (-180 to 180)";
    return false;
  }
  else {
    latErr = "";
    longErr = "";
    return true;
  }
}
// Wait for the window to load, then set up the submit event handler for the form.
window.onload = function() {
  const form = document.querySelector('form');
  form.onsubmit = validate;
};
