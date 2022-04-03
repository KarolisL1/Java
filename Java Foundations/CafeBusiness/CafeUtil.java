import java.util.ArrayList;

public class CafeUtil {
    public Integer getStreakGoal() {
        int sum = 0;
        for (int i = 0; i < 11; i++) {
            sum += i;
        }
        return sum;
    }

    public double getOrderTotal(double[] lineItems) {
        double total = 0;
        for (int i = 0; i < lineItems.length; i++) {
            total += lineItems[i];
        }
        return total;
    }

    public void displayMenu(ArrayList<String> menu) {
        for (int i = 0; i < menu.size(); i++) {
            // String value = menu.indexOf(menu, i);
            // System.out.println(value);
            int post = menu.indexOf(menu.get(i));
            // System.out.println(post);
            System.out.println(post + " " + menu.get(i));
        }
    }
}