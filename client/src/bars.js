var init = function(){

  var canvas = d3.select('svg');
  var data = ['0%', '10%', '20%', '30%', '40%', '50%', '60%', '70%', '80%', '90%'];
  var colors = ['rgb(175, 175, 175)',
                'rgb(185, 185, 185)',
                'rgb(17, 175, 175)',
                'rgb(175, 175, 175)',
                'rgb(175, 175, 175)',
                'rgb(175, 175, 175)',
                'rgb(175, 175, 175)',
                'rgb(175, 175, 175)',
                'rgb(175, 175, 175)',
                'rgb(175, 175, 175)']


  for (var i = 0; i < data.length; i++) {
    var color = 100+i*12;
    canvas.append('rect').attr({
      x: data[i],
      y: '90%',
      width: '10%',
      height: '100%',
      fill: 'rgb('+color+','+color+','+color+')',
      rx: 7,
      ry: 7
    });

  }


}
init();

var kickHandler = function(mag){

  var heightArr = [(15+Math.random()*20-10)+'%',
                    (25+Math.random()*20-10)+'%',
                    (35+Math.random()*20-10)+'%',
                    (45+Math.random()*20-10)+'%',
                    (55+Math.random()*20-10)+'%',
                    (65+Math.random()*20-10)+'%',
                    (75+Math.random()*20-10)+'%',
                    (65+Math.random()*20-10)+'%',
                    (55+Math.random()*20-10)+'%',
                    (45+Math.random()*20-10)+'%',];


  d3.selectAll('rect').data(heightArr).transition().duration(200).attr('y',function(d){return d})
              .transition().duration(400).attr('y','90%');



};