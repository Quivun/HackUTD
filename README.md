# HackUTD
readmeHere



Setting up the connections and hosting

sudo apt-get install libpq-dev
sudo pip3 install psycopg2
sudo pip3 install psycopg2-binary

In RaspPi4
sudo apt-get update
sudo apt-get install -y git
git clone https://github.com/rydercalmdown/pi_home_reverse_proxy.git
cd pi_home_reverse_proxy
make install-pi
ssh-keygen
# Copy RSA Pub, will use it later.


In VM 
sudo apt-get update
sudo apt-get install -y nginx