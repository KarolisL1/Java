import java.util.ArrayList;
import java.util.Random;
public class TestPuzzle {
    
	public static void main(String[] args) {
		PuzzleJava generator = new PuzzleJava();
		ArrayList<Integer> randomRolls = generator.getTenRolls();
		// System.out.println(randomRolls);
		
        // char randomletter = generator.getRandomLetter();
        // System.out.println(randomletter);


        String randomLetters = generator.generatePassword();
        System.out.println(randomLetters);


		String randomPassword = generator.randomPassword(8);
		System.out.println("My random password: " + randomPassword);
	}
}