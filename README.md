# info30005 project2 API server + front end

**Login:**
The current log in function requires a username and a password. There's currently no sign up funcion implemented, thus we only use an admin account to log in. The details of the admin account are hard coded inside the "login.js" file. To log in, enter the username: admin <br />
password: admin <br />

**Data Filling:**
If you successfully log in with our admin account details, you would be able to fill in relevant information of a patient who has been tested positive for Cov-19. The required fields of the information can be gender, age, symptom, confirmed date, etc. This is submitted by government officers and doctors. There's another section named "Submit Overview Data" that can update total accumulated cases, cured and death cases in Melbourne. We're assuming that the overview data is accurately collected by authorized departments and will be updated frequently by a programmer/maintainer. We can also delete cases by specifying the case object ID in database.
There's also an advice/support submitting section available for all viewers as well which does not require logging in, thus non-authorized users can publish their thoughts about our website, or they can ask for any suggestions about protecting themselves from Covid-19.

**Load Data:**
Administrators who has accessibility to the admin page would be able to check all the case data they have entered. There are 3 kinds of data form that admins can view: individual patient data, overview of Melbourne pandemic data, advice data from all viewers of the website.
There are 3 buttons displayed at the admin page, and the data can be loaded by clicking the buttons.

**Display Overview**
After the homepage is loaded, the users can see the latest overview data of Melbourne's pandemic data. Every time the "Overview Data" section is updated in database, the homepage overview data will be refreshed. We can check the data date in front of the table to make sure it is the most recent data.

**Homepage map[Not completely implemented]:**
A map of Melbourne with its main suburbs and cities can be seen on the homepage, the areas are accurately divided. When we move our cursor onto the names of those areas on the map, we can see a colour change on it, those names will turn into Cov-19 confirmed case number during later development, instead of a colour change.

**Charts[Not completely implemented]:**
The chart templates of the pandemic trend has been successfully loaded in the "Charts" page, whereas due to the time shortage and lack of data, the mock up data has not bee added.




**Notice:**
Some of the wording of the information filling section would appear awkawrd and confusing, we're still figuring out the best field names and format, this will be improved during later development. 

## Contributors

-Yichao Yao <yichaoy1@student.unimelb.edu.au> <br />
-Keyue Huang <keyueh@student.unimelb.edu.au> <br />
-Haocong Ceng <haocongc@student.unimelb.edu.au> <br />
-Xuelun Wang <xuelunw@student.unimelb.edu.au> <br />

## App Url
[https://ultraprotection.herokuapp.com/]

## License & copyright
© Team Ultra Protection, University of Melbourne





