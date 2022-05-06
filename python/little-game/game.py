

from os import kill

# generate random integer values
from random import seed
from random import randint
import time
# seed random number generator
seed(1)

class Player:
    def __init__(self):
        self.health = 100
        self.meleeAttackValue = 10
        self.spellAttackValue = 5
    
    def meleeAttack(self, enemy):
        attackRoll = randint(0, self.meleeAttackValue)
        if (attackRoll == 0):
            print("The attack missed!")
        else:
            print("You swung your sword for {} damage!".format(str(attackRoll)))
            enemy.takeDamage(attackRoll)
    
    def spellAttack(self, enemy):
        print("You cast fireball for {} damage!".format(str(self.spellAttackValue)))
        enemy.takeDamage(self.spellAttackValue)

    def killShot(self, enemy):
        print("You shot your gun {} damage!".format(str(100)))
        enemy.takeDamage(100)

    def takeDamage(self, damageValue): 
        print("The player took " + str(damageValue) + " damage!")
        self.health -= damageValue

class Enemy: 
    def __init__(self): 
        self.health = 10
        self.damage = 10

    def takeDamage(self, damageValue): 
        print("The enemy took " + str(damageValue) + " damage!")
        self.health -= damageValue

    def attack(self, player): 
        attackRoll = randint(0, self.damage)
        if (attackRoll == 0):
            print("The enemy {}'s attack missed!".format(enemy.__class__.__name__,))
        else:
            print("The enemy {} attacked for {}".format(enemy.__class__.__name__, str(attackRoll)))
            player.takeDamage(attackRoll)


class Wolf(Enemy):
    def __init__(self):
        self.health = 10
        self.damage = 10 

class Goblin(Enemy):
    def __init__(self):
        self.health = 20
        self.damage = 10 

# Game Setup 
player = Player()
enemy = Goblin()
print("A wild Goblin has appeared!")
killCount = 0

def printHealth():
    print("The player's health is {}".format(str(player.health)))
    print("The enemy's health is {}".format(str(enemy.health)))
    
def printKillCount():
    print("You killed {} monsters!".format(str(killCount)))

def spawnNewEnemy():
    global enemy
    global killCount

    print("The enemy {} has been defeated!".format(enemy.__class__.__name__))
    
    coinFlip = randint(0, 1)
    
    if (coinFlip == 0):
        enemy = Goblin()
    else: 
        enemy = Wolf()

    killCount += 1
    print("A wild {} has appeared!".format(enemy.__class__.__name__))

def endGame():
    print("Oh no! You were slain by {}".format(enemy.__class__.__name__))
    print("You killed {} monsters!".format(str(killCount)))

# Game Loop 

while(True): 
    command = input ("What will you do? >> ")

    if (command == "win"):
        print("You won!")
        break
    elif (command == "melee"):
        player.meleeAttack(enemy)
    elif (command == "spell"):
        player.spellAttack(enemy)    
    elif (command == "killshot"):
        player.killShot(enemy) 
    elif (command == "end"):
        endGame()
        break 
    else:
        print("Invalid command!")

    print("============================")
    time.sleep(1)

    #Handle enemy turn 
    if (enemy.health <= 0):
            spawnNewEnemy()
    else:
        enemy.attack(player)
        if(player.health <= 0):
            endGame()

    print("============================")
    time.sleep(1)



print("============================")
print("Game Over!")
printKillCount()

