public class Item {
    private String name;
    private Double price;

    //constructor
    public Item(String name, Double price) {
        this.name = name;
        this.price = price;
    }

    //getter

    public String getName() {
        return name;
    }

    public Double getPrice() {
        return price;
    }

    //setter
    public void setName(String name) {
        this.name = name;
    }

    public void setPrice(Double price) {
        this.price = price;
    }
}