## Plan for India!
A state-of-the-art visualization engine for Govt. of India data. 
***
Visualization by Ajay Vishwanathan ( https://github.com/ajatix)

Data-processing by Pranav Rao. 
***

You can see a working demo here : http://pnpranavrao.github.io/12thFiveYearPlan_Hackathon/

The data processing workflow (using Python-Pandas) can be found here : 

* http://nbviewer.ipython.org/5327635
* http://nbviewer.ipython.org/5327650

### Sectors : Health and Skill Development
(Our project brings out the elaborate relationships between different sectors. Hence, we have chosen two sectors for our demo here.)

### Summary of your idea
India is the second most populous country in the world. It's perhaps the most diverse of them all. Understandably, when you have a constituency of more than 1 billion people, planning for everyone's welfare and development is no easy task.
So how does the Planning commision go about its task?
The answer is available in a single word – Data. Yes, the Planning commision has accumulated perhaps the most accurate datasets available on our country, analysed them, compared progress over the years and allocated funds only after this process of thorough analysis. 
What we wanted to do through our project was to give the common man a very intuitive way to play with the vast data available. We wanted every citizen to be able to ask basic questions like :
* What's the relationship between say employment and education?
* How is public health corelated to primary education leves?
.. and get all the answers in the best way possible – through Data.

There are 348 datasets on the data.gov.in website. By allowing citizens to mix, match and compare more than one dataset at a time, we have made possible 165 new and unique visualisations in just 24 hours.
The website we built facilitates sharing and discussion on social media like Facebook/Twitter thus spreading the word about the 12th Five year plan and also educating Indians.
And this is only the beginning!

### Intended audience
Our intended audience is every inquisitive Indian. 
* The data is directly taken from the data.gov.in website, and is 100% accurate. Thus, the visualizations generated from our website can be used by politicians, civil servants and journalists for use in their profession. 
* On a broader stroke, the interface of the app is dead simple to use and can thus be used by anybody. The social sharing features (Facebook, Twitter) have been incorporated so that it can easily be discovered and discussed by every citizen of the country.

### Datasets used by you

All the datasets used were taken from https://data.gov.in/hackathon/sectors. Particularly, we used the following datasets : 

* [State wise/Sector wise Approved Outlay, Revised Outlay and Expenditure for Annual Plan 2011-12](http://data.gov.in/dataset/state-wisesector-wise-approved-outlay-revised-outlay-and-expenditure-annual-plan-2010-11-0)
* [Factory Employment By States](http://data.gov.in/dataset/factory-employment-states)
* [Estimated Employment In The Public And Private Sectors](http://data.gov.in/dataset/estimated-employment-public-and-private-sectors)
* [Number Of Teachers In Educational Institutions (All India And State wise)] (http://data.gov.in/dataset/number-teachers-educational-institutions-all-india-and-state-wise)

### Limitations or Assumptions

* Currently the visualizations only mixes and matches among 10 different datasets. There are 348 such datasets available which when completed give a better picture.
* A 3D bar graph would give a better representation of the data than the current colour chart. We are working on this.
* Scientific Result : Correlation  is not equal to causation. Sometimes data which looks like they are related might not be so in reality. 

### Project inspiration

Honestly, we were inspired by the complexity of planning for an entire country's needs for the next half decade. At a time when we struggle to make plans for the coming weekend, we thought it was an interesting problem to figure out especially when there was a rich dataset provided.

### Similar projects
India population : http://bl.ocks.org/karmadude/4526201

### Software used

There are two parts in the project : 

##### Front end : 
The rich interativity is made possible due to a fantastic javascript library called d3.js. You can read more about it on d3js.org

##### Back end:
All the data available on the data.gov.in was further processed, cleaned and integrated with a Python library called pandas. (pandas.pydata.org) 

### Screen shots

//Todo
