public class Main {
    public static void main(String[] args) {
        Email email = new Email();
        Thread miHilo = new Thread(email);
        miHilo.start();
    }
}