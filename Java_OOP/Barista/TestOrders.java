import java.util.ArrayList;

public class TestOrders {
    public static void main(String[] args){

        //2 order without names
        Order order2 = new Order();
        Order order3 = new Order();

        //3 order with names
        Order order1 = new Order("John");
        Order order4 = new Order("Mike");
        Order order5 = new Order("Tom");

        //Items
        Item item1 = new Item("Bananas", 1.99);
        Item item2 = new Item("Apples", 2.99);
        Item item3 = new Item("Oranges", 3.99);

        order1.addItem(item1);
        order1.printItems();
        

        order1.setReady(true);
        order1.getStatusMessage();
        order1.addItem(item2);
        order1.getOrderTotal();

        order1.display();
    }
}