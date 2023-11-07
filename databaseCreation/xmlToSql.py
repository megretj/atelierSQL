import re

def preprocessing(target):
    target = re.sub(r'\n(?!\|)', ', ', target)
    return target.replace('*','').replace('[', '').replace(']', '')

def getAttribute(attribute, target):
    target = preprocessing(target)
    matchingString = f'\|{attribute}=([^\n\{{\}}<>]*)[^\n]*\n\|'
    result="?"
    if attribute == "Mort" or attribute == "Naissance":
        try:
            result = re.search('\|{}=.*?(\d{4}).*?\s\|',target).group(1)
        except:
            return "0"
    else:
        #if attribute == "Sang":
            #matchingString = "\|Sang=\[\[([^]]+)\]\]"
        #if attribute == "Localisation":
            #matchingString = "\|Localisation=.*?\[\[([^]]+)\]\]"
        #if attribute == "Statut":
            #matchingString = "\|Statut=([^\{\}\n]*).*\n\|"
        try:
            result = re.search(matchingString, target).group(1)
            if result == "":
                result="?"
        except:
            return "?"
    result = result.replace("'","('')")
    return result