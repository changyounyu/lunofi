Lunofi
======

Architecture
------------

The initial prototype for lunofi is built primarily on [Precog](precog.com). 

The Proof-of-Concept has no server-side logic. All data are stored at Precog and all calculations happen in Precog via the [Quirrel](http://quirrel-lang.org/) language. Querries are stored in JavaScript and sent to Precog directly from the browser.

Data were loaded into smcfarland's Precog via the [Labcoat](http://labcoat.precog.com/) tool. 

Client-side CSS and assets are derived from [Bootstap](http://twitter.github.com/bootstrap/).
