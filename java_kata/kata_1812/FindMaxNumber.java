package kata_1812;


public class FindMaxNumber{


    public int findMaxNumbInArray (int[] numberArray){
        int maxNumber = 0;
        for (int i = 0; i < numberArray.length; i++) {
            System.out.println("Itération sur index : "+ i + " -Nombre : " + numberArray[i]);
            if(numberArray[i]>maxNumber){
                maxNumber = numberArray[i];
                System.out.println("Nouveau nombre max enregistré : " +maxNumber);
            }
        }
        return maxNumber;
    }


    // Seconde solution rendre la méthode statique.
    /*public static int findMaxNumbInArray (int[] numberArray){
        int maxNumber = 0;
        for (int i = 0; i < numberArray.length; i++) {
            if(numberArray[i]>maxNumber){
                maxNumber = numberArray[i];
            }
        }
        return maxNumber;
    }*/



    public static void main(String[] args){
        
        int[] numberArray = {5, 10, 5, 20, 15, 8};

        FindMaxNumber finder = new FindMaxNumber();
        System.out.println("Plus grand nombre du tableau : " + finder.findMaxNumbInArray(numberArray));

        // Seconde solution rendre la méthode statique
        // System.out.println(findMaxNumbInArray(numberArray));
    }
}