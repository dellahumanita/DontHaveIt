import requests, bs4

res = requests.get('https://www.thespruceeats.com/ingredient-substitution-chart-3054056')
res.raise_for_status()
soup = bs4.BeautifulSoup(res.text, 'lxml')

# find table tag
# find tr tags and extract
# write the extractions to a .json file
# with keys: ingredient, amount, substitute