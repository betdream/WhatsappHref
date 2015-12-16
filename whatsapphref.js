 $(document).ready(function () {

              if (matchMedia) {
                  var mq = window.matchMedia("(max-width: 991px)");
                  mq.addListener(WidthChange);
                  WidthChange(mq);
              }

              function WidthChange(mq) {
                  var isMobile = {
                      Android: function () {
                          return navigator.userAgent.match(/Android/i);
                      },
                      BlackBerry: function () {
                          return navigator.userAgent.match(/BlackBerry/i);
                      },
                      iOS: function () {
                          return navigator.userAgent.match(/iPhone|iPad|iPod/i);
                      },
                      Opera: function () {
                          return navigator.userAgent.match(/Opera Mini/i);
                      },
                      Windows: function () {
                          return navigator.userAgent.match(/IEMobile/i);
                      },
                      any: function () {
                          return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
                      }
                  };




                  if (mq.matches) {
                      if (isMobile.Android()) {
                          $("a").attr("href", "intent://send/+905055555#Intent;scheme=smsto; package=com.whatsapp;action=android.intent.action.SENDTO;end");
                      } else {
                          $("a").attr("href", "tel:+905555555555");

                      }
                  };

              }
          });
