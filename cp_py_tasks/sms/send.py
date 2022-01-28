from twilio.rest import Client
from credentials import account_sid,auth_token,my_cell,my_twi

client = Client(account_sid,auth_token)
my_msg = "test message"
message = client.messages.create(to=my_cell,from_=my_twi,body=my_msg)
