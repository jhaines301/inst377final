# Project Title: COVID-19 in India

## Description of Project

Our proposed system aims to display statistics related to COVID-19 in India in a way that is presentable and easy to acjnowledge, compare and learn from. This will be presented on a state by state basis and is viewable to both the client and general public. Our decision to work with COVID-19 cases in India API as it provides daily metrics throughout their research period of the number of tested, recovered, confirmed, deceased, and vaccinated individuals for each state in the country. This can help provide a daily outlook into the state of Covid-19 in the country.

## Description of target browsers

For this project, our target devices would be Desktops and mobile. It is done in a way that it will be usable on different browsers such as Chrome, Firefox,...etc

# Link to User Manual [link](https://github.com/jhaines301/inst377final/blob/main/README.md#user-manual)
# Link to Developer Manual [link](https://github.com/jhaines301/inst377final/blob/main/README.md#developer-manual)

# User Manual

## Home Page
The home page prompts the user with a list of all states in India and their state code where they can choose multiple to then compare the selected state's cumulative total numbers from a selcted day in the range of conducting research. The result will be displayed as a group bar graph in which they are grouped by state with the metrics; Confirmed, Tested, Recovered, Deceased, and Vaccinated in which are quantified by the total reported people. Data available from start of Covid up til October 31st 2021. 

## About Page
Displays information about the nature of the project and said goals.

## Metrics Page
Tracks all states selected to be viewed in a chart by any user on a hosted server. Includes timestamps. Data pulled from backend database and updates dynamically as data appears.

# Developer Manual

(GET)
https://data.covid19india.org/v4/min/timeseries.min.json
: This GET request retrieves the statistics of a given state based on a given date

(GET)
https://countriesnow.space/api/v0.1/countries/states
: This GET request retrieves Country information and in this usage it was filtered to get the country data of India. The India data regarding states was then accessed and matched up the state codes to then find the correlating state code and full name.

(GET)
https://oynhaxlqqeiebrozutfk.supabase.co
: This GET Request is used to established backend connect with the Supabase database. The key is displayed in index.js. Connects with /metrics table that stores Timestamp's and States' selected by users. Is then used dynamically on metrics.html to update and display a table with metrics for which states are chosen and when via the Supabase database.

(POST)
https://oynhaxlqqeiebrozutfk.supabase.co
: This POST is used to input data into the Supabase database. The key is displayed in index.js. It inputs the timestamp and selected state via the established endpoints in index.js into the Supabase database. 

(Library)
https://cdn.jsdelivr.net/npm/chart.js
: This Library intakes the data and presents it in a bar graph that is simple to understand.

(Library)
https://cdn.jsdelivr.net/npm/flatpickr
: This Library intakes the range of research and prompts a calander with dates that have data being allowed to be selected in regards to each state.


The bugs that are known are the possible flawed dates within the data presented as some dates may be zeroed out despite the research being cumulative. Apart from that there hasn't been any other bugs discovered.

## Installation

1. Install Node.js [Download from here!](https://nodejs.org/en/download)
2. git installation [Download from here!](https://git-scm.com/downloads)
3. Visual Studio code [Click here!](https://code.visualstudio.com/Download) or any other popular coding editor.

## Node js modules installation
1. Cloning project repository
```
git clone https://github.com/jhaines301/inst377final.git
```
2. Installing node packages
```
npm install express body-parser nodemon
```
## Running the app
```
node index.js
```
```
```
localhost:4000/index.html


