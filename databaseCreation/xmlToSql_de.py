import re
import random


def randomly_attribute(attribute):
    couleurs_cheveux = ['Schwarz','Braun','Rot','Blond','Grau','Weiss']
    couleurs_cheveux_weights= [42, 30, 10, 10, 5, 3]
    couleurs_yeux = ['Braun','Blau','Grau','Grün','Schwarz','Rot']
    couleurs_yeux_weights= [42, 30, 10, 10, 5, 3]
    if attribute=="Haare":
        return random.choices(couleurs_cheveux, weights=couleurs_cheveux_weights)[0]
    elif attribute=="Augen":
        return random.choices(couleurs_yeux, weights=couleurs_yeux_weights)[0]
    else:
        return "?"

def preprocessing(target):
    target = re.sub(r'\n(?!\|)', ', ', target)
    return target.replace('*','').replace('[', '').replace(']', '')

def getAttribute(attribute, page):
    if page.comment is not None:
        page.comment.extract() #Remove comments
    target = page.text
    target = preprocessing(target)
    matchingString = f'\|{attribute}=([^\n\{{\}}<>]*)[^\n]*\n\|'
    result="?"
    if attribute == "Tod" or attribute == "Geburt":
        try:
            result = re.search(f'\|{attribute}=.*?(\d{{4}}).*?\s\|',target).group(1)
        except:
            return "0"
    else:
        try:
            result = re.search(matchingString, target).group(1)
            if result == "":
                result=randomly_attribute(attribute)
        except:
            return "?"
    result = result.replace("'","('')")
    return result