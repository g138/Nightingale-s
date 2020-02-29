function setup() {
    noLoop();
	createCanvas(3000, 2000) //Canvas size 400*400 
} 
	
function draw() { 

	data ={	"data1" :[
  	{
    	"Month": "Apr 1854",
    	"Average_size_of_army": 8571, 
    	"Zymotic_diseases": 1, 
    	"Wounds_and_injuries": 0, 
    	"All_other_causes": 5 
  	},
  	{
    	"Month": "May 1854", 
    	"Average_size_of_army": 23333, 
    	"Zymotic_diseases": 12, 
    	"Wounds_and_injuries": 0, 	
    	"All_other_causes": 9 
  	},
  	{
    	"Month": "Jun 1854", 
    	"Average_size_of_army": 28333, 
    	"Zymotic_diseases": 11, 
    	"Wounds_and_injuries": 0, 
    	"All_other_causes": 6 
  	},
  	{
    	"Month": "Jul 1854", 
    	"Average_size_of_army": 28722, 
    	"Zymotic_diseases": 359, 
    	"Wounds_and_injuries": 0, 
    	"All_other_causes": 23 
  	},
  	{	
    	"Month": "Aug 1854", 
    	"Average_size_of_army": 30246, 
    	"Zymotic_diseases": 828, 
    	"Wounds_and_injuries": 1, 
    	"All_other_causes": 30 
  	},
  	{
    	"Month": "Sep 1854", 
    	"Average_size_of_army": 30290, 
    	"Zymotic_diseases": 788, 
    	"Wounds_and_injuries": 81, 
    	"All_other_causes": 70 
  	},
  	{
    	"Month": "Oct 1854", 
    	"Average_size_of_army": 30643, 
    	"Zymotic_diseases": 503, 
    	"Wounds_and_injuries": 132, 
    	"All_other_causes": 128 
  	},
  	{
    	"Month": "Nov 1854", 
    	"Average_size_of_army": 29736, 
    	"Zymotic_diseases": 844, 
    	"Wounds_and_injuries": 287, 
    	"All_other_causes": 106 
  	},
  	{
    	"Month": "Dec 1854", 
    	"Average_size_of_army": 32779, 
    	"Zymotic_diseases": 1725, 
    	"Wounds_and_injuries": 114, 
    	"All_other_causes": 131 
  	},
  	{
    	"Month": "Jan 1855", 
    	"Average_size_of_army": 32393, 
    	"Zymotic_diseases": 2761, 
    	"Wounds_and_injuries": 83, 
    	"All_other_causes": 324 
  	},
  	{
    	"Month": "Feb 1855", 
    	"Average_size_of_army": 30919, 
    	"Zymotic_diseases": 2120, 
    	"Wounds_and_injuries": 42, 
    	"All_other_causes": 361 
  	},
  	{
    	"Month": "Mar 1855", 
    	"Average_size_of_army": 30107, 
    	"Zymotic_diseases": 1205, 
    	"Wounds_and_injuries": 32, 
    	"All_other_causes": 172 
  	}
    ],
    "data2" :[
        {
          "Month": "Apr 1855",
          "Average_size_of_army": 32252, 
          "Zymotic_diseases": 477, 
          "Wounds_and_injuries": 48, 
          "All_other_causes": 57 
        },
        {
          "Month": "May 1855", 
          "Average_size_of_army": 35473, 
          "Zymotic_diseases": 508, 
          "Wounds_and_injuries": 49,   
          "All_other_causes": 37 
        },
        {
          "Month": "Jun 1855", 
          "Average_size_of_army": 38863, 
          "Zymotic_diseases": 802, 
          "Wounds_and_injuries": 209, 
          "All_other_causes": 31 
        },
        {
          "Month": "Jul 1855", 
          "Average_size_of_army": 42647, 
          "Zymotic_diseases": 382, 
          "Wounds_and_injuries": 134, 
          "All_other_causes": 33 
        },
        {  
          "Month": "Aug 1855", 
          "Average_size_of_army": 44614, 
          "Zymotic_diseases": 483, 
          "Wounds_and_injuries": 164, 
          "All_other_causes": 25 
        },
        {
          "Month": "Sep 1855", 
          "Average_size_of_army": 47751, 
          "Zymotic_diseases": 189, 
          "Wounds_and_injuries": 276, 
          "All_other_causes": 20 
        },
        {
          "Month": "Oct 1855", 
          "Average_size_of_army": 46852, 
          "Zymotic_diseases": 128, 
          "Wounds_and_injuries": 53, 
          "All_other_causes": 18 
        },
        {
          "Month": "Nov 1855", 
          "Average_size_of_army": 37853, 
          "Zymotic_diseases": 178, 
          "Wounds_and_injuries": 33, 
          "All_other_causes": 32 
        },
        {
          "Month": "Dec 1855", 
          "Average_size_of_army": 43217, 
          "Zymotic_diseases": 91, 
          "Wounds_and_injuries": 18, 
          "All_other_causes": 28 
        },
        {
          "Month": "Jan 1856", 
          "Average_size_of_army": 44212, 
          "Zymotic_diseases": 42, 
          "Wounds_and_injuries": 2, 
          "All_other_causes": 48 
        },
        {
          "Month": "Feb 1856", 
          "Average_size_of_army": 43485, 
          "Zymotic_diseases": 24, 
          "Wounds_and_injuries": 0, 
          "All_other_causes": 19 
        },
        {
          "Month": "Mar 1856", 
          "Average_size_of_army": 46140, 
          "Zymotic_diseases": 15, 
          "Wounds_and_injuries": 0, 
          "All_other_causes": 35 
        }
      ]
 }
// console.log(data.data1[0].Average_size_of_army)
 var lastAngle = PI;
 var x1 = 2000;
 var y1 = 500;
 var x2 = 1000;
 var y2 = 500;
 var arr_max = [];
 var i = radians(180);
 var max_val = 0;
 textSize(20);
 text('APRIL 1855 to MARCH 1856',850,70);
 text('APRIL 1854 to MARCH 1855',1850,70);
 for(j in data.data1)
 {
    var t = ((12000 / data.data1[j].Average_size_of_army)*12)/Math.PI;
    var Zymotic_diseases1 = sqrt(data.data1[j].Zymotic_diseases * t); 
    var Wounds_and_injuries1 = sqrt(data.data1[j].Wounds_and_injuries * t); 
    var All_other_causes1 = sqrt(data.data1[j].All_other_causes * t);

    var arr = [Zymotic_diseases1, Wounds_and_injuries1, All_other_causes1];
    var min_val = Math.min.apply(null, arr);
    max_val = Math.max.apply(null, arr);
    arr.splice(arr.indexOf(max_val), 1)
    var second_max = Math.max.apply(null, arr);
    arr_max[j] = max_val*5;

    fill('#66ffff');
    arc(x1,y1,max_val*10,max_val*10,i,i+radians(360/12));
    fill('#000000');
    arc(x1,y1,second_max*10,second_max*10,i,i+radians(360/12));
    fill('#ff0066');
    arc(x1,y1,min_val*10,min_val*10,i,i+radians(360/12));
    
    var cx=x1+max_val*6*cos(i+(radians(15)));
    var cy=y1+max_val*6*sin(i+(radians(15)));
    strokeWeight(0);
    fill('black');
    textSize(10);
    text(data.data1[j].Month,cx,cy);
    i = i + radians(360/12);
}

var i = radians(180);
for(j in data.data2){

    var t = ((12000 / data.data2[j].Average_size_of_army)*12)/Math.PI;
    var Zymotic_diseases1 = sqrt(data.data2[j].Zymotic_diseases * t); 
    var Wounds_and_injuries1 = sqrt(data.data2[j].Wounds_and_injuries * t); 
    var All_other_causes1 = sqrt(data.data2[j].All_other_causes * t);
    var arr = [Zymotic_diseases1, Wounds_and_injuries1, All_other_causes1];
    var min_val = Math.min.apply(null, arr);
    var max_val = Math.max.apply(null, arr);
    arr.splice(arr.indexOf(max_val), 1);
    var second_max = Math.max.apply(null, arr);
    fill('#66ffff');
    arc(x2,y2,max_val*20,max_val*20,i,i+radians(360/12));
    fill('#000000');
    arc(x2,y2,second_max*20,second_max*20,i,i+radians(360/12));
    fill('#ff0066');
    arc(x2,y2,min_val*20,min_val*20,i,i+radians(360/12));
    var cx=x2+max_val*12*cos(i+(radians(15)));
    var cy=y2+max_val*12*sin(i+(radians(15)));
    strokeWeight(0);
    fill('black');
    textSize(10);

    text(data.data2[j].Month,cx,cy);
    i = i + radians(360/12);
}

function line_join(){
  var t1 = ((12000 / data.data2[0].Average_size_of_army)*12)/Math.PI;
  var Zymotic_diseases = sqrt(data.data2[0].Zymotic_diseases * t1); 
  var Wounds_and_injuries = sqrt(data.data2[0].Wounds_and_injuries * t1); 
  var All_other_causes = sqrt(data.data2[0].All_other_causes * t1);
  var arr = [Zymotic_diseases, Wounds_and_injuries, All_other_causes];
  maxr = x2 - (Math.max(...arr)*10);

  var t = ((12000 / data.data1[11].Average_size_of_army)*12)/Math.PI;
  var Zymotic_diseases1 = sqrt(data.data1[11].Zymotic_diseases * t); 
  var Wounds_and_injuries1 = sqrt(data.data1[11].Wounds_and_injuries * t); 
  var All_other_causes1 = sqrt(data.data1[11].All_other_causes * t);
  var arr1 = [Zymotic_diseases1, Wounds_and_injuries1, All_other_causes1];
  maxr1 = x1 - (Math.max(...arr1)*5);
  strokeWeight(1)
  line(maxr,500,1300,800);
  line(1300,800,maxr1,500);
}
line_join();
} 