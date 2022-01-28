import pandas as pd
import requests
from bs4 import BeautifulSoup

page = requests.get('https://forecast.weather.gov/MapClick.php?lat=34.053570000000036&lon=-118.24544999999995#.Yd20rGhBxnJ')
soup = BeautifulSoup(page.content, 'html.parser')
week = soup.find(id='seven-day-forecast-body')
items = week.find_all(class_='tombstone-container')[1:]


period_names = [item.find(class_='period-name').get_text() for item in items]
short_descs = [item.find(class_='short-desc').get_text() for item in items]
temps = [item.find(class_='temp').get_text() for item in items]

weather_stuff = pd.DataFrame({
	'period':period_names,
	'short_desc':short_descs,
	'temp':temps,
})

print(weather_stuff)

weather_stuff.to_csv('weather.csv')





