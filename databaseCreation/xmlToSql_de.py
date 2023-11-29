import re
import random


def randomly_attribute(attribute):
    couleurs_cheveux = ['Schwarz','Braun','Rot','Blond','Grau','Weiss']
    couleurs_cheveux_weights= [42, 30, 10, 10, 5, 3]
    couleurs_yeux = ['Braun','Blau','Grau','Grün','Schwarz','Rot','Silbergrau']
    couleurs_yeux_weights= [42, 24, 8, 10, 5, 3,8]
    patronus = ['Hippogreif','Hase','Otter','Phönix','Fawkes','Dementor','Sphinx','Kniesel', 'Demiguise', 'Billywig', 'Bowtruckle', 'Chimära', 'Crup', 'Diricawl', 'Drachen', 'Einhorn', 'Erumpent','Hippocampus','Niffler','Salamander','Adler','Löwe','Donnervogel','Pufferfisch']
    if attribute=="Haare":
        return random.choices(couleurs_cheveux, weights=couleurs_cheveux_weights)[0]
    elif attribute=="Augen":
        return random.choices(couleurs_yeux, weights=couleurs_yeux_weights)[0]
    elif attribute=="Patronus":
        return random.choices(patronus)[0]
    elif attribute=="Geschlecht":
        return "Unbekannt"
    else:
        return "?"

def preprocessing(target):
    target = re.sub(r'\n(?!\|)', ', ', target)
    target = re.sub(r'\ ?=\ ?','=',target)
    return target.replace('*','').replace('[', '').replace(']', '')

def getAttribute(attribute, page):
    if page.comment is not None:
        page.comment.extract() #Remove comments
    target = page.text
    target = preprocessing(target)
    matchingString = f'\|{attribute}=([^\n\{{\}}<>]*)[^\n]*\n(\|)'
    result="?"
    if attribute == "Tod" or attribute == "Geburt":
        try:
            result = re.search(f'\|{attribute}=.*?\D(\d{{4}})\D.*?\s\|',target).group(1)
        except:
            return "0"
    else:
        try:
            result = re.search(matchingString, target).group(1)
            if result == "":
                result=randomly_attribute(attribute)
        except:
            return randomly_attribute(attribute)
    result = result.replace("'","''")
    if attribute != "Name":
        result = result.capitalize()
    result = result.strip()
    return result