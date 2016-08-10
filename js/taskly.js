

var intro_section = "<h1>Taskly</h1>"+
  '<div class="italic">Because we all need a plan to bake a cake or build a billion dollar company</div>'+
  '<p> Taskly is a Project management software for individuals, small businesses and large corporations alike. It helps you achieve great results by proving tools that are so easy to use, even a 5 year old can start planning his homework</p>';

var challenge = '<h4>The Challenge</h4>'+
    '<h1>Focus on Ease</h1>'+
    '<p class="italic"> This is a side project that I am currently working in my UX Design course at careerFoundry.com. I was given the below challenge to build a project software management application based on the business needs.</p>'+
    "<p>Taskly is a startup, which is working on a new approach towards providing the project management software as a service to individuals to small to medium size businesses.</p>"+ 
    "<p>Their main focus is to build a product that will help customers achieve great results by providing tools that are easy to use and can help teams plan, track and maintain projects, communicate effectively among the teams and in turn increase productivity.</p>";

var role ='<h1>My Role</h1>'+
    '<p>This project took place between Nov 2015 and June 2016. I worked on this project as a userExperience Designer for UX design course at careerFoundry.</p>'+
    '<p>I am responsible for the research, interaction design, visual design and copywriting.</p>';


var competitiveAnalysis_header = '<h4>The Discovery</h4>'+
  '<h1>Competitive Analysis</h1>'+
  '<p>To understand the current market in project management software,'+ 
  ' I did a thorough research on the possible competitors for Taskly.'+ 
  'The insights I got from research opened up a different way of approach in designing Taskly.</p>'+ 
  '<p>Below are some of the keys insights during this process</p>'+
  '<p class="italic">To know more click on the categories below</p>' ;

var market_panel = 
    '<table><tr><th><h3>Company</h3></th><th><h3>About</h3></th><th><h3>Target Market</h3></th><th><h3>Marketing Strategy</h3></th><th><h3>Competitive Advantage</h3></th></tr>'+
    '<tr><td><h3>Asana</h3></td>'+
        '<td><p>Asana is a SaaS project management tool, with a mission to enable all kinds of teams to work together effortlessly.</p></td>'+
        '<td><p>Asana is oriented equally from the worlds largest growing companies to non-profits and local businesses which offer their products and services online.</p></td>'+
        '<td><ol>'+
            '<li>Publishing client stories on their company blog.</li>'+
            '<li>Writing blogs on new features on company blog.</li>'+
            '<li>Ads on social media, Like twitter, Facebook and LinkedIn and youtube.</li></ol></td>'+
        '<td><ol>'+
            '<li>Amazing Founders who has a track record of building great products.</li>'+ 
            '<li>Works with student pricing.</li>'+
            '<li>Works with premium organizations of 50+ members to get a dedicated customer success manager(CSM).</ol></td></tr>'+
    '<tr><td><h3>Basecamp</h3></td>'+ 
        '<td><p>Basecamp is a unique blend of six tools that every group needs to do any kind of work together. All under one roof.</p></td>'+ 
        '<td><p>All kinds of companies, that need project management. Companies small and big</p></td>'+
        '<td><ol>'+
            '<li>Blogs about company culture building, features of their product on medium</li>'+
            '<li>Workshops on different products and culture building.</li>'+ 
            '<li>Offering fremium for teams less than 15 members.</li>'+
            '<li>Wrote books on company culture</li></ol></td>'+
        '<td><ol><li>Simple Pricing structure.</li>'+ 
            '<li>No per user fee</li>'+ 
            '<li>100 percent uptime</li>'+ 
            '<li>Faster application load time</li>'+   
            '<li>Automatic check-in feature and reports feature</li></ol></td></tr>'+
        
    '<tr><td><h3>Jira</h3></td>'+
        '<td><p>JIRA Software is built for every member of your software team to plan, track, and release great software.</p></td>'+
        '<td><p>JIRA is for software development teams and for other teams that track issues for product development. The issue and project tracking software is ready for teams that use Agile methods such as Scrum or Kanban. </p></td>'+
        '<td><ol>'+
            '<li>Ads on Social Media</li>'+
            '<li>Contact CEO directly</li>'+
            '<li>Only agile based project management software</li></ol></td>'+
        '<td><ol>'+
            '<li>Niche product for software projects</li>'+
            '<li>Can host on your own server</li>'+ 
            '<li>Agile based</li>'+
            '<li>Total task management tool, right from scrum boards to reports</li></ol></td></tr></table>';


