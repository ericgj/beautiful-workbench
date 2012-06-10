require File.expand_path('boot', File.dirname(__FILE__))

use Rack::Static, :root => 'public', 
                  :urls => ['/css', '/images', '/js'],
                  :cache_control => 'public'
          
map '/api' do
  run API
end

map '/contrib' do
  run Contrib
end