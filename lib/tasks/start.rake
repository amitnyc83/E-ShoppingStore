namespace :db do
  desc 'Drop, create, migrate and seed db'
  task dcms: :environment do
    puts 'dropping db...'
    Rake::Task['db:drop'].invoke

    puts 'creating db....'
    Rake::Task['db:create'].invoke

    puts 'running migrations ....'
    Rake::Task['db:migrate'].invoke

    puts 'seeding db ....'
    Rake::Task['db:seed'].invoke

    puts 'db seeded. Run rake db:start to start servers'
  end
end


task :start do
  exec 'foreman start -p 3000'
end