var product_panel = 
    '<tr><th><h3>Company</h3></th><th><h3>Product Features</h3></th><th><h3>Pricing and Cost</h3></th><th><h3>Calls to Action</h3></th><th><h3>Site Performance</h3></th></tr>'+
    '<tr><td><h3>Asana</h3></td>'+
         '<td><ol>'+
            '<li>Has embedded chat within the application.</li>'+
            '<li>Can create multiple projects, tasks and subtasks. Can assign tasks to anyone in the project.</li>'+
            '<li>Two different profiles for projects and personal.</li>'+
            '<li>Visual view of overall progress of the project.</li>'+
            '<li>Able to view deadlines of projects or tasks on calendar.</li>'+
            '<li>Integration of external tools</li></ol></td>'+
          '<td><ol>'+
            '<li>Free for teams up to 15.</li>'+ 
            '<li>8.33/month per user. Pricing per user is reduced in smaller teams.</li></ol></td>'+
          '<td><p>They have trial period and free for teams up to 15.</p></td>'+ 
          '<td><p>There is a bit of loading time, but not significant enough to annoy the user. </p></td></tr>'+
    '<tr><td><h3>Basecamp</h3></td>'+ 
         '<td><ol>'+
            '<li>Released new basecamp3 with features like chat, messages, To-do(tasks)</li>'+
            '<li>scheduling events or meetings, Automatic checkins, Docs and Files, Notifications</li>'+ 
            '<li>Has pings(one-on-one messaging).</li>'+
            '<li>Can generate Reports.</li>'+  
            '<li>Shortcuts to assignments and activity feed.</li></ol></td>'+
        '<td><ol>'+
            '<li>Basic Plan - 29/month</li>'+
            '<li>Basic plan with client integration - 79/month</li>'+ 
            '<li>Enterprise with 1TB of data - 3000/Year</li></ol></td>'+
        '<td><ol>'+
            '<li>They have trial for 14days</li>'+ 
            '<li>Can create how many ever basecamps for a standard price of 29/month.</li></ol></td>'+
        '<td><p>Loading time is very quick</p></td></tr>'+
    '<tr><td><h3>Jira</h3></td>'+
        '<td><ol>'+
            '<li>Has scrum board where stories/cards are moved from one status to another during a sprint. </li>'+
            '<li>Advanced reports on issues, backlog etc. </li>'+
            '<li>Can create any number of projects with enterprise edition. </li>'+
            '<li> Integration with outside tools.</li>'+
            '<li>6. Host on your own server. </li>'+
            '<li>Can check all the checkins made to a particular story ,with fisheye integration. </li></ol></td>'+
        '<td><ol>'+
            '<li>1. 10/month up to 10 users. Price increases with the number of users. 1500/month up to 2000 users.</li></ol></td>'+
        '<td><p>They have a try the service. Which is a good call to action. I don’t want to sign up without looking at the product. </p></td>'+
        '<td><p>Site is generally considered slower. Has lot of downtime.</p></td></tr>';


