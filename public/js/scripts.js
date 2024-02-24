(function ($) {
  "use strict";

  $(window).on("load", function () {
    /* ----------------------------------------------------------- */
    /*  BITCOIN PRELOADER
		/* ----------------------------------------------------------- */

    if ($("#preloader")[0]) {
      $("#preloader")
        .delay(500)
        .fadeTo(500, 0, function () {
          $(this).remove();
        });
    }
  });

  $(document).ready(function () {
    /* csrf token */
    function getCookie(name) {
      let cookieValue = null;
      if (document.cookie && document.cookie !== "") {
        const cookies = document.cookie.split(";");
        for (let i = 0; i < cookies.length; i++) {
          const cookie = cookies[i].trim();
          // Does this cookie string begin with the name we want?
          if (cookie.substring(0, name.length + 1) === name + "=") {
            cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
            break;
          }
        }
      }
      return cookieValue;
    }
    const csrftoken = getCookie("csrftoken");

    /* ----------------------------------------------------------- */
    /*  REMOVE # FROM URL
		/* ----------------------------------------------------------- */

    $("a[href='#']").on("click", function (e) {
      e.preventDefault();
    });

    new WOW().init();

    /* ----------------------------------------------------------- */
    /*  FIXED HEADER ON SCROLL */

    var navsite = $("#site-navigation");
    if (navsite.length) {
      var offset = $("#site-navigation").offset().top;
    }
    $(document).scroll(function () {
      var scrollTop = $(document).scrollTop();
      if (scrollTop > offset) {
        $("#site-navigation").addClass("fixed");
      } else {
        $("#site-navigation").removeClass("fixed");
      }
    });
    var navsite_mobile = $("#mobile-menu");
    if (navsite_mobile.length) {
      var offset = $("#mobile-menu").offset().top;
    }

    /* ----------------------------------------------------------- */
    /*  BOOTSTRAP CAROUSEL
		/* ----------------------------------------------------------- */

    $("#main-slide").carousel({
      pause: true,
      interval: 100000,
    });

    /* ----------------------------------------------------------- */
    /*  WIDGET DATA FROM BITCOIN.COM
		/* ----------------------------------------------------------- */

    (function (b, i, t, C, O, I, N) {
      window.addEventListener(
        "load",
        function () {
          if (b.getElementById(C)) return;
          (I = b.createElement(i)), (N = b.getElementsByTagName(i)[0]);
          I.src = t;
          I.id = C;
          N.parentNode.insertBefore(I, N);
        },
        false
      );
    })(document, "script", "https://widgets.bitcoin.com/widget.js", "btcwdgt");

    /* ----------------------------------------------------------- */
    /*  VARIABLES FOR SELECT INPUT AND BITCOIN CALCULATOR FORM
		/* ----------------------------------------------------------- */

    var userAgent = navigator.userAgent.toLowerCase(),
      plugins = {
        selectFilter: $("#currency-select"),
        btcCalculator: $("#bitcoin-calculator"),
      };

    /* ----------------------------------------------------------- */
    /*  REPLACE OLD SELECT IN BITCOIN CALCULATOR FORM
		/* ----------------------------------------------------------- */

    if (plugins.selectFilter.length) {
      for (var i = 0; i < plugins.selectFilter.length; i++) {
        var select = $(plugins.selectFilter[i]);
        select.select2({
          placeholder: select.attr("data-placeholder")
            ? select.attr("data-placeholder")
            : false,
          minimumResultsForSearch: select.attr("data-minimum-results-search")
            ? select.attr("data-minimum-results-search")
            : 10,
          maximumSelectionSize: 3,
          dropdownCssClass: select.attr("data-dropdown-class")
            ? select.attr("data-dropdown-class")
            : "",
        });
      }
    }

    /* ----------------------------------------------------------- */
    /*  BITCOIN CALCULATOR [ WWW.BLOCKCHAIN.INFO API ]
		/* ----------------------------------------------------------- */

    if (plugins.btcCalculator.length) {
      $.getJSON("https://blockchain.info/ticker", function (btcJsonData) {
        var currencyList = [];
        var index = 0;

        for (var currency in btcJsonData) {
          currencyList.push({
            id: index,
            text: currency,
          });
          index++;
        }

        for (var i = 0; i < plugins.btcCalculator.length; i++) {
          var btcForm = $(plugins.btcCalculator[i]),
            btcFormInput = $(btcForm.find('[name="btc-calculator-value"]')),
            btcFormOutput = $(btcForm.find('[name="btc-calculator-result"]')),
            btcFormCurrencySelect = $(
              btcForm.find('[name="btc-calculator-currency"]')
            );

          btcFormCurrencySelect.select2({
            placeholder: btcFormCurrencySelect.attr("data-placeholder")
              ? btcFormCurrencySelect.attr("data-placeholder")
              : false,
            minimumResultsForSearch: btcFormCurrencySelect.attr(
              "data-minimum-results-search"
            )
              ? btcFormCurrencySelect.attr("data-minimum-results-search")
              : 50,
            maximumSelectionSize: 3,
            dropdownCssClass: btcFormCurrencySelect.attr("data-dropdown-class")
              ? btcFormCurrencySelect.attr("data-dropdown-class")
              : "",
            data: currencyList,
          });

          if (btcFormInput.length && btcFormOutput.length) {
            // BTC => Currency
            (function (btcFormInput, btcFormOutput, btcFormCurrencySelect) {
              var lastChanged = "btc";

              btcFormInput.on("input", function () {
                // store current positions in variables
                var selectionStart = this.selectionStart,
                  selectionEnd = this.selectionEnd;

                this.value = toCryptoCurrencyFormat(this.value);

                // restore cursor position
                this.setSelectionRange(selectionStart, selectionEnd);

                btcFormOutput.val(
                  toCurrencyFormat(
                    "" +
                      btcJsonData[
                        btcFormCurrencySelect.select2("data")[0].text
                      ]["buy"] *
                        this.value
                  )
                );
                lastChanged = "btc";
              });

              // Currency => BTC
              btcFormOutput.on("input", function () {
                // store current positions in variables
                var selectionStart = this.selectionStart,
                  selectionEnd = this.selectionEnd;

                this.value = toCurrencyFormat(this.value);

                // restore cursor position
                this.setSelectionRange(selectionStart, selectionEnd);

                btcFormInput.val(
                  toCryptoCurrencyFormat(
                    "" +
                      this.value /
                        btcJsonData[
                          btcFormCurrencySelect.select2("data")[0].text
                        ]["sell"]
                  )
                );
                lastChanged = "currency";
              });

              btcFormInput.trigger("input");
              btcFormOutput.blur();

              btcFormCurrencySelect.on("change", function () {
                if (lastChanged === "btc") {
                  btcFormOutput.val(
                    toCurrencyFormat(
                      "" +
                        btcJsonData[
                          btcFormCurrencySelect.select2("data")[0].text
                        ]["buy"] *
                          btcFormInput.val()
                    )
                  );
                } else {
                  btcFormInput.val(
                    toCryptoCurrencyFormat(
                      "" +
                        btcFormOutput.val() /
                          btcJsonData[
                            btcFormCurrencySelect.select2("data")[0].text
                          ]["sell"]
                    )
                  );
                }
              });
            })(btcFormInput, btcFormOutput, btcFormCurrencySelect);
          }
        }
      }).fail(function () {
        console.log(
          "Error while fetching data from https://blockchain.info/ticker"
        );
      });
    }

    function toCurrencyFormat(stringValue) {
      var value = parseFloat(stringValue.replace(/[^\d.]/g, "")).toFixed(2);
      return $.isNumeric(value) ? value : 0;
    }

    function toCryptoCurrencyFormat(stringValue) {
      var value = stringValue.replace(/[^\d.]/g, "");
      return $.isNumeric(value) ? value : 0;
    }

    /*
	    Sidebar
	*/
    $(".dismiss,  .dismiss > button , .overlay").on("click", function () {
      console.log("close toggle");
      $(".sidebar").removeClass("active");
      $(".overlay").removeClass("active");
    });

    $(".dashboard-sidebar-toggle").on("click", function (e) {
      e.preventDefault();
      $(".sidebar").addClass("active");
      $(".overlay").addClass("active");
    });
    $(".sidebar-toggler").on("click", function (e) {
      e.preventDefault();
      $(".sidebar").addClass("active");
      $(".overlay").addClass("active");
    });

    /* replace the default browser scrollbar in the sidebar, in case the sidebar menu has a height that is bigger than the viewport */
    $(".sidebar").mCustomScrollbar({
      theme: "minimal-dark",
    });

    $("#back-to-top").on("click", function () {
      $("html, body").animate(
        {
          scrollTop: 0,
        },
        800
      );
      return false;
    });

    var is_visible = false;
    $(".password-toggle").on("click", function () {
      console.log(is_visible);
      if (is_visible == false) {
        $("#id_password").attr("type", "text");
        $(this).removeClass("fa-eye-slash").addClass("fa-eye");
        is_visible = true;
      } else {
        $("#id_password").attr("type", "password");
        is_visible = false;
        $(this).removeClass("fa-eye").addClass("fa-eye-slash");
      }
    });

    var infinite = new Waypoint.Infinite({
      element: $(".infinite-container")[0],
      onBeforePageLoad: function () {
        $(".loading").show();
      },
      onAfterPageLoad: function ($items) {
        $(".loading").hide();
      },
    });

    setTimeout(() => {
      $(".alert").hide();
    }, 5000);

    const increase_amount_date = $("#end-date");
    //console.log(increase_amount_date)
    const timer = increase_amount_date.attr("data-creditdate");
    const user_id = increase_amount_date.attr("data-userID");
    const investment_id = increase_amount_date.attr("data-investID");
    if (timer) {
      const eventDate = Date.parse(timer);
      // Update the count down every 1 second
      var x = setInterval(function () {
        // Get today's date and time
        var now = new Date().getTime();

        // Find the distance between now and the count down date
        var distance = eventDate - now;
        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        $("#demo").text(`${hours} h ${minutes} m ${seconds} s`);

        if (distance < 0) {
          clearInterval(x);
          $("#demo").text(`0 h 0 m 0 s`);
          credit_user(user_id, investment_id);
        }
      }, 1000);
    }

    const Endtimer = increase_amount_date.attr("data-endDATE");
    const EndDate = Date.parse(Endtimer);
    // Update the count down every 1 second
    var x2 = setInterval(function () {
      // Get today's date and time
      var current_time = new Date().getTime();

      // Find the distance between now and the count down date
      var distance = EndDate - current_time;
      // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        clearInterval(x2);

        end_investment(user_id, investment_id);
      }
    }, 1000);

    function credit_user(user, investment_id) {
      $.ajax({
        type: "POST",
        url: "/credit-user-invstments/",
        data: {
          user_id: user,
          investment_id: investment_id,
          csrfmiddlewaretoken: csrftoken,
        },

        success: function (data) {
          console.log(data);
          window.location.reload();
        },
      });
    }

    function end_investment(user, investment_id) {
      $.ajax({
        type: "POST",
        url: "/end-user-invstments/",
        data: {
          user_id: user,
          investment_id: investment_id,
          csrfmiddlewaretoken: csrftoken,
        },

        success: function (data) {
          console.log(data);
          window.location.reload();
        },
      });
    }

    $("#withdraw-form").on("submit", function (e) {
      e.preventDefault();
      $("#submit_btn").text("processing..").attr("disabled", "disabled");
      $.ajax({
        type: "POST",
        url: "/withdraw/",
        data: {
          coin: $("#withdraw_coin").val(),
          amount: $("#withdraw_amount").val(),
          wallet_address: $("#withdraw_address").val(),
          csrfmiddlewaretoken: csrftoken,
        },

        success: function (data) {
          console.log(data);
          if (data.msg == "Insufficient Balance") {
            $("#msg-alert")
              .toggle()
              .addClass("alert-danger")
              .text(`${data.msg}`);
          } else {
            $("#msg-alert")
              .toggle()
              .addClass("alert-success")
              .text(`${data.msg}`);
          }
        },
        complete: function () {
          $("#submit_btn").text("Done");
        },
      });
    });
  });
})(jQuery);
