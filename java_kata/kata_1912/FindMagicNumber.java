/*
Pour bien se réveiller ce matin, tu vas devoir écrire un programme en Java où l'utilisateur tente de deviner, 
via la console, un nombre magique (nombre aléatoire entre 1 et 100 généré par le programme).
Après chaque tentative, le programme indique si le nombre est trop grand, trop petit, ou correct.
Bonus : affiche le nombre total de tentatives nécessaires pour trouver le nombre.
Voici un exemple de retour à afficher :
Bienvenue dans le jeu du Nombre Magique !
J'ai choisi un nombre entre 1 et 100. Essaie de le deviner.
Entre ta proposition : 50
Trop grand !
Entre ta proposition : 25
Trop petit !
Entre ta proposition : 37
Félicitations, tu as trouvé le nombre magique [en 3 tentatives ] !
Pour cet exercice, tu peux avoir besoin d'utiliser la classe Scanner et Random :clin_d'œil:
*/

import java.util.Random;
import java.util.Scanner;

public class FindMagicNumber{   
    
    public static void main(String[] args){
        int randomNumber;
        int count = 0;
        int numberChoiced =0;
        // int magicNumber = (int) (Math.random()*100)+1;
        // System.out.println(magicNumber);

        Scanner scanner = new Scanner(System.in);
        Random random = new Random();
        randomNumber = random.nextInt(100)+1;

        System.out.println("Random number : "+ randomNumber);
        System.out.println("Bienvenue dans le jeu du Nombre Magique !");
        System.out.println("J'ai choisi un nombre entre 1 et 100. Essaie de le deviner.");
        System.out.println("Entre ta proposition : ");

        try {
            while (numberChoiced != randomNumber){
                numberChoiced = scanner.nextInt();

                if(numberChoiced<1){
                    System.out.println("Le nombre "+ numberChoiced +" inférieur à 0. Veuillez choisir un nombre en 1 et 100");
                    count--;
                } else if (numberChoiced>100){
                    System.out.println("Le nombre "+ numberChoiced +" est supérieur à 100. Veuillez choisir un nombre en 1 et 100");
                    count--;
                } else if(numberChoiced < randomNumber){
                    System.out.println("Trop petit ! Essaie encore : ");
                } else if(numberChoiced > randomNumber){
                    System.out.println("Trop grand ! Essaie encore : ");
                }
                count++;
            }
        
            System.out.println("Félicitations, tu as trouvé le nombre magique en " + count + " tentative"+(count>1?"s":"")+" !");
            scanner.close();

        } catch (Exception e) {
            System.out.println("Erreur: Veuillez entrer des nombres valides.");
        }

    }
}