var usability_panel = '<tr><th><h3>Company</h3></th><th><h3>Usability</h3></th><th><h3>Layout & Navigation</h3></th><th><h3>Design Aesthetic</h3></th><th><h3>Content & Brand Voice</h3></th></tr>'+
    '<tr><td><h3>Asana</h3></td>'+
        '<td><p>Overall usability is pretty smooth.Names are little bit confusing at first, like campfires, pings, schedules, but ones you get what they mean, its a breeze. </p></td>'+
        '<td><ol>'+
            '<li>Layout is clean, simple and understandable.</li>'+
            '<li>Could improve making the tools thumbnails more appealing in colors and styling. </li>'+ 
            '</li>After a new  to-do task is added, you have to go back to dashboard to see the new todo. It would be better to show the list soon after its created .</li>'+
            '</li>Navigation is clear, I know where exactly I am in the application.</li></ol></td>'+
        '<td><ol>'+
            '<li>Application has very subtle colors. </li>'+
            '<li>Background is very neutral with lighter shades of cream. </li>'+ 
            '<li>Chat Text background is light blue. Text is black. </li>'+
            '<li>Theres color to the person icon</li></ol></td>'+
        '<td><p>Tone of the language across the app is very relaxed, casual and sometimes funny.</p></td></tr>'+
    '<tr><td><h3>Basecamp</h3></td>'+ 
        '<td><p>Easy to find things.But Task list is not very appealing. Its hard to find all the subtasks involved in it on a project level</p></td>'+ 
        '<td><ol>'+
            '<li>Clean and clear. Could improve on the tasks and dash board.</li>'+
            '<li> No Visual representation of project status based on subtasks for the main task. </li>'+
            '<li>No Project tracking based on assignee</li>'+
            '<li>Navigation is clear, I know where exactly I am in the application.</li>'+
        '<td><ol>'+
           '<li>Background is a combination of Navy and white. </li>'+
           '<li>Dashboards background is Navy and the rest is light blue to white tone. </li>'+ 
           '<li>Text is black. Highlighted area is light blue </li>'+ 
           '<li>People buttons are multicolored .</li>'+   
        '<td><p>Tone of the language is casual. Very close to reality. Relatable</li></ol></td></tr>'+
    '<tr><td><h3>Jira</h3></td>'+
        '<td><p>Not easy to find things, Name are confusing</p></td>'+
        '<td><p>I never will know where I am. Can’t find things without getting totally lost</p></td>'+
        '<td><ol>'+
            '<li>All the buttons and navigational panel is blue in color. Background is white. Text is black. Multiple colors for different  status. </li></ol></td>'+
        '<td><p>Tone of the language is very professional. </p></td></tr></table>';
var userInsights_header ='<h4>The Discovery 2</h1>'+ 
  '<h1>User Insights</h1>'+
  '<p>Conducted user interviews and surveys to get insights on what customers think about the existing '+ 
      'project management software and how we can improve. Below are the insights we gained through the process</p>';
var userInsights_content =
    '<div class="row">'+
    '<div class="col-6 col-6-height">'+
    '<div><img src="img/customer2.jpg" alt="Fashion"></div>'+
        '<caption><h2>Fashion Lovers</h2><caption>'+
        '<div><p>The primary segment are the customer who follow fashion and would like to buy new garments often</p></div></div>'+
     '<div class="col-6 col-6-height">'+   
     '<div><img src="img/customer1.jpg" alt="Ezvari"></div>'+
        '<caption><h2>Shop when needed</h2><caption>'+
        '<div><p>These are the segment of customers who would like to buy Indian clothing when they have an occassion it. 65 percent of the customer have about 7 to 10 events to attend and shops atleast twice a year</p></div>'+
        '</div></div>'+
    '<div class="row">'+
    '<div class="col-6 col-6-height">'+
        '<div><img src="img/pricesensitive.jpg" alt="Ezvari"></div>'+
        '<caption><h2>Price Sensitive</h2><caption>'+
        '<div><p>These segment of market is price sensitive. They like to find a balance between price and quality. Willing to spend up to 200 dollars</p></div>'+
    '</div>'+
    '<div class="col-6 col-6-height">'+
        '<div><img src="img/visual.jpg" alt="Ezvari"></div>'+
        '<caption><h2>Visualization</h2><caption>'+
        '<div><p>Customers find it hard to visualize how a garment might look on them. They are not sure how true the colors are</p></div>'+
    '</div>'+ 
    '</div>'+  
    '<div class="row">'+
    '<div class="col-6 col-6-height">'+
        '<div><img src="img/consultation.jpg" alt="Ezvari"></div>'+
        '<caption><h2>Design Consultation</h2><caption>'+
        '<div><p>Current south asians find businesses/boutiques from their home towns on social media like facebook and has a real design consulation on phone. Abuot 68 percent of people prefer this method as they feel they can talk to the business and have a personel relationship</p></div>'+
    '</div>'+  
    '<div class="col-6 col-6-height">'+
        '<div><img src="img/returnpolicy.jpg" alt="Ezvari"></div>'+
        '<caption><h2>Ways of shopping</h2><caption>'+
        '<div><p>About 65 percent of customers are concerened about return policy and easy way of getting a return label</p></div>'+
    '</div>'+
    '</div>'+    
    '</div>';

