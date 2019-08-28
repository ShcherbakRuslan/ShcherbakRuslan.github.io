$(function () {

/* Прелоадер */
var removeSpiner = function () {
    $('.header_main').addClass('on');
    $('.preload').addClass('off');

	  // $('.logo_main img').addClass('on').removeClass('off');
	  // $('.slogan').addClass('on').removeClass('off');
	  // $('.header').addClass('on').removeClass('off');
	  // $('.header_item_block_wrap').addClass('on').removeClass('off');
	  /*$('.header_item_block_wrap').removeClass("off").delay(1000).queue(function(){
	    $(this).addClass("on").dequeue();
		});*/
	  $('body').delay(100).addClass('scroll');
	  $("body").removeClass("scroll").delay(100).queue(function(){
	    $(this).addClass("scroll").dequeue();
		});
	},
	checkSpiner = function () {
		var spsp;
		document.onreadystatechange = function () {
    		if (document.readyState === "complete") {
    			removeSpiner();
    			// setTimeout(removeSpiner, 3000);
    			clearTimeout(spsp);
    		} else {
    			spsp = setTimeout(checkSpiner, 5000);
    		}
	    };
	};
checkSpiner();

/* Плавный скролл */
    $('.header_main .nav a, .header_main .phone a').click(function () {
        var scroll_el = $(this).attr('href');
        // console.log($(scroll_el).length);
        if ($(scroll_el).length != 0) {
            // console.log(scroll_el);
            // $('.modal_menu').fadeOut();
            $('html, body').animate({
                scrollTop: $(scroll_el).offset().top - 80
            }, 600);
        }
        return false;
    });

/* Слайдер */
$('.slider').slick({
	dots: false,
	autoplay: true,
    autoplaySpeed: 3000,
});

$('.design__slide').slick({
    dots: false,
    autoplay: true,
    autoplaySpeed: 3000,
});

/* Отправка писем */
$("#form").submit(function() {
        $.ajax({
            type: "POST",
            url: "../mail.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");
            alert("Your message has been successfully sent.");
            $("#form").trigger("reset");
        });
        return false;
    });

/* Цветовая схема графика */
Highcharts.theme = {
    colors: ['#FF1C1D', '#D6D6D6', '#B6B6B6', '#787878', '#4A4A4A', '#D6D6D6', '#D6D6D6', '#D6D6D6', '#D6D6D6', '#D6D6D6', '#D6D6D6'],
    chart: {
        backgroundColor: null,
        style: {
            fontFamily: '\'Roboto\', sans-serif'
        }
    },
    title: {
        style: {
            color: 'black',
            fontSize: '16px',
            fontWeight: 'bold'
        }
    },
    subtitle: {
        style: {
            color: 'black'
        }
    },
    tooltip: {
        borderWidth: 0
    },
    legend: {
        itemStyle: {
            fontWeight: 'bold',
            fontSize: '13px'
        }
    },
    xAxis: {
        labels: {
            style: {
                color: '#6e6e70'
            }
        }
    },
    yAxis: {
        labels: {
            style: {
                color: '#6e6e70'
            }
        }
    },
    plotOptions: {
        series: {
            shadow: false ///true
        },
        candlestick: {
            lineColor: '#404048'
        },
        map: {
            shadow: false
        }
    },
    // Highstock specific
    navigator: {
        xAxis: {
            gridLineColor: '#D0D0D8'
        }
    },
    rangeSelector: {
        buttonTheme: {
            fill: 'white',
            stroke: '#C0C0C8',
            'stroke-width': 1,
            states: {
                select: {
                    fill: '#D0D0D8'
                }
            }
        }
    },
    scrollbar: {
        trackBorderColor: '#C0C0C8'
    },
    // General
    background2: '#E0E0E8'
};
// Apply the theme
Highcharts.setOptions(Highcharts.theme);

/* График */
Highcharts.chart('container', {
  chart: {
    type: 'column'
  },
  title: {
    text: ''
  },
  xAxis: {
    categories: ['2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021']
  },
  yAxis: {
    min: 0,
    title: {
      text: ''
    }
  },
  tooltip: {
    pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.percentage:.0f}%)<br/>',
    shared: true
  },
  plotOptions: {
    column: {
      stacking: 'percent'
    }
  },
  series: [{
    name: 'OOH',
    data: [7, 7, 7, 6, 6, 6, 6, 6, 6]
  }, {
    name: 'Mags',
    data: [6, 6, 5, 4, 4, 3, 3, 2, 2]
  }, {
    name: 'News',
    data: [15, 13, 11, 10, 9, 7, 6, 6, 5]
  }, {
    name: 'Digital',
    data: [25, 29, 33, 37, 40, 43, 46, 48, 51]
  }, {
    name: 'TV',
    data: [40, 40, 38, 37, 36, 35, 34, 33, 32]
  }]
});

});