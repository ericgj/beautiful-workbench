routes_index['rafadc'] = [
  ['3', 'An approximation on building a tag cloud']
]

get '/rafadc/3' do
  slim :'rafadc/cloud'
end
