import re

def getAttribute(attribute, target):
    try:
        result = re.search(f'\|{attribute}=([\w\ 0-9,]*?)\W.*?\s\|', target).group(1)
        if result == "":
            return "Inconnu"
    except:
        return "Inconnu"
    return result

def getNom(target):
    try:
        result = re.search('\|Nom=(.*?)\s\|', target).group(1)
    except:
        return ""
    return result

def getGenre(target):
    try:
        result = re.search('\|Genre=\ ?([A-Za-z0-9â]*?)\s\|', target).group(1)
    except:
        return ""
    return result

def getCheveux(target):
    try:
        result = re.search('\|Cheveux=([A-Za-z0-9]*?)\s\|', target).group(1)
        if result == "":
            return "Inconnu"
    except:
        return "Inconnu"
    return result

def getNaissance(target):
    try:
        result = re.search('\|Naissance=(.*?)\s\|', target).group(1)
        if result == "":
            return "Inconnu"
    except:
        return "Inconnu"
    return result

def getMort(target):
    try:
        result = re.search('\|Mort=(.*?)\s\|', target).group(1)
        if result == "":
            return "Inconnu"
    except:
        return "Inconnu"
    return result

def getMort(target):
    return ""

