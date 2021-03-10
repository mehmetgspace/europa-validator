var Europa = function() {
  this.form = null;
  this.formItems = [];
}

Europa.prototype.init = function() {
  var self = this;

  // get form items
  self.getFormItems();

  // default event listeners
  self.pageListener();
}

Europa.prototype.pageListener = function() {
  var self = this;

  // submit form event
  self.submitForm();
}

Europa.prototype.getFormItems = function () {
  var self = this;

  // get form element
  self.form = document.querySelector('form');

  // get every form elements
  self.formItems = document.querySelectorAll('[data-europa]');
}

Europa.prototype.submitForm = function() {
  var self = this;

  if (self.form !== null) {
    self.form.addEventListener('submit', function (e) {
      e.preventDefault();

      // get each form elements
      self.formItems.forEach(function (formItem) {
        // check empty
        if (formItem.value === '') {
          // show error message if value is empty
          self.showMessage('error', formItem, 'Required');
        } else {
          self.showMessage('success', formItem, '');
        }
      });
    })
  }
}

Europa.prototype.showMessage = function(type, formItem, message) {
  // get parent element
  var parent = formItem.parentElement;

  // get validation element
  var messageEl = parent.querySelector('.europa-validator-group__message');

  // change validation message
  messageEl.innerText = message;

  if (type === 'error') {
    // add error class to parent
    parent.classList.add('europa-validator-group--error');
  }

  if (type === 'success') {
    // remove error class from parent
    parent.classList.remove('europa-validator-group--error');
  }

}

document.addEventListener('DOMContentLoaded', function(event) {
  var europa = new Europa();
  europa.init();
});
