import java.util.Random;
import java.util.ArrayList;

public class BankAccount {
    private Double checking_balance;
    private Double savings_balance;
    private static int num_of_accounts;
    private static int total_money;
    private static Long account_number;

    public BankAccount(){
        checking_balance = 0.0;
        savings_balance = 0.0;
        num_of_accounts++;
        total_money += checking_balance + savings_balance;
        SetAccNumber();
    }

    public void depositMoney(Double amount, String account){
        if(account.equals("checking")){
            checking_balance += amount;
            total_money += amount;
        }
        else if(account.equals("savings")){
            savings_balance += amount;
            total_money += amount;
        }
        else{
            System.out.println("Invalid account");
        }
    }

    public void withDrawMoney(Double amount, String Account){
        if(Account.equals("checking")){
            if(checking_balance >= amount){
                checking_balance -= amount;
                total_money -= amount;
            }
            else{
                System.out.println("Insufficient funds");
            }
        }
        else if(Account.equals("savings")){
            if(savings_balance >= amount){
                savings_balance -= amount;
                total_money -= amount;
            }
            else{
                System.out.println("Insufficient funds");
            }
        }
        else{
            System.out.println("Invalid account");
        }
    }

    public void totalMoney(){
        System.out.println("Total money: " + (savings_balance + checking_balance));
    }

    //private method!!!
    private void SetAccNumber(){
        Random rand = new Random();
        String temp = "";
        // account_number = rand.nextInt(999999999);
        for (int i = 0; i < 10; i++) {
            temp += (rand.nextInt(9));
        }
        account_number = Long.parseLong(temp);
        System.out.println("Account number: " + account_number);
    }


    //getters
    public double GetChecking_balance(){
        return checking_balance;
    }

    public double GetSavings_balance(){
        return savings_balance;
    }
}