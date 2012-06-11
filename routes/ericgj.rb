# define your routes like "/#{your-name}/{chapter-or-visualization-name}"

# also, add your routes to the routes_index (for displaying on index page)

routes_index['ericgj'] = [
  ['3', 'Word clouds using jQCloud']
]

get '/ericgj/3' do
  slim :'ericgj/wordcloud'
end