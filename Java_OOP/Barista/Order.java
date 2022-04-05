import java.util.ArrayList;

public class Order {
    private String name;
    // private Double total;
    private boolean ready;
    private ArrayList<Item> items;

    //Constructor's
    public Order() {
        this.name = "Guest";
        this.items= new ArrayList<Item>(); //ask about this
    }
    public Order(String name){
        this.name = name;
        this.items= new ArrayList<Item>();
    }

    //methods
    public void addItem(Item newItem){
        // System.out.println(newItem.getName());
        items.add(newItem);
    }

    public void printItems(){
        for(Item item: items){
            System.out.println(item.getName());
        }
    }

    public void getStatusMessage(){
        if(ready){
            System.out.println("Order is ready");
        }
        else{
            System.out.println("Thank you for waiting. Your order will be ready soon.");
        }
    }

    public void getOrderTotal(){
        Double total = 0.0;
        for(Item item: items){
            total += item.getPrice();
        }
        System.out.println("Total: " + total);
    }

    public void display(){
        System.out.println("Customer Name: " + name);
        for(Item item: items){
            System.out.println(item.getName() + ": " + item.getPrice());
        }
        getOrderTotal();
    }

    //getter
    public String getName() {
        return name;
    }

    public boolean isReady() {
        return ready;
    }

    public ArrayList<Item> getItems() {
        return items;
    }

    //setter
    public void setName(String name) {
        this.name = name;
    }

    public void setReady(boolean ready) {
        this.ready = ready;
    }

    public void setItems(ArrayList<Item> setItems) {
        this.items = setItems;
    }

}