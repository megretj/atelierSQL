import re
import random


def randomly_attribute(attribute):
    couleurs_cheveux = ['Noirs','Bruns','Roux','Blonds','Gris','Blancs']
    couleurs_cheveux_weights= [42, 30, 10, 10, 5, 3]
    couleurs_yeux = ['Bruns','Marron','Bleus','Gris','Verts','Noirs','Violets']
    couleurs_yeux_weights= [22,20, 30, 10, 10, 5, 3]
    patronus = ['Phénix','Dragon','Hippogriffe','Hibou','Licorne','Veracrasse','Niffleur','Fléreur','Crabe de Feu','Boursouf','Chimère','Hippocampe','Chat','Chien','Kappa','Nundu','Limace à cornes','Bison','Grenouille lunaire','Vache','Mouette','Antilope','Canard','Iguane','Snallygaster','Puckwoodgenie','Baleine']
    if attribute=="Cheveux":
        return random.choices(couleurs_cheveux)[0]
    elif attribute=="Yeux":
        return random.choices(couleurs_yeux)[0]
    elif attribute=="Patrouns":
        return random.choices(patronus)[0]
    else:
        return "?"

def preprocessing(target):
    target = re.sub(r'\n(?!\|)', ', ', target)
    return target.replace('*','').replace('[', '').replace(']', '')

def getAttribute(attribute, page):
    if page.comment is not None:
        page.comment.extract() #Remove comment
    target = page.text
    target = preprocessing(target)
    matchingString = f'\|{attribute}=([^\n\{{\}}<>]*)[^\n]*\n\|'
    result="?"
    if attribute == "Mort" or attribute == "Naissance":
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
    result = result.replace("'","''")
    result.capitalize()
    result.strip()
    return result