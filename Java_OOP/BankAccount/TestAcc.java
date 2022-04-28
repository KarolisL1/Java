public class TestAcc {
    public static void main(String[] args){
        BankAccount acc = new BankAccount();
        acc.depositMoney(100.0, "checking");
        acc.depositMoney(100.0, "savings");
        acc.withDrawMoney(50.0, "checking");
        acc.totalMoney();
        // acc.getAccNumber();

        BankAccount acc1 = new BankAccount();
        acc1.depositMoney(100.0, "checking");
        acc1.depositMoney(100.0, "savings");
        acc1.withDrawMoney(50.0, "checking");
        acc1.totalMoney();
    }
}