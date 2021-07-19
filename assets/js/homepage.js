// Api  key define like a variable
var apik="7e922e73dc43392c99f53d72874dafaf";
const citysearchinput = $('#inpp');
var citybutton = $('#bt1');


var img1=$('#img1c');
var city1=$('#citydate');
var temp1=$('#temp1');
var wind1=$('#wind1');
var humi1=$('#humi1');
var uv1=$('#uv');
var time1f=$('#time1f');
var imgc1=$('#imgc1');
var tempc1=$('#tempc1');
var winc1=$('#winc1');
var humc1=$('#humc1');
var time2f=$('#time2f');
var imgc2=$('#imgc2');
var tempc2=$('#tempc2');
var winc2=$('#winc2');
var humc2=$('#humc2');
var time3f=$('#time3f');
var imgc3=$('#imgc3');
var tempc3=$('#tempc3');
var winc3=$('#winc3');
var humc3=$('#humc3');
var time4f=$('#time4f');
var imgc4=$('#imgc4');
var tempc4=$('#tempc4');
var winc4=$('#winc4');
var humc4=$('#humc4');
var time5f=$('#time5f');
var imgc5=$('#imgc5');
var tempc5=$('#tempc5');
var winc5=$('#winc5');
var humc5=$('#humc5');


var time; 
var uvurl;
var forescast; 
var citys;
var timeheader;
var uvi;
var storedcitys;
var cont=0;
var arrayin=[];
var arrayout=[];
var cityload="Bali";

//****************************************calling nain Function****************************************************
init();

function init(){
 //*****************************************oad tha webpage without click******************************************
$(document).ready(function(){
 $("#bt1").click();
 getwinfo(cityload);
 //var cityload="Bali";
});
}
//*********************************************button search main button********************************************
$("#bt1").on("click", function (event) {
       event.preventDefault();  
       citysearchinput.html('');
       cleancard();
                
citys = citysearchinput.val();
render(citys);
  if (citys) {
    getwinfo(citys);   
    }
   else {
    
  }
 
 });



//**********************************openweather API call by city  ***************************



var getwinfo = function (city) {
 
var currentime='https://api.openweathermap.org/data/2.5/weather?q='+city+'&units=metric&uvi&appid='+apik;
   
              fetch(currentime)
              .then(function (response) {
                if (response.ok) {
                      response.json().then(function (data) { 
                      displayctime(data,city);
                      savecity(city); 
                    });

                    //fetch numer one callin by city name
                     } else {
                        alert('Error: ' + response.statusText);
                             }
                        })
                        .catch(function (error) {
                        alert('Unable to connect to API');
                        });

                    };
//**********************************************************************************************
//*****************************GETTING DATA FOR API *****************************************************************


