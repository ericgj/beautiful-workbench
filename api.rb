require 'sinatra/base'

# A stupid 1-to-1 mapping of data files to routes, for now
class API < Sinatra::Base

  Dir[ File.expand_path('data/*', API.root) ].each do |data_file|
  
    get "/#{File.basename(data_file)}", 
        :provides => File.extname(data_file).sub('.','') do
      File.read(data_file).chomp
    end
    
  end
end