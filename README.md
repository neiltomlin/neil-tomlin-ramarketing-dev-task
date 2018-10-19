# neil-tomlin-ramarketing-dev-task

## Instructions

I've created this project from scratch and used some packages to process the sass and minify both the css and js. You could run these by running the build-prod script from the cli but for the purposes of reviewing my submission you simply need to clone this repository and then navigate to it in terminal, install and then run the start-dev script. e.g.

`git clone https://github.com/neiltomlin/neil-tomlin-ramarketing-dev-task`

`cd neil-tomlin-ramarketing-dev-task`

`npm install`

`npm run start-dev`

If there are any issues, please let me know.

## Preparation
Before beginning the development task, I decided to:
 - Read and reread the brief, taking note of requested technologies
 - Considered the implications of using those technologies and what benefits others might provide
 - Viewed the images and wireframes, taking note of the UX pointers and how I would solve the problem
 - Considered importance of end user experience and cost if this were a real scenario (minimum http requests, small files, etc.)
 - Set up my git repository and began a new project
 - Set up required build tools (node-sass, http-server etc.) to provide good development environment and finished deliverable
 
 ## Development
 ### Initial Thoughts
 Without access to Adobe CS or a design styleguide, it wasn't the simplest task to generate font colours and images but I opted to settle for a colour picker tool and cropping from the existing images. Were this a real life scenario, I would make a list of the required assets and return to UX/design handover. Given that this is a development task for a job application, I've settled for this makeshift solution.
 
 Similarly, with only a flat image, no real client requirements and no detailed understanding of Ramarketing's CMS, I can't be sure how to develop a thorough solution that covers dynamic content: Can there be more than 4 products? Can there be more than 5 nav links? etc. My decision is to develop as though this won't change in order to spend more time to demonstrate a wider range of skills.
 
 The dev task itself is very large - essentially the flat build of an entire site.
  
 ### Development Reflections
 Javascript - The brief for developers asks for jQuery implementation which I have provided. With more time however, I feel that developing a solution in vanilla javascript would provide a better experience for the end user. I would also have liked to have demonstrated my experience with ES6 version of the solution.
 
 Time - I didn't log total time spent on this but I estimate I covered at least 12 hours creating all of the build tasks from scratch and configuring CSS and getting colours and images. I'm not 100% content with the work I've done but I feel I've demonstrated enough of an understanding of responsive development considerations.
 
 I took a mobile-first approach but have a hacky solution to the header bar on small screens. If I were producing this professionally, I would consult with UX on how this should be displayed to the customer.
 
  ### What I would have wanted to add
  
  I wouldn't normally spend this long on a dev test but wanted to provide you a taste of my approach and assurance of my competence with the front end technology stack.
  
  It was my intention to also add the following features but given the extent of the hours I already committed to this task I've decided against including these.
  
  - Sticky header - follows user down the page
  
  - Expanding search field - the search icon would expand into a text field when hovered or clicked
  
  - Collapsing nav - I've added the hamburger icon as is expected behaviour in small screens, I would have the \<li\> appear in a sliding down popup when this is clicked.
  
  - Products carousel - assuming that content is dynamic, there may be the case of handling less than 4 products shown on large screens but there's also the case that multiple products cannot be viewed on small screens, i would implement a carousel with handles to flick through these, or allow horizontal scrolling in phones like on shopping sites, however the UX design would advise
  
  - Fading hero banner - The content below the product component should attract customers and invite interaction whilst demonstrating quality. I would have a fading animation between slides on this banner
  
  - The rest of the page - It would obviously look great to have finished the rest of the page but I don't work for you yet!
 
 ## Review of Case Study
  https://aquila-bm.com/
  
  Taking a look at some of Ramarketing's work, I can immediately see areas I would seek to improve going forward as a Senior Developer on the team.
  
  As a user of the site, there is a noticeable delay on hover state changes, without a deep investigation, I would suspect that the jQuery is the biggest bottleneck. Hover states are easily covered in CSS for menu dropdowns and colour changes of links etc. You would not be able to achieve the same aesthetics of the main banner with CSS alone however. I would suspect that removing the dependency on jQuery would speed up the interaction and would be one avenue of investigation.
  
  There are some broken styles in some viewport sizes. 
  
  There are a number of 404 errors on missing resources.
  
  There are 23 separate HTTP requests for JS scripts alone on the page and some that are not minified. If this were my project, I would have advised against this and questioned the need for each and tried to minimise the impact of the essentials.
  