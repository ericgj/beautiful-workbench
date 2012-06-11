require 'sinatra/base'
require 'slim'

class Contrib < Sinatra::Base

  set :routes_index, {}
  
  get '/' do
    slim :index
  end
  
  template :layout do  <<-_____
doctype html
html
  head
    link href="/css/reset.css" rel="stylesheet" type="text/css"
    link href="/css/application.css" rel="stylesheet" type="text/css"
    link href="/css/jqcloud/jqcloud.css" rel="stylesheet" type="text/css"
  body
    == yield
  _____
  end
  
  template :index do  <<-_____
h1 Contributions
ul
  - Contrib.routes_index.sort.each do |author, rs|
    li
      h2 = author
      ul
        - rs.each do |r, desc|
          li
            a href=to("/" + author + "/" + r) = desc
_____
  end
  
end

Dir[ File.expand_path('routes/*.rb', Contrib.root) ].each do |contrib_file|

  routes = File.read(contrib_file)
  Contrib.instance_eval(routes)
  
end