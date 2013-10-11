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

var kickHandler = function(mag, spectrum){

  var arr = [];
  
  for(var i = 1; i <= 10 ; i++){
    var average = 0;
    for(var j = i*40 - 40 ; j < i*40; j++){
      average += spectrum[j];
    }
    if(i===1){
      arr.push(average/100);
    }else{
      arr.push(average/40);
    }
  };

  var y = d3.scale.linear().domain([0,d3.max(arr)]).range([100,0]);

  d3.selectAll('rect').data(arr).transition().duration(200).attr('y',function(d){return y(d) + "%"})
              .transition().duration(400).attr('y','90%');



};