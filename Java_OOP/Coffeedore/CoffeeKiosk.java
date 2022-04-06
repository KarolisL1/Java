import java.util.ArrayList;

public class CoffeeKiosk {
    private ArrayList<Item> menu;
    private ArrayList<Order> orders;

    public CoffeeKiosk() {
        this.menu = new ArrayList<Item>();
        this.orders = new ArrayList<Order>();
    }

    public void addMenuItem(Item item) {
        this.menu.add(item);
    }

    public void displayMenu(){
        for(int i =0; i<menu.size(); i++){
            System.out.println(i + " " + menu.get(i).getName() + " -- " + "$" + menu.get(i).getPrice());
        }
    }

    public void newOrder() {
        
    	// Shows the user a message prompt and then sets their input to a variable, name
        System.out.println("Please enter customer name for new order:");
        String name = System.console().readLine();
    
    	// Your code:
        // Create a new order with the given input string
        // Show the user the menu, so they can choose items to add.
        Order new_order = new Order(name);

        
    	// Prompts the user to enter an item number
        System.out.println("Please enter a menu item index or q to quit:");
        String itemNumber = System.console().readLine();
        
        // Write a while loop to collect all user's order items
        while(!itemNumber.equals("q")) {
            try{
                Integer integerNumber = Integer.parseInt(itemNumber);
                Item testing = menu.get(integerNumber);
                new_order.addItem(testing);
            } catch (NumberFormatException e){
                // System.out.println("Testing");
            }
            // Get the item object from the menu, and add the item to the order
            // Ask them to enter a new item index or q again, and take their input
            this.displayMenu();
            System.out.println("Please enter a menu item index or q to quit:");
            itemNumber = System.console().readLine();
        }
        // After you have collected their order, print the order details 
    	// as the example below. You may use the order's display method.
        // new_order.printItems();
        new_order.display();
        // Add the order to the list of orders
        // new_order.getOrderTotal();
        
    }

}