// var persona_container= '<div class="col-4" <img src="img/designer.jpg"></div>'+
                       // '<div class="col-4" <img src="img/designer.jpg"></div>'+
                       // '<div class="col-4" <img src="img/designer.jpg"></div>';
 

 var persona_header = '<h4>The user</h4><h1>User Personas</h1>';
 var persona_container =  '<div class="col-4 persona-taskly-styling item"><a href="#smallBusinessOwner">'+
                          '<figure><img class="image-styling" src="img/Taskly/storeowner.png" alt="smallBusinessOwner">'+
                          '<figcaption><h2>Store Owner</h2><h3>Small Business</h3>'+
                          '</figcaption></figure></a></div>'+
                          '<div class="col-4 persona-taskly-styling item"><a href="#softwareProfessional">'+
                          '<figure><img class="image-styling" src="img/Taskly/techie.png" alt="softwareProfessional">'+
                          '<figcaption><h2>Engineering Manager</h2><h3>Mid Size Company</h3>'+
                          '</figcaption></figure></a></div>'+
                          '<div class="col-4 persona-taskly-styling item"><a href="#freeLancer">'+
                          '<figure><img class="image-styling" src="img/Taskly/designer.png" alt="freeLancer">'+
                          '<figcaption><h2>Fashion Designer</h2><h3>freelancer</h3>'+
                          '</figcaption></figure></a></div>';



var scope_header =' <h1>Feature set</h1>';

 var scope_content='<div class="row">'+
  '<div class="col-4 feature-style"><img src="img/Taskly/projectOverview.png" alt="projectOverview"><h4>Project progress</h4><p>Visual representation of project progress based on the timeline</p></div>'+
  '<div class="col-4 feature-style"><img src="img/Taskly/report.png" alt="Reports"><h4>Reports</h4><p>Visual representation of reports on productivity, progress and perrormance</p></div>'+
  '<div class="col-4 feature-style"><img src="img/Taskly/calender.png" alt="Calender"><h4>Project Calender</h4><p>Project specific calender with project milestones, events and meetings at one place</p></div></div>'+
  
  '<div class="row"><div class="col-4 feature-style"><img src="img/Taskly/pin.png" alt="attachments"><h4>Attachments</h4><p>Upload images, files, ideas at one place and have the whole team access them</p></div>'+  
  '<div class="col-4 feature-style"><img src="img/Taskly/board.jpg" alt="Board"><h4>Boards</h4><p>Visual boards to track the life cycle of a task end-to-end</div>'+
  '<div class="col-4 feature-style"><img src="img/Taskly/search2.png" alt="Search"><h4>Search</h4><p>search anything from current tasks, archived tasks, team members, task assigned, events, meetings, conversations etc</p></div></div>'+
  
  '<div class="row">'+
  '<div class="col-4 feature-style"><img src="img/Taskly/category.png" alt="category"><h4>categorize tasks</h4><p>Categorize tasks based on a category to track them appropriately</p></div>'+
  '<div class="col-4 feature-style"><img src="img/Taskly/dashboard.png" alt="Dashboard"><h4>Dashboard</h4><p>Quick access to chat, calender, boards and tasks</p></div>'+
  '<div class="col-4 feature-style"><img src="img/Taskly/myCalendar.png" alt="Calendar"><h4>Personal calender</h4><p>showing tasks, events assigned to a user</p></div></div>'+
  
  '<div class="row">'+
  '<div class="col-4 feature-style"><img src="img/Taskly/chat.png" alt="Chat"><h4>Instant chat</h4><p>Chat instantly with individuals or groups</p></div>'+
  '<div class="col-4 feature-style"><img src="img/Taskly/multiProject.png" alt="Ezvari"><h4>Multiple projects</h4><p>Having access to any number of projects at a time</p></div>'+
  '<div class="col-4 feature-style"><img src="img/Taskly/subtask.png" alt="Subtask"><h4>Create subtasks</h4><p>Ability to create subtasks for a task and track the progress</p></div></div>'+
  
  '<div class="row">'+
  '<div class="col-4 feature-style"><img src="img/Taskly/Video2.png" alt="Video Conference"><h4>Video Conference</h4><p>Conduct video meetings right from the application</p></div>'+
  '<div class="col-4 feature-style"><img src="img/Taskly/statusBar.png" alt="Status Bar"><h4>Status bar</h4><p> Visual status bar on task cards for quick project status update. This can be seen on calendar, lists and boards</p></div>'+
  '<div class="col-4 feature-style"><img src="img/Taskly/edit.png" alt="Calendar"><h4>Edit Tasks</h4><p>Create & edit tasks directly on calender</p></div></div>'+
  '<div class="row">'+
  '<div class="col-4 feature-style"><img src="img/Taskly/dd.png" alt="Ezvari"><h4>Move Cards</h4><p>Drag and drop cards on board to update the status of tasks on the board</p></div>'+
  '<div class="col-4 feature-style"><img src="img/Taskly/wiki.png" alt="Wiki"><h4>Internal Wikipedia</h4><p>Team can create, edit and read articles or posts made by team members</p></div>'+
  '<div class="col-4 feature-style"><img src="img/Taskly/lists.png" alt="Ezvari"><h4>View Tasks</h4><p>View tasks as lists or on calender</p></div></div>';


