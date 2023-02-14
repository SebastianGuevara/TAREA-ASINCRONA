public class Email implements Runnable{
    @Override
    public void run()
    {
        try
        {
            System.out.println("Enviando correo...");
            Thread.sleep(2000);
            System.out.println("El correo se ha enviado exitosamente");
            Thread.sleep(5000);
            System.out.println("Abriendo correo...");
            System.out.println("Hola Pedro Emilio Velazquez, estas invitado a celebra mi fiesta de cumpleaños el día 2 de marzo del 2023.");
        }
        catch (InterruptedException e)
        {
            System.out.println(e);
        }

    }
}
