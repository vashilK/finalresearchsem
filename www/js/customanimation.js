var game1 = 0.3;
var game2 = 0.7;
var mistakes = 30;
var goodans = 22;
var avg = (goodans / (mistakes + goodans));
$(document).ready(function() {
  $(".home1").click(function() {
    destroyall();
    destroycircle();
  })
  $(".stats").click(function() {
    circleanimate();
    animateg1();
  })
  $(".prof").click(function() {
    destroyall();
    destroycircle();
  })
})

/*CIRCILE DEFINING LEVEL*/
function circleanimate() {
  var x = 80;
  var bar = new ProgressBar.Circle(circlelevel, {
    color: '#aaa',
    // This has to be the same size as the maximum width to
    // prevent clipping
    strokeWidth: 4,
    trailWidth: 1,
    easing: 'easeInOut',
    duration: 1400,
    text: {
      autoStyleContainer: false
    },
    from: {
      color: '#F00030',
      width: 1
    },
    to: {
      color: '#8ED47D',
      width: 4
    },
    // Set default step function for all animate calls
    step: function(state, circle) {
      circle.path.setAttribute('stroke', state.color);
      circle.path.setAttribute('stroke-width', state.width);

      var value = Math.round(x);
      if (value === 0) {
        circle.setText('');
      } else {
        circle.setText(value + '%');
      }

    }
  });
  var b = x / 100;
  bar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
  bar.text.style.fontSize = '2rem';
  bar.animate(0.8); // Number from 0.0 to 1.0

}

/*ARRAY FOR GRAPH*/
var progressBars = [];

function animateg1() {
  progressBars[0] = (new ProgressBar.Line(container, {
    strokeWidth: 4,
    easing: 'easeInOut',
    duration: 1400,
    color: '#FFEA82',
    trailColor: '#eee',
    trailWidth: 1,
    svgStyle: {
      width: '100%',
      height: '100%'
    },
    from: {
      color: '#B8E34A'
    },
    to: {
      color: '#84E246'
    },
    step: (state, bar) => {
      bar.path.setAttribute('stroke', state.color);
    }
  }));
  progressBars[1] = (new ProgressBar.Line(container1, {
    strokeWidth: 4,
    easing: 'easeInOut',
    duration: 1400,
    color: '#FFEA82',
    trailColor: '#eee',
    trailWidth: 1,
    svgStyle: {
      width: '100%',
      height: '100%'
    },
    from: {
      color: '#FFEC3D'
    },
    to: {
      color: '#F0003C'
    },
    step: (state, bar) => {
      bar.path.setAttribute('stroke', state.color);
    }
  }));
  //ANIMATE SECTION
  var i;
  var a = [game1, game2];
  for (i = 0; i < 2; i++) {
    progressBars[i].animate(a[i]); // Number from 0.0 to 1.0
  }
}

function destroyall() {
  var i;
  progressBars.forEach(function(bar) {
    bar.destroy();
  });
  //progressBars = [];
}

function destroycircle() {
  progressBars.forEach(function(bar) {
    bar.destroy();
  });
}