var freeLancer = '<div id="content">'+
      '<a href="#userPersona" title="Close" class="close-styling font-styling"><h2>X</h2></a>'+
      '<article id="persona-intro">'+
      '<div class="persona-image"><img src="img/Taskly/designer.jpg"></div>'+
      '<h1>Designer</h1>'+
      '<p>Laurel, 27years, Masters in Fine Arts, Single <p>'+
      '<p class="italic">"I  would like to have a custom board, so that I can track the status of a particular project visually</p></article>'+
      '<article id="persona-detail">'+
        '<div class="list-style">'+
          '<h1>Job Title and Major Responsibilities</h1>'+
          '<ol>'+
          '<li>Keeping up to date with the progress of collections/projects being made with various vendors</li>'+
          '<li>Designing new clothes for the upcoming season</li>'+
          '<li>Collaborating with sales and marketing teams to promote brands new collections</li></ol>'+
          '<h1>Goals and tasks they are trying to accomplish with taskly</h1> '+
          '<ol>'+
          '<li>She would like to have vendors, clients on chat so that she can quickly connect with them</li>'+
          '<li>She would like to have the option of setting up her custom board, so that she can track the status of a particular task</li>'+
          '<li>She would like to have the option of looking at her tasks at one place based on dates</li></ol>'+
          '<h1>Physical, Social and technological environment </h1>'+
          '<ol>'+
          '<li>Works long hours, extremely focused on her goals</li>'+
          '<li>Organized and disciplined</li>'+
          '<li>Follows fashion news online</li>'+
          '<li>Reading books, hiking, outdoor activities</li>'+
          '<li>Enjoys different cultures and loves traveling.</li>'+
          '<li>Tech savvy. Usually connects with friends and family on social media</li>'+
          '<li>At-least spends 3 hrs browsing the internet</li></ol>'+
      '</article></div>';

