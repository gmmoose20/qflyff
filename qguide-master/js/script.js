// FAQ

const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");

accordionItemHeaders.forEach(accordionItemHeader => {
  accordionItemHeader.addEventListener("click", event => {
    const currentlyActiveAccordionItemHeader = document.querySelector(".accordion-item-header.active");

    if (currentlyActiveAccordionItemHeader && currentlyActiveAccordionItemHeader !== accordionItemHeader) {
      currentlyActiveAccordionItemHeader.classList.remove("active");
      currentlyActiveAccordionItemHeader.nextElementSibling.style.maxHeight = 0;
    }


    accordionItemHeader.classList.toggle("active");

    const accordionItemBody = accordionItemHeader.nextElementSibling;
    if (accordionItemHeader.classList.contains("active")) {
      accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
    } else {
      accordionItemBody.style.maxHeight = 0;
    }
  })
})


// Map Details

// get modal-open buttons
let modalBtn = document.querySelectorAll('.modal-open');

modalBtn.forEach(function (btn) {
  btn.onclick = function () {
    let modal = btn.getAttribute('data-boss');

    document.getElementById(modal).style.display = 'block';
  };
});


let closeBtn = document.querySelectorAll('.modal-close');

closeBtn.forEach(function (btn) {
  btn.onclick = function () {
    let modal = btn.closest(".modal").style.display = 'none';
  }
})

window.onclick = function (e) {

  if (e.target.classList.contains('modal')) {

    e.target.style.display = 'none';

  }

};

// Time
const clock = () => {
  let hours = document.getElementById("hour");
  let minutes = document.getElementById("minutes");
  // let seconds = document.getElementById("seconds");
  let ampm = document.getElementById("ampm");

  let d = new Date();
  let offset = -6;

  let utc = d.getTime() + (d.getTimezoneOffset() * 60000);

  let serverDate = new Date(utc + (3600000 * offset));

  let h = serverDate.getHours();
  let m = serverDate.getMinutes();
  // let s = new Date().getSeconds();
  let am = "AM";

  if (h > 12) {
    h = h - 12;
    am = "PM";
  }

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  // s = s < 10 ? "0" + s : s;

  hours.innerHTML = h;
  minutes.innerHTML = m;
  // seconds.innerHTML = s;
  ampm.innerHTML = am;
};
let interval = setInterval(clock, 1000);


// World Boss
$(document).ready(function () {
  var getbossHeight = $('.boss.active').height();

  $('.boss-items').css({
    height: getbossHeight
  });

  function calcbossHeight() {
    getbossHeight = $('.boss.active').height();

    $('.boss-items').css({
      height: getbossHeight
    });
  }

  // function animateContentColor() {
  //   var getbossColor = $('.boss.active').attr('boss-color');

  //   $('body').css({
  //     background: getbossColor
  //   });

  //   $('.title').css({
  //     color: getbossColor
  //   });

  //   $('.btn').css({
  //     color: getbossColor
  //   });
  // }

  var bossItem = $('.wboss'),
    bossCurrentItem = bossItem.filter('.active');

  $('#wnext').on('click', function (e) {
    e.preventDefault();

    var nextItem = bossCurrentItem.next();

    bossCurrentItem.removeClass('active');

    if (nextItem.length) {

      bossCurrentItem = nextItem.addClass('active');
    } else {
      bossCurrentItem = bossItem.first().addClass('active');
    }

    calcbossHeight();
    // animateContentColor();
  });

  $('#wprev').on('click', function (e) {
    e.preventDefault();

    var prevItem = bossCurrentItem.prev();

    bossCurrentItem.removeClass('active');

    if (prevItem.length) {
      bossCurrentItem = prevItem.addClass('active');
    } else {
      bossCurrentItem = bossItem.last().addClass('active');
    }

    calcbossHeight();
    animateContentColor();
  });





  // Ripple
  $('[ripple]').on('click', function (e) {
    var rippleDiv = $('<div class="ripple" />'),
      rippleSize = 60,
      rippleOffset = $(this).offset(),
      rippleY = e.pageY - rippleOffset.top,
      rippleX = e.pageX - rippleOffset.left,
      ripple = $('.ripple');

    rippleDiv.css({
      top: rippleY - (rippleSize / 2),
      left: rippleX - (rippleSize / 2),
      background: $(this).attr("ripple-color")
    }).appendTo($(this));

    window.setTimeout(function () {
      rippleDiv.remove();
    }, 1900);
  });
});


// Dungeon Boss
$(document).ready(function () {

  var getbossHeight = $('.dboss.active').height();

  $('.boss-items').css({
    height: getbossHeight
  });

  function calcbossHeight() {
    getbossHeight = $('.dboss.active').height();

    $('.boss-items').css({
      height: getbossHeight
    });
  }

  // function animateContentColor() {
  //   var getbossColor = $('.boss.active').attr('boss-color');

  //   $('body').css({
  //     background: getbossColor
  //   });

  //   $('.title').css({
  //     color: getbossColor
  //   });

  //   $('.btn').css({
  //     color: getbossColor
  //   });
  // }

  var bossItem = $('.dboss'),
    bossCurrentItem = bossItem.filter('.active');

  $('#dbnext').on('click', function (e) {
    e.preventDefault();

    var nextItem = bossCurrentItem.next();

    bossCurrentItem.removeClass('active');

    if (nextItem.length) {

      bossCurrentItem = nextItem.addClass('active');
    } else {
      bossCurrentItem = bossItem.first().addClass('active');
    }

    calcbossHeight();
    // animateContentColor();
  });

  $('#dbprev').on('click', function (e) {
    e.preventDefault();

    var prevItem = bossCurrentItem.prev();

    bossCurrentItem.removeClass('active');

    if (prevItem.length) {
      bossCurrentItem = prevItem.addClass('active');
    } else {
      bossCurrentItem = bossItem.last().addClass('active');
    }

    calcbossHeight();
    animateContentColor();
  });



  // Ripple
  $('[ripple]').on('click', function (e) {
    var rippleDiv = $('<div class="ripple" />'),
      rippleSize = 60,
      rippleOffset = $(this).offset(),
      rippleY = e.pageY - rippleOffset.top,
      rippleX = e.pageX - rippleOffset.left,
      ripple = $('.ripple');

    rippleDiv.css({
      top: rippleY - (rippleSize / 2),
      left: rippleX - (rippleSize / 2),
      background: $(this).attr("ripple-color")
    }).appendTo($(this));

    window.setTimeout(function () {
      rippleDiv.remove();
    }, 1900);
  });

});


// Nav
$(function () {
  var Accordion = function (el, multiple) {
    this.el = el || {};
    // more then one submenu open?
    this.multiple = multiple || false;

    var dropdownlink = this.el.find('.dropdownlink');
    dropdownlink.on('click', {
        el: this.el,
        multiple: this.multiple
      },
      this.dropdown);
  };

  Accordion.prototype.dropdown = function (e) {
    var $el = e.data.el,
      $this = $(this),
      //this is the ul.submenuItems
      $next = $this.next();

    $next.slideToggle();
    $this.parent().toggleClass('open');

    if (!e.data.multiple) {
      //show only one menu at the same time
      $el.find('.submenuItems').not($next).slideUp().parent().removeClass('open');
    }
  }

  var accordion = new Accordion($('.accordion-menu'), false);
})