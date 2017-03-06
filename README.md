#STARTIST

![image](http://i.imgur.com/3LGiGHc.png?1) 

**See it here: [STARTIST](https://wdi-raginidua-project3.herokuapp.com/).**

##Background

Art can be very unaffordable for young people, and it is difficult to find places to buy inexpensive art which is exciting. I became aware that student artists sometimes sell their work, and the premise for STARTIST was born. I wanted to build an online platform where student artists can sell their work and make a name for themselves early on in their careers, and where customers can invest in the artists of the future, making art more affordable and accessible to art lovers. 

I did some research and while there are existing websites which do this, I wanted the look and feel of my website be more like a gallery.  I also decided to make the website auction-based as I felt this would be a more interesting take on the idea. 

##Build

![image](http://i.imgur.com/o3WF4tB.png?1) 

The site is a full-stack, RESTful app with authentications.  It was built using a PostgreSQL database on a Ruby on the Rails Backend, with Angular on the Frontend and Bootstrap for CSS. 

The backend has three models, Users, Pieces and Bids. The Users could be either Artists or Customers.  A User (as an artist) has many pieces and a piece belongs to a User (as an artist).  A User (as a customer) has many bids, a piece has many bids and a bid belongs to both a User (as a customer) and a piece. 

This gave me an initial insight into the more complicated relationships between models using PostgreSQL and Ruby.  I would like to experiment further to build an app which has more complex relationships.  

I included a function in the back-end controller to check when the closing time expired, which automatically updated the status of the piece to closed.  The closed piece would stop showing in the list of available pieces, would move to the artists previously sold works (if there were any bids on it) and move into the previously bought work of the highest bidder. 

We used a MEAN stack for our second project and the team project, and this was therefore my first project using Rails. Whilst I have enjoyed using both tremendously, I found certain things simpler in Rails, for example identifying and referring to the current user throughout the app.

##Additional Features to be incorporated

I am proud of the app in its current state and the amount of functionality I was able to include in a short timescale. I was also happy with the styling, which is more restrained than other projects I have previously worked on.

I intend to keep working on STARTIST in my spare time, and in particular I would like to focus on:
<li>The User Experience: I would like to spend some time making it more clear what the website is about and how to use it, perhaps by creating an about page. I love using simple, hover-based CSS animations as I have in the home-page, but currently, it is not obvious how to start this.  </li>
<li>Introduce full mobile responsiveness of the website</li>
<li>Enable users to make higher bids directly from the home page</li>
<li>Incorporate a blind bids option when the piece is first put on the websites</li>

##How to use the app

###My Profile
Once you have logged in, the website will open on the User's profile page.

If the User is a Customer:
![image](http://i.imgur.com/lrjTp08.png)

If the User is an Artist:
![image](http://i.imgur.com/AEbiTOr.png?1)

###Find Artists and visit the Artists's Profile Page

![image](http://i.imgur.com/MUdlKzt.png?1)

![image](http://i.imgur.com/lgkY8Zf.png?1)

###Look through the available Pieces

![image](http://i.imgur.com/Bp9Hjnh.png?1)

###Click on a piece to bid on it

![image](http://i.imgur.com/HJEkATl.png?1)


##Disclaimer

This website was built purely for educational purposes.  I used the work of famous artists whose work I admire for a demonstration of how the website works, and the prices I have shown are reflective of prices which may be payable for works by student artist rather than the value of any of these pieces. 

I am very happy to remove any content if requested.
