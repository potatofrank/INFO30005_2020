# info30005 deliverable3 API server + front end

**Login:**
The current log in function requires a username and a password. We decided not to have a sign up function and give out accounts when needed. To log in, use one of our sample accounts <br /> username: admin <br />
password: admin <br />

**Data Filling:**
If you successfully log in with our admin account details, you would be able to fill in relevant information of a patient who has been tested positive for Cov-19. The required fields of the information can be gender, age, symptom, confirmed date, etc. This is submitted by government officers and doctors. There's another section named "Submit Overview Data" that can update total accumulated cases, cured and death cases in Melbourne. We're assuming that the overview data is accurately collected by authorized departments and will be updated frequently by a programmer/maintainer. We can also delete cases by specifying the case object ID in database.
There's also an advice/support submitting section available for all viewers as well which does not require logging in, thus non-authorized users can publish their thoughts about our website, or they can ask for any suggestions about protecting themselves from Covid-19.
The overview data is just an back up plan and will only be used when we don't have valid single cases, and we will need to manually enter overview data.

**Load Data:**
Administrators who has accessibility to the admin page would be able to check all the case data they have entered. There are 3 kinds of data form that admins can view: individual patient data, overview of Melbourne pandemic data, advice data from all viewers of the website.
There are 3 buttons displayed at the admin page, and the data can be loaded by clicking the buttons.

**Display Overview**
After the homepage is loaded, the users can see the accumulated case number, this data is dynamic and will change when the single case database is changed.

**search**
Normal users can view the area information: case number, most recent case date and case symptom by specifying the corresponding area. To try searching results, try "city of yarra" or "city of Melbourne".


## Contributors

-Yichao Yao <yichaoy1@student.unimelb.edu.au> <br />
-Keyue Huang <keyueh@student.unimelb.edu.au> <br />
-Haocong Ceng <haocongc@student.unimelb.edu.au> <br />
-Xuelun Wang <xuelunw@student.unimelb.edu.au> <br />

## App Url
[https://ultraprotection.herokuapp.com/]

## License & copyright
© Team Ultra Protection, University of Melbourne
