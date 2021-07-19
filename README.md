#  WEATHER DASHBOARD

* The **client** requested a Webpage that allows users to know the current *weather*, and weather forecast, in real time. 

* The **Client** wanted to check the current weather conditions at the top of the screen.

* The **Client** wanted to check the current *date*, *temp*


* The **client** wanted to know the daily weather contitions, and the forecast for the **next five days**. 

* The **Client** wanted a list of the *cities* search button  

# Tegnology
 
  * JavaScript
  * Jquery
  * Boostrap
  * Fetch
  * Moment
  * Localstore

## Functionality

* When the *user* enters a **City** name, and presses the button, the request goes to the *url* of the **OMDb API**.

* with this request we will get information on *temperature* , *wind speed* ,*humidity* , *icon*, *latitude*, *longitude*.

* with *longitude* and *latitude* we can send another request to the same **OMDb API** but different  *url.*

* With thh second request we will get **UV Idex**  and the forecast for the next five days showing *temperature*, *humidity*,*wind speed.*

* Using *Moments* we will get the *current* time, and the next *five* days date.

* The LocalStorage saves the name of the *cities* to create the buttons.

* Once we have all the information we will show it in 4 differents boostrap cards

* The First Card has the **Input** and the **Search Button.**

* The second card has the **current** 
                                        * date  
                                        * icon
                                        * temperature
                                        * Wind Speed
                                        * Humidity
                                        * UV Index

 * the third card has a list of *Buttons* created with the *LocalStorage* `name of the city data`.

 * the fouth card has five **subCArds** each card has 

                                          * Date for the `next 5 days`.
                                          * Icon for the `next 5 days`.
                                          * Temperature  for the `next 5 days`
                                          * wind speed for the 'next 5 days `
                                          * Humidity for the next 5 days`






**MOCK-UP

GIF of the functionality:

![Aniweather](https://user-images.githubusercontent.com/83906297/126128995-688f93e2-4289-4bb7-8025-52bef26b2069.gif)