var smallBusinessOwner = '<div id="content">'+
      '<a href="#userPersona" title="Close" class="close-styling font-styling"><h2>X</h2></a>'+
      '<article id="persona-intro" class="col-3">'+
      '<div class="persona-image"><img src="img/Taskly/storeowner.jpg"></div>'+
      '<h1>Store Owner</h1>'+
      '<p>Mike Vincent, 40years, Cafe owner, Married, 2 kids <p>'+
      '<p class="italic">"I would like to quickly view the project timelines, status of the project and get notified for any updates</p></article>'+
      '<article id="persona-detail" class="col-9">'+
        '<div class="list-style">'+
          '<h1>Job Title and Major Responsibilities</h1>'+
          '<ol>'+
          '<li>Manages the inventory of the store </li>'+
          '<li>Manages sales and marketing online via social media</li>'+
          '<li>Meets with vendors to make deals to get the best product to sell in his store</li></ol>'+
          '<h1>Goals and tasks they are trying to accomplish with taskly</h1>'+
          '<ol>'+
          '<li>He would like to use taskly to track his orders with vendors</li>'+
          '<li>He would like to have an email and chat embedded in the app, so that he can contact his employees or vendors quickly</li>'+
          '<li>He would like to organize all the tasks for the month and work on them one by one</li>'+
          '<li>He would like to assign a task to his employee and track their progress</li></ol>'+
          '<h1>Physical, Social and technological environment </h1>'+
          '<ol>'+
          '<li>Wakes up early in the morning. Likes his morning runs</li>'+
          '<li>Cognizant of what he is selling</li>'+
          '<li>Follows politics and is a passionate reader.</li>'+
          '<li>Spends time with his family during weekends</li></ol>'+
      '</article></div>';

var softwareProfessional = '<div id="content">'+
      '<a href="#userPersona" title="Close" class="close-styling font-styling"><h2>X</h2></a>'+
      '<article id="persona-intro" class="col-3">'+
      '<div class="persona-image"><img src="img/Taskly/techie.jpg"></div>'+
      '<h1>Engineering Manager</h1>'+
      '<p>Sam, 32years, Bachelors in Computer Science, Married, No children <p>'+
      '<p class="italic">"I  would like to have a custom board, so that I can track the status of a particular project visually</p></article>'+
      '<article id="persona-detail" class="col-9">'+
        '<div class="list-style">'+
          '<h1>Job Title and Major Responsibilities</h1>'+
          '<ol>'+
          '<li>Managing stake holders and project deliverables</li>'+
          '<li>Assigning tasks to his team to meet the project deadlines</li>'+
          '<li>Track teams and individual employees progress</li></ol>'+
          '<h1>Goals and tasks they are trying to accomplish with taskly</h1> '+
          '<ol>'+
          '<li>Visually representing the tasks, will give him clear picture of what is left to do</li>'+
          '<li>He would like to assign tasks and view tasks that are assigned to him</li>'+
          '<li>He would like to schedule meetings or communicate with his colleagues via chat or email</li></ol>'+
          '<h1>Physical, Social and technological environment </h1>'+
          '<ol>'+
          '<li>Works at Google. Lives in silicon valley</li>'+
          '<li>Loves basketball, traveling and technology</li>'+
          '<li>Enjoys hiking and nature</li></ol>'+
      '</article></div>';
      
$("#intro_section").append(intro_section);
$("#challenge").append(challenge);
$("#role").append(role);
$(".scope-heading").append(scope_header);
$(".scope-content").append(scope_content);
$("#competitiveAnalysis_header").append(competitiveAnalysis_header);
$(".marketPanel").append(market_panel);
$(".productPanel").append(product_panel);
$(".usabilityPanel").append(usability_panel);
$(".userInsights_content").append(userInsights_content);
$(".userInsights_header").append(userInsights_header);
$(".persona_header").append(persona_header);
$(".persona_container").append(persona_container);
$("#freeLancer").append(freeLancer);
$("#smallBusinessOwner").append(smallBusinessOwner);
$("#softwareProfessional").append(softwareProfessional);


  $(document).ready(function() {
    $(".market").click(function() {
      $(".marketPanel").slideToggle("slow");
    });
  });

  $(document).ready(function() {
    $(".product").click(function() {
      $(".productPanel").slideToggle("slow");
    });
  });

  $(document).ready(function() {
    $(".usability").click(function() {
      $(".usabilityPanel").slideToggle("slow");
    });
  });

$(document).ready(function () {
  $('.modalbox').on('mouseover', function () {
    document.body.style.overflow='hidden';
  });
  $('.modalbox').on('mouseout', function () {
    document.body.style.overflow='auto';
  });
});

$('.modalbox').on("click", function(){
$("#persona-detail").scrollTop(0);
});

$(document).ready( function() {
        $("#footer").load("footer.html");});

$(document).ready( function() {
        $("#navigation").load("nav.html");});

    

