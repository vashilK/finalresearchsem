var Total = 0;
var level = 0;
var percentage = 0;
$(document).ready(function() {
  $("#aptsubmit").click(function() {
    var i = 1;
    for (i; i < 10; i++) {
      var id = "#" + i;
      var b = id + " input[name='radio']:checked";
      var a = $(b).val();
      //increment val
      if (a == "good") {
        Total++;
      }
    }

    percentage = ((Total / 10) * 100);


    if (percentage >= "67") {
      level = "Advance";
    } else
    if (percentage >= "34" && percentage < "67") {
      level = "Intermediate";
    } else
    if (percentage >= "0" && percentage < "34") {
      level = "Beginner";
    }
    //$('#ans').html(+Total+ ' good answers. You are a level ' +level+ ' Student')
    //localStorage.setItem('aptval', percentage);
    sendaptvaltomem();
    learningcard();
    $.mobile.changePage("#testresults", {
      reverse: false,
      transition: "pop"
    });
    roll(percentage);
  })

  function sendaptvaltomem() {
    db = openDatabase("EngAi", "1.0", "Database for Ai", 2 * 1024 * 1024);
    //ALLOWS execution of all functions
    db.transaction(function(tx) {
      //CREATE TABLE STUDENT
      tx.executeSql('UPDATE stud SET level=?, pretest=? WHERE rowid=1', [percentage, "true"]);
    });
  }

  function learningcard() {
    db = openDatabase("EngAi", "1.0", "Database for Ai", 2 * 1024 * 1024);
    db.transaction(function(tx) {
      tx.executeSql('SELECT * FROM stud WHERE rowid=1', [], function(tx, results) {
        var apt = results.rows[0].level;
        if ((apt > 0) && (apt <= 40)) {
          $('#K1').show('fast');
          $('#K2').hide('fast');
          $('#K3').hide('fast');
        } else if ((apt > 40) && (apt <= 80)) {
          $('#K1').show('fast');
          $('#K2').show('fast');
          $('#K3').hide('fast');
        } else if ((apt > 80) && (apt <= 100)) {
          $('#K1').show('fast');
          $('#K2').show('fast');
          $('#K3').show('fast');
        }
      });
    });
  }

  //ANIMATE CIRCLE
  function roll(x) {
    var bar = new ProgressBar.Circle(containercircle, {
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
          circle.setText(value+"%");
        }

      }
    });
    var b = x / 100;
    bar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
    bar.text.style.fontSize = '2rem';
    bar.animate(b); // Number from 0.0 to 1.0
  }
});
