public class TestOrders {
    public static void main(String[] args){
    
    CoffeeKiosk starbucks = new CoffeeKiosk();
    
    Item item1 = new Item("Bananas", 1.99);
    Item item2 = new Item("Apples", 2.99);
    Item item3 = new Item("Oranges", 3.99);

    starbucks.addMenuItem(item1);
    starbucks.addMenuItem(item2);
    starbucks.addMenuItem(item3);

    starbucks.displayMenu();
    starbucks.newOrder();

    }
}