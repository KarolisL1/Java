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
            int post = menu.indexOf(menu.get(i));
            System.out.println(post + " " + menu.get(i));
        }
    }

    public void addCustomer(ArrayList<String> customers) {
        System.out.println("Please enter your name:");
        String userName = System.console().readLine();
        System.out.println("Hello " + userName);
        customers.add(userName);
        int customervalue = customers.size();
        System.out.printf("There are %d people in front of you.\n", customervalue);
        System.out.println(customers);
    }

    public void printPriceChart(String product, double price, int maxQuantity){
        // System.out.printf("%s costs $%.2f each.\n", product, price);
        // System.out.printf("We have %d %s available.\n", maxQuantity, product);
        System.out.println(product);
        for(int i =0; i<maxQuantity; i++){
            System.out.printf("%d - $%.2f\n", i+1, price*(i+1));
        }
    }
}