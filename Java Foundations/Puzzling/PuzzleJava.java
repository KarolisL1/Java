import java.util.ArrayList;
import java.util.Random;

public class PuzzleJava {
    public ArrayList<Integer> getTenRolls() {
        ArrayList<Integer> rolls = new ArrayList<Integer>();
        Random rand = new Random();
        for (int i = 0; i < 10; i++) {
            rolls.add(rand.nextInt(20) + 1);
        }
        return rolls;
    }

    public char getRandomLetter() {
        // ArrayList<String> letters = new ArrayList<String>();
        Random rand = new Random();
        char[] alphabet = "abcdefghijklmnopqrstuvwxyz".toCharArray();
        // System.out.println(alphabet);
        int randomNum = rand.nextInt(26);
        System.out.println(alphabet[randomNum]);
        // letters.add(rand.nextInt(26) + "A");
        return alphabet[randomNum];
    }

    public String generatePassword() {
        String password = new String();
        for (int i = 0; i < 8; i++) {
            // password.add(getRandomLetter().toString());
            password += (Character.toString(getRandomLetter()));
        }
        return password;
    }

    public String randomPassword(int i){
        String password = new String();
        for (int j = 0; j < i; j++) {
            password += (Character.toString(getRandomLetter()));
        }
        return password;
    }

}