'use strict';

// INFORMATION
const enterEmail = document.querySelector('.information .enter-email');
const shownInfo = document.querySelector('.information .shown-info');
const submitButton = document.querySelector('.information .submit');

const showInfo = function() {
  console.log('Displaying Info!')
  enterEmail.classList.remove('enter-email');
  enterEmail.classList.add('hidden');
  shownInfo.classList.remove('hidden');
}

const validateEmail = function(email) {
  const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  console.log('Input:', email)
  if(email.match(regex)) {
    console.log('Input Valid!');
    showInfo();
  } else if(email === '') {
    console.log('Input is empty!');
    document.querySelector('.information .status').textContent = "Email không thể để trống!";
    document.querySelector('.information .status').style.color = "red";
  } else {
    console.log('Input Invalid!');
    document.querySelector('.information .status').textContent = "Email không hợp lệ!";
    document.querySelector('.information .status').style.color = "red";
  };
};

submitButton.addEventListener('click', function() {
  let email = document.getElementById('email').value;
  validateEmail(email);
});

// SECTION 1
const viewMoreButtons = document.querySelectorAll('.sec-1 .view-more');

const showContent = function(index) {
  let part = '.part-' + String(index + 1);
  document.querySelector(('.sec-1 ' + part + ' .view-more')).classList.add('view-less');
  document.querySelector(('.sec-1 ' + part + ' .view-more')).classList.remove('view-more');
  document.querySelector(('.sec-1 ' + part + ' .section-content')).classList.remove('hidden');
  viewMoreButtons[index].addEventListener('click', function() {hideContent(index)});
  console.log('Content Shown!' + (index + 1))
};

const hideContent = function(index) {
  let part = '.part-' + String(index + 1);
  document.querySelector(('.sec-1 ' + part + ' .view-less')).classList.add('view-more');
  document.querySelector(('.sec-1 ' + part + ' .view-less')).classList.remove('view-less');
  document.querySelector(('.sec-1 ' + part + ' .section-content')).classList.add('hidden');
  viewMoreButtons[index].addEventListener('click', function() {showContent(index)});
  console.log('Content Hidden!' + (index + 1))
};

const onHover = function(index) {
  let part = '.part-' + String(index);
  document.querySelector(('.sec-1 ' + part + ' .view')).classList.remove('hidden')
  console.log('Mouse On!' + index)
}

const onMouseOut = function(index) {
  let part = '.part-' + String(index);
  document.querySelector(('.sec-1 ' + part + ' .view')).classList.add('hidden')
  console.log('Mouse Out!' + index)
}


for (let i = 0; i < viewMoreButtons.length; i++) {
  viewMoreButtons[i].addEventListener('click', function() {showContent(i)});
};