import java.util.ArrayList;

public class TestOrders {
    public static void main(String[] args){

    Item item1 = new Item();
    item1.name = "Mocha";
    item1.price = 5.00;

    Item item2 = new Item();
    item2.name = "latte";
    item2.price = 6.00;

    Item item3 = new Item();
    item3.name = "drip coffee";
    item3.price = 2.00;

    Item item4 = new Item();
    item4.name = "capuccino";
    item4.price = 3.50;

    ArrayList<Item> items = new ArrayList<Item>();
    items.add(item1);
    items.add(item2);
    items.add(item3);
    items.add(item4);

    Order order1 = new Order();
    order1.name = "Cindhuri";
    order1.total = 19.00;
    order1.ready = true;
    order1.items = new ArrayList<Item>();
    order1.items.add(item4);

    Order order2 = new Order();
    order2.name = "Jimmy";
    order2.total = 15.00;
    order2.ready = false;
    order2.items = new ArrayList<Item>();
    order2.items.add(item1);
    order2.total += item1.price;

    Order order3 = new Order();
    order3.name = "Noah";
    order3.total = 12.00;
    order3.ready = true;
    order3.items = new ArrayList<Item>();
    order3.items.add(item4);

    Order order4 = new Order();
    order4.name = "Sam";
    order4.total = 12.00;
    order4.ready = true;
    order4.items = new ArrayList<Item>();
    order4.items.add(item3);


    order4.items.add(item2);
    order4.items.add(item2);

    order1.ready = true;
    order2.ready = true;

    System.out.printf("Name: %s\n", order1.name);
    System.out.printf("Total: %s\n", order1.total);
    System.out.printf("Ready: %s\n", order1.ready);
    for(Item item: order1.items){
        System.out.printf("Items: %s\n", item.name);
    }

    System.out.printf("Name: %s\n", order2.total);

    System.out.printf("Name: %s\n", order4.name);
    System.out.printf("Total: %s\n", order4.total);
    System.out.printf("Ready: %s\n", order4.ready);
    for(Item item: order4.items){
        System.out.printf("Items: %s\n", item.name);
    }


    // System.out.println("testttttttinggggg");

    // Item item100 = new Item();
    // Item item101 = new Item("Shoes");


    }
}