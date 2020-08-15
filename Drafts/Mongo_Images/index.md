Title: Mongo Image Database
Date: 08/15/2020

## Mongo for images

### Background

We recently needed to store images for the SmartPiggies mvp,
to support a curated section that could be updates frequently.

MongoDB facilitates the database needs for the backend, but 
is primarily a document database, not designed for larger
files. A quote from a development studio wanted to use MySQL
for a content management system, and I didn't really want
to run multiple databases, so I went to find out if MongoDB
could support image files. It took a bit of poking around
but I was able to get an image database working with MongoDB.

Because the setup was a bit confusing, and I was unable to 
find a working example with the latest version of Mongo,
I am going to detail the solution I currently have running
in production, in an effort to help someone else, but mainly
as a historical document that I can refer back to if I ever
need to do it again!

### What We Did