var displayctime = function (data,city) {
  
  var temp = data.main.temp;
  var wind = data.wind.speed;
  var humi = data.main.humidity;
  var  longitude=data.coord.lon;
  var latitude=data.coord.lat;
  var icon=data.weather[0].icon;
  console.log("icon "+icon);
  
//************************************************************************************************
//************************************************************************************************ 
         
      displayTime();
//*********************************************************************************************** 
//**********************************************************************************************


//********* url to getting icons and add to the html *******************************************
//**********                                     ***********************************************
      
    var iconUrl = "http://openweathermap.org/img/w/"+ icon + ".png";
      
    console.log(iconUrl);
    
    city1.append(city,' ',timeheader);
    img1.attr('src', iconUrl);
      

//***************    add Temp, wind, humidity  adding to html  ************ **************************
//***************                                              ***************************************
  var temp1card1 = $("<li class='list-group-item'>"+"Temp:  "+temp+" °C "+"</li>");
  temp1.append(temp1card1);
  var wind1card1 = $("<li class='list-group-item'>"+"Wind:  "+wind+"  Mph"+"</li>");
  wind1.append(wind1card1);
  var humi1card1 = $("<li class='list-group-item'>"+"Humidity:  "+humi+" %"+"</li>");
  humi1.append(humi1card1);
 
  
//************************* api openweather using latitude and longitude *******************************
//*************************                                              *******************************
  var urlweather= 'https://api.openweathermap.org/data/2.5/onecall?lat='+latitude+'&lon='+longitude+'&units=metric&exclude=minutely,hourly,alerts&appid='+apik;
        
  
                  console.log("url para revisar los iconos "+ urlweather);

                 fetch(urlweather)
                .then(function (response) {
                     if (response.ok) {
                     response.json().then(function (forc) {
                     displayforecast(forc);
                     });
                     }
                 else {
                        alert('Error: ' + response.statusText);
                      }
                    })
                       .catch(function (error) {
                       alert('Uvi couldnt found');
                     });  
            }

  //****************************************************************************************************
  //****************************************************************************************************
  
  function displayforecast(forc){   
//define arrays to grap the API info
    var cardtemp=[];
    var cardwind=[];
    var cardhumidity=[];
    var cardicon=[];
    var iconurlc=[];
    var time1day=[];   
    let uvIn = forc.current.uvi

//****************************uv add style************************************************************


    var uvitext2 =$("<li>")
    uvitext2.addClass("list-group-item d-flex")
    uvitext2.text("UV Index: ")
    var indexValue = $("<p>")
    indexValue.addClass("uvIndexClass")
    indexValue.text(uvIn)

    if (uvIn >= 0 && uvIn  <= 2) {
      indexValue.addClass("A");
    } else if (uvIn  >= 3 && uvIn  <= 5) {
      indexValue.addClass("B");
    } else if (uvIn >= 6 && uvIn  <= 7) {
      indexValue.addClass("C");
    } else if (uvIn  >= 8 && uvIn  <= 10) {
      indexValue.addClass("D");
    } else {
      indexValue.addClass("danger");
    }
       uv1.append(uvitext2);
       uvitext2.append(indexValue);
       $('#day1').append(time1day);
   
//*********************************************data from API getting by array ***************************
    for(var i=0;i<5;i++){               
        cardtemp[i]=forc.daily[i].temp.day;
        cardwind[i]=forc.daily[i].wind_speed;
        cardhumidity[i]=forc.daily[i].humidity;
        cardicon[i]=forc.daily[i].weather[0].icon;
        iconurlc[i] = "http://openweathermap.org/img/w/"+ cardicon[i] + ".png";
        time1day[i]= moment().add(i+1,'days').format('L');          
      }
//***********************Card #1****************************************************************
       time1f.append(time1day[0])
      imgc1.attr('src', iconurlc[0]);
      var tempp= $("<p id=tempc1>"+"Temp: "+ cardtemp[0] +" °C"+"</p>"); 
      tempc1.append(tempp); 
      var windp= $("<p id=winc1>"+"wind: "+ cardwind[0] +" Mph"+"</p>"); 
      winc1.append(windp); 
      var humip= $("<p id=humc1>"+"Hum: "+ cardwind[0] +" %"+"</p>"); 
      humc1.append(humip);    
 //***********************Card2******************************************************************   
 time2f.append(time1day[1])
 imgc2.attr('src', iconurlc[1]);
 var temp2= $("<p id=tempc2>"+"Temp: "+ cardtemp[1] +" °C"+"</p>"); 
 tempc2.append(temp2); 
 var wind2= $("<p id=winc2>"+"wind: "+ cardwind[1] +" Mph"+"</p>"); 
 winc2.append(wind2); 
 var humcc2= $("<p id=humc2>"+"Hum: "+ cardwind[1] +" %"+"</p>"); 
 humc2.append(humcc2); 
 
 //***********************Card3******************************************************************  
 time3f.append(time1day[2])
 imgc3.attr('src', iconurlc[2]);
 var tempp3= $("<p id=tempc3>"+"Temp: "+ cardtemp[2] +" °C"+"</p>"); 
 tempc3.append(tempp3); 
 var wind3= $("<p id=winc3>"+"wind: "+ cardwind[2] +" Mph"+"</p>"); 
 winc3.append(wind3); 
 var humcc3= $("<p id=humc2>"+"Hum: "+ cardwind[2] +" %"+"</p>"); 
 humc3.append(humcc3); 
 //***********************Card4****************************************************************** */  

 time4f.append(time1day[3])
 imgc4.attr('src', iconurlc[3]);
 var temp4= $("<p id=tempc4>"+"Temp: "+ cardtemp[3] +" °C"+"</p>"); 
 tempc4.append(temp4); 
 var wind4= $("<p id=winc4>"+"wind: "+ cardwind[3] +" Mph"+"</p>"); 
 winc4.append(wind4); 
 var humcc4= $("<p id=humc4>"+"Hum: "+ cardwind[3] +" %"+"</p>"); 
 humc4.append(humcc4); 
 //***********************Card5****************************************************************** */  

 time5f.append(time1day[4])
 imgc5.attr('src', iconurlc[4]);
 var temp5= $("<p id=tempc5>"+"Temp: "+ cardtemp[4] +" °C"+"</p>"); 
 tempc5.append(temp5); 
 var wind5= $("<p id=winc5>"+"wind: "+ cardwind[4] +" Mph"+"</p>"); 
 winc5.append(wind5); 
 var humcc5= $("<p id=humc5>"+"Hum: "+ cardwind[4] +" %"+"</p>"); 
 humc5.append(humcc5); 
    }
//*********************************************************************************************************
//*******************************END FUNCTION DISPLAYFORECAST************************************************************************** 
 
/*************************************///////moment element to get time  ////////**************************
        
         function displayTime() {
             timeheader = moment().format('L');
            
             return timeheader;
            }
  
//*********************************** localstorage *********************************************************
//***********************************              ********************************************************* 
        function savecity(citys){
         
            localStorage.setItem("cityname",citys);
           
          }

        function render(citys){
             var data=localStorage.getItem("cityname");
             
            //***************************add  7 Buttons in a class *******************************88 
             if(cont<7 && data!="Bali"){
              $(document).ready(function() {
              $('#mainbutton').append(
                  $(document.createElement('button')).prop({
                      type: 'button',
                      innerHTML: data,
                      class: 'btn btn-primary border border-white p-10',
                      id:'btn_'+data
                  })
                   );
                    $('#btn_'+data).on("click", function (event) {
                      event.preventDefault();
                             cleancard();                             
                             getwinfo(data);
              
                      });
              cont++;
            });
            }
            }  
  //****************** clean Cards function **************************************************888
             function cleancard()
          {    
            $('#cardtop div,li,h5,img').html('')
            $('#cards1 h5,img,p').html('')
                          
          }
