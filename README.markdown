## Beautiful Visuals

A simple workbench for trying out different visualization techniques in a
collaborative way. Based on the book _Beautiful Visualization_.

### How to install sample data

Drop the file in `data`, and it will add a route for the file under `/api`.
So the file `data/foo.json`  =>  the url `/api/foo.json`.

### How to set up a route

1. Add a ruby file named so you can identify it as yours (e.g. use your github 
name), to `routes`.

2. This file should be written as if it were a classic Sinatra app --i.e. top-
level routes and settings.

3. In general the routes should be in the form <br>
`#{your-name}/{chapter-or-visualization-name}`

4. Also, specify the routes that should be publicly viewable like this:

    routes_index['eric'] = [
      [ '3', 'word cloud visualizations'],
      [ '4', 'color experiments' ]      
    ]

### How to set up your views

Views should be saved to the `views` subdirectory, or done as named templates
 within your routes file. They can use any templating engine you want. 

There is a bare-bones default layout which loads a reset and application css and 
yields your content as the body. It's written in [slim](http://slim-lang.org).
If you want to use this layout but not slim in your views, do

    haml :my_view, :layout_engine => :slim`

Or if you want to provide your own layout, 

    erb :my_view, :layout => :'my_name/my_layout'

Javascript, CSS, and images are in directories under `public` -- feel free to 
drop whatever you need in.


### How to run locally

1. `gem install sinatra && gem install slim`
2. `rackup` from the root directory
3. Browse [http://localhost:9292/contrib](http://localhost:9292/contrib